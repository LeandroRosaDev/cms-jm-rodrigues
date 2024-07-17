"use client";
import { postProdutosAction } from "@/actions/produtos/post-produtos-action";
import { useState } from "react";
import { Button } from "../form-componentes/Button";

export default function PostProduto() {
  const [situacao, setSituacao] = useState("");
  const [rangedevalor, setRangedevalor] = useState("");
  const [categoriaSelecionada, setCategoriaSelecionada] = useState("");
  const [subcategoriaSelecionada, setsubCategoriaSelecionada] = useState("");
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData();
    const imagens = event.currentTarget.img.files;
    for (let i = 0; i < imagens.length; i++) {
      formData.append(imagens[i].name, imagens[i]);
    }

    const nome = event.currentTarget.nome.value;
    const produto_cod = event.currentTarget.produto_cod.value;
    const cor = event.currentTarget.cor.value;
    const link_1 = `//api.whatsapp.com/send?phone=5521978991540&text=Olá tudo bem? Eu estava olhando o site de vocês e gostaria de mais informações sobre o produto ${nome} ${produto_cod} ${cor}, poderia me passar mais informações sobre?`;

    formData.append("nome", nome);
    formData.append("produto_cod", produto_cod);
    formData.append("situacao", situacao);
    formData.append("rangedevalor", rangedevalor);
    formData.append("categoria", categoriaSelecionada);
    formData.append("sub_categoria", subcategoriaSelecionada);
    formData.append("descricao", event.currentTarget.descricao.value);
    formData.append("preco", event.currentTarget.preco.value);
    formData.append("preco_original", event.currentTarget.preco_original.value);
    formData.append(
      "preco_parcelado",
      event.currentTarget.preco_parcelado.value
    );
    formData.append("altura", event.currentTarget.altura.value);
    formData.append("largura", event.currentTarget.largura.value);
    formData.append("cor", cor);
    formData.append("link_1", link_1);
    formData.append("link_2", event.currentTarget.link_2.value);
    formData.append(
      "disponibilidade",
      event.currentTarget.disponibilidade.value
    );
    formData.append("estrutura", event.currentTarget.estrutura.value);

    try {
      await postProdutosAction(formData);
      setSuccessMessage("Produto adicionado com sucesso");

      // Limpar a mensagem após 4 segundos
      setTimeout(() => {
        setSuccessMessage(null);
      }, 4000);
    } catch (error) {
      console.error("Erro ao adicionar produto:", error);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center m-5">
      <div className="flex flex-wrap gap-4 items-center p-6 justify-center">
        <input
          type="text"
          id="nome"
          name="nome"
          placeholder="Nome do produto"
          className="border border-gray-300 w-full max-w-xs sm:max-w-lg p-3 rounded-md bg-gray-100 transition duration-200 mb-4 focus:outline-none focus:border-yellow-500 focus:bg-white focus:shadow-outline"
        />

        <input
          type="text"
          id="produto_cod"
          name="produto_cod"
          placeholder="Código do Produto"
          className="border border-gray-300 w-full max-w-xs sm:max-w-lg p-3 rounded-md bg-gray-100 transition duration-200 mb-4 focus:outline-none focus:border-yellow-500 focus:bg-white focus:shadow-outline"
        />
        <select
          id="situacao"
          name="situacao"
          value={situacao}
          onChange={(e) => setSituacao(e.target.value)}
          className="border border-gray-300 w-full max-w-xs sm:max-w-lg p-3 rounded-md bg-gray-100 transition duration-200 mb-4 focus:outline-none focus:border-yellow-500 focus:bg-white focus:shadow-outline"
        >
          <option value="">Situação do Produto</option>
          <option value="destaque">Produto em Destaque</option>
          <option value="promocao">Produto em Promoção</option>
          <option value="queima">Produto em Queima de estoque</option>
        </select>
        <select
          id="categoria"
          name="categoria"
          value={categoriaSelecionada}
          onChange={(e) => setCategoriaSelecionada(e.target.value)}
          className="border border-gray-300 w-full max-w-xs sm:max-w-lg p-3 rounded-md bg-gray-100 transition duration-200 mb-4 focus:outline-none focus:border-yellow-500 focus:bg-white focus:shadow-outline"
        >
          <option value="">Categoria</option>
          <option value="Madeiras para telhado">Madeiras para telhado</option>
          <option value="Madeiras para Obra">Madeiras para Obra</option>
          <option value="Madeiras para Acabamento">
            Madeiras para Acabamento
          </option>
          <option value="Madeiras para Estofados">
            Madeiras para Estofados
          </option>
          <option value="Portas e acabamentos">Portas e acabamentos</option>
          <option value="Ferragens">Ferragens</option>
        </select>
        <select
          id="sub_categoria"
          name="sub_categoria"
          value={subcategoriaSelecionada}
          onChange={(e) => setsubCategoriaSelecionada(e.target.value)}
          className="border border-gray-300 w-full max-w-xs sm:max-w-lg p-3 rounded-md bg-gray-100 transition duration-200 mb-4 focus:outline-none focus:border-yellow-500 focus:bg-white focus:shadow-outline"
        >
          <option value="">Sub Categoria</option>
          {categoriaSelecionada == "Madeiras para telhado" && (
            <>
              <option value="Eucalipto">Eucalipto</option>
              <option value="Angelim">Angelim</option>
              <option value="Massaranduba">Massaranduba</option>
              <option value="Cedrinho">Cedrinho</option>
            </>
          )}
          {categoriaSelecionada == "Madeiras para Obra" && (
            <>
              <option value="Eucalipto">Eucalipto</option>
              <option value="Angelim">Angelim</option>
              <option value="Massaranduba">Massaranduba</option>
              <option value="Cedrinho">Cedrinho</option>
              <option value="Pinus">Pinus</option>
              <option value="Madeirite">Madeirite</option>
            </>
          )}
          {categoriaSelecionada == "Madeiras para Acabamento" && (
            <>
              <option value="Eucalipto">Eucalipto</option>
              <option value="Angelim">Angelim</option>
              <option value="Massaranduba">Massaranduba</option>
              <option value="Cedrinho">Cedrinho</option>
            </>
          )}
          {categoriaSelecionada == "Madeiras para Estofados" && (
            <>
              <option value="Eucalipto">Eucalipto</option>
              <option value="Angelim">Angelim</option>
              <option value="Massaranduba">Massaranduba</option>
              <option value="Cedrinho">Cedrinho</option>
            </>
          )}
          {categoriaSelecionada == "Portas e acabamentos" && (
            <>
              <option value="Eucalipto">Eucalipto</option>
              <option value="Angelim">Angelim</option>
              <option value="Massaranduba">Massaranduba</option>
              <option value="Cedrinho">Cedrinho</option>
            </>
          )}
          {categoriaSelecionada == "Ferragens" && (
            <>
              <option value="Vara de Ferro">Vara de Ferro</option>
              <option value="Radier">Radier</option>
              <option value="Prego">Prego</option>
              <option value="Coluna de Ferro">Coluna de Ferro</option>
            </>
          )}
        </select>
        <input
          type="text"
          id="descricao"
          name="descricao"
          placeholder="Descrição"
          className="border border-gray-300 w-full max-w-xs sm:max-w-lg p-3 rounded-md bg-gray-100 transition duration-200 mb-4 focus:outline-none focus:border-yellow-500 focus:bg-white focus:shadow-outline"
        />

        <select
          id="rangedevalor"
          name="rangedevalor"
          value={rangedevalor}
          onChange={(e) => setRangedevalor(e.target.value)}
          className="border border-gray-300 w-full max-w-xs sm:max-w-lg p-3 rounded-md bg-gray-100 transition duration-200 mb-4 focus:outline-none focus:border-yellow-500 focus:bg-white focus:shadow-outline"
        >
          <option value="">Selecione o Range de Valor</option>
          <option value="499">Menor de R$500,00</option>
          <option value="999">Menor de R$1000,00</option>
          <option value="1499">Menor de R$1500,00</option>
          <option value="1999">Menor de R$2000,00</option>
          <option value="2499">Menor de R$2500,00</option>
          <option value="2999">Menor de R$3000,00</option>
          <option value="3999">Menor de R$4000,00</option>
          <option value="4999">Menor de R$5000,00</option>
        </select>
        <input
          type="text"
          id="preco"
          name="preco"
          placeholder="Preço"
          className="border border-gray-300 w-full max-w-xs sm:max-w-lg p-3 rounded-md bg-gray-100 transition duration-200 mb-4 focus:outline-none focus:border-yellow-500 focus:bg-white focus:shadow-outline"
        />
        <input
          type="text"
          id="preco_original"
          name="preco_original"
          placeholder="Preço Riscado"
          className="border border-gray-300 w-full max-w-xs sm:max-w-lg p-3 rounded-md bg-gray-100 transition duration-200 mb-4 focus:outline-none focus:border-yellow-500 focus:bg-white focus:shadow-outline"
        />
        <input
          type="text"
          id="preco_parcelado"
          name="preco_parcelado"
          placeholder="Preço em 10x"
          className="border border-gray-300 w-full max-w-xs sm:max-w-lg p-3 rounded-md bg-gray-100 transition duration-200 mb-4 focus:outline-none focus:border-yellow-500 focus:bg-white focus:shadow-outline"
        />
        <input
          type="text"
          id="altura"
          name="altura"
          placeholder="Altura"
          className="border border-gray-300 w-full max-w-xs sm:max-w-lg p-3 rounded-md bg-gray-100 transition duration-200 mb-4 focus:outline-none focus:border-yellow-500 focus:bg-white focus:shadow-outline"
        />
        <input
          type="text"
          id="largura"
          name="largura"
          placeholder="Largura"
          className="border border-gray-300 w-full max-w-xs sm:max-w-lg p-3 rounded-md bg-gray-100 transition duration-200 mb-4 focus:outline-none focus:border-yellow-500 focus:bg-white focus:shadow-outline"
        />
        <input
          type="text"
          id="estrutura"
          name="estrutura"
          placeholder="Estrutura/Características"
          className="border border-gray-300 w-full max-w-xs sm:max-w-lg p-3 rounded-md bg-gray-100 transition duration-200 mb-4 focus:outline-none focus:border-yellow-500 focus:bg-white focus:shadow-outline"
        />
        <select
          id="cor"
          name="cor"
          className="border border-gray-300 w-full max-w-xs sm:max-w-lg p-3 rounded-md bg-gray-100 transition duration-200 mb-4 focus:outline-none focus:border-yellow-500 focus:bg-white focus:shadow-outline"
        >
          <option value="">Cor</option>
          <option value="Azul">Azul</option>
          <option value="Vermelho">Vermelho</option>
          <option value="Preto">Preto</option>
          <option value="Cinza">Cinza</option>
          <option value="Marrom">Marrom</option>
          <option value="Terracota">Terracota</option>
          <option value="Verde">Verde</option>
          <option value="Bege">Bege</option>
          <option value="Rosa Escuro">Rosa Escuro</option>
          <option value="Vinho">Vinho</option>
          <option value="Rose">Rose</option>
          <option value="Bege Claro">Bege Claro</option>
          <option value="Cinza Claro">Cinza Claro</option>
          <option value="Amarelo">Amarelo</option>
          <option value="Branco">Branco</option>
          <option value="Off white">Off white</option>
          <option value="Capuccino">Capuccino</option>
          <option value="Cinza/Grafite">Cinza/Grafite</option>
          <option value="Mel">Mel</option>
        </select>

        <input
          type="hidden"
          id="link_2"
          name="link_2"
          placeholder="Link Opcional"
          className="border border-gray-300 w-full max-w-xs sm:max-w-lg p-3 rounded-md bg-gray-100 transition duration-200 mb-4 focus:outline-none focus:border-yellow-500 focus:bg-white focus:shadow-outline"
        />

        <input
          type="hidden"
          id="disponibilidade"
          name="disponibilidade"
          placeholder="Disponibilidade"
          value="sim"
          className="border border-gray-300 w-full max-w-xs sm:max-w-lg p-3 rounded-md bg-gray-100 transition duration-200 mb-4 focus:outline-none focus:border-yellow-500 focus:bg-white focus:shadow-outline"
        />
        <input
          type="file"
          name="img"
          id="img"
          multiple
          className="border border-gray-300 w-full max-w-xs sm:max-w-lg p-3 rounded-md bg-gray-100 transition duration-200 mb-4 focus:outline-none focus:border-yellow-500 focus:bg-white focus:shadow-outline"
        />
      </div>
      <Button className="bg-yellow-500 text-white py-4 px-6 text-xl sm:text-2xl rounded transition duration-100 hover:bg-yellow-600 focus:outline-none focus:shadow-outline">
        Adicionar
      </Button>
      {successMessage && (
        <p className="mt-4 text-green-600">{successMessage}</p>
      )}
    </form>
  );
}
