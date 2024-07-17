//@ts-nocheck
"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { deleteProdutosAction } from "@/actions/produtos/delete-produtos-action";
import { putProdutosAction } from "@/actions/produtos/put-produtos-action";
import tokenAction from "@/actions/login/get-token";
import { url } from "@/componentes/url";

const GetProdutosIndisponiveis = () => {
  const [produtos, setProdutos] = useState([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>("");

  useEffect(() => {
    const fetchProdutos = async () => {
      const token = await tokenAction();
      const urlRequisicao = url + `/wp-json/api/produto?disponibilidade=nao`;

      try {
        const response = await fetch(urlRequisicao, {
          cache: "no-store",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error("Falha ao buscar dados");
        }

        const data = await response.json();
        console.log("Dados recebidos:", data);

        if (!data || data.length === 0) {
          setError("Nenhum produto encontrado em estoque.");
        } else {
          setProdutos(data);
        }
      } catch (error: any) {
        console.error("Erro na requisição:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProdutos();
  }, [searchTerm]);

  if (loading) return <p>Carregando...</p>;
  if (error)
    return (
      <p className="text-center text-3xl mt-4">Ocorreu um erro: {error}</p>
    );

  const handleDelete = async (produtoId: string) => {
    await deleteProdutosAction(produtoId);
    setProdutos(produtos.filter((produto) => produto.id !== produtoId));
  };

  const handleUpdate = async (
    produtoId: string,
    field: string,
    value: string
  ) => {
    const updatedProduct = produtos.find((produto) => produto.id === produtoId);
    if (updatedProduct) {
      (updatedProduct as any)[field] = value;
      await putProdutosAction(updatedProduct, produtoId);
      setProdutos([...produtos]);
    }
  };

  return (
    <div>
      <section className="flex flex-wrap justify-center items-center gap-4 mx-auto my-8 max-w-screen-xl px-4">
        {produtos.length === 0 ? (
          <p>Nenhum produto encontrado em estoque.</p>
        ) : (
          produtos.map((produto) => (
            <div
              className="flex flex-col items-center justify-center relative transform transition duration-400 hover:scale-105 max-w-xs bg-slate-100 p-4 rounded-2xl shadow-sm"
              key={produto.id}
            >
              {produto.fotos && produto.fotos.length > 0 && (
                <Link href={`/produto/${produto.id}`} className="w-72">
                  <Image
                    className="opacity-100 block w-auto h-auto transition-opacity duration-500 ease-in-out hover:opacity-30"
                    src={
                      produto.fotos[1]
                        ? produto.fotos[1].src
                        : produto.fotos[0].src
                    }
                    alt={`Imagem de ${produto.nome}`}
                    width={300}
                    height={250}
                  />
                </Link>
              )}

              <div className="p-2 w-full flex flex-col items-start">
                <h1 className="text-center text-base m-0">
                  {produto?.nome} {produto?.cor}
                </h1>
                <div className="flex items-center space-x-2">
                  <label>
                    <input
                      type="radio"
                      name={`disponibilidade-${produto.id}`}
                      value="sim"
                      checked={produto?.disponibilidade === "sim"}
                      onChange={(e) =>
                        handleUpdate(
                          produto.id,
                          "disponibilidade",
                          e.target.value
                        )
                      }
                      className="mr-1"
                    />
                    Disponível
                  </label>
                  <label>
                    <input
                      type="radio"
                      name={`disponibilidade-${produto.id}`}
                      value="nao"
                      checked={produto?.disponibilidade === "nao"}
                      onChange={(e) =>
                        handleUpdate(
                          produto.id,
                          "disponibilidade",
                          e.target.value
                        )
                      }
                      className="mr-1"
                    />
                    Indisponível
                  </label>
                </div>
                <button
                  className="bg-red-700 hidden text-white py-2 px-4 mt-2 rounded"
                  onClick={() => handleDelete(produto.id)}
                >
                  Deletar
                </button>
              </div>
            </div>
          ))
        )}
      </section>
    </div>
  );
};

export default GetProdutosIndisponiveis;
