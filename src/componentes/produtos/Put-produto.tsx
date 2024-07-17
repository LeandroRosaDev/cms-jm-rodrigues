"use client";

import { putProdutosAction } from "@/actions/produtos/put-produtos-action";

interface ProductData {
  id: string;
  nome_long: string;
  cor: string;
  estrutura: string;
  [key: string]: any;
}

interface ClientProdutoPageProps {
  data: ProductData;
}

export default function ClientProdutoPage({ data }: ClientProdutoPageProps) {
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const productData: ProductData = Object.fromEntries(
      formData.entries()
    ) as unknown as ProductData;
    await putProdutosAction(productData, data.id);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 flex flex-wrap gap-4 items-center"
    >
      <input type="hidden" name="id" value={data.id} />
      {data.nome && (
        <div className="w-full sm:w-52">
          <label htmlFor="nome_long" className="block text-gray-700">
            Nome
          </label>
          <input
            type="text"
            id="nome_long"
            name="nome_long"
            defaultValue={data.nome}
            className="border border-gray-300 w-full p-3 rounded-md bg-gray-100 transition duration-200 focus:outline-none focus:border-yellow-500 focus:bg-white focus:shadow-outline"
          />
        </div>
      )}
      {data.nome_long && (
        <div className="w-full sm:w-52">
          <label htmlFor="nome_long" className="block text-gray-700">
            Nome Longo
          </label>
          <input
            type="text"
            id="nome_long"
            name="nome_long"
            defaultValue={data.nome_long}
            className="border border-gray-300 w-full p-3 rounded-md bg-gray-100 transition duration-200 focus:outline-none focus:border-yellow-500 focus:bg-white focus:shadow-outline"
          />
        </div>
      )}
      {data.cor && (
        <div className="w-full sm:w-52">
          <label htmlFor="cor" className="block text-gray-700">
            Cor
          </label>
          <input
            type="text"
            id="cor"
            name="cor"
            defaultValue={data.cor}
            className="border border-gray-300 w-full p-3 rounded-md bg-gray-100 transition duration-200 focus:outline-none focus:border-yellow-500 focus:bg-white focus:shadow-outline"
          />
        </div>
      )}
      {data.preco && (
        <div className="w-full sm:w-52">
          <label htmlFor="preco" className="block text-gray-700">
            Preço
          </label>
          <input
            type="text"
            id="preco"
            name="preco"
            defaultValue={data.preco}
            className="border border-gray-300 w-full p-3 rounded-md bg-gray-100 transition duration-200 focus:outline-none focus:border-yellow-500 focus:bg-white focus:shadow-outline"
          />
        </div>
      )}
      {data.preco_original && (
        <div className="w-full sm:w-52">
          <label htmlFor="preco_original" className="block text-gray-700">
            Preço Original
          </label>
          <input
            type="text"
            id="preco_original"
            name="preco_original"
            defaultValue={data.preco_original}
            className="border border-gray-300 w-full p-3 rounded-md bg-gray-100 transition duration-200 focus:outline-none focus:border-yellow-500 focus:bg-white focus:shadow-outline"
          />
        </div>
      )}
      {data.preco_parcelado && (
        <div className="w-full sm:w-52">
          <label htmlFor="preco_parcelado" className="block text-gray-700">
            Preço Parcelado
          </label>
          <input
            type="text"
            id="preco_parcelado"
            name="preco_parcelado"
            defaultValue={data.preco_parcelado}
            className="border border-gray-300 w-full p-3 rounded-md bg-gray-100 transition duration-200 focus:outline-none focus:border-yellow-500 focus:bg-white focus:shadow-outline"
          />
        </div>
      )}
      {data.disponibilidade && (
        <div className="w-full sm:w-52">
          <label htmlFor="disponibilidade" className="block text-gray-700">
            Disponibilidade
          </label>
          <input
            type="text"
            id="disponibilidade"
            name="disponibilidade"
            defaultValue={data.disponibilidade}
            className="border border-gray-300 w-full p-3 rounded-md bg-gray-100 transition duration-200 focus:outline-none focus:border-yellow-500 focus:bg-white focus:shadow-outline"
          />
        </div>
      )}
      {data.situacao && (
        <div className="w-full sm:w-52">
          <label htmlFor="situacao" className="block text-gray-700">
            Situação
          </label>
          <input
            type="text"
            id="situacao"
            name="situacao"
            defaultValue={data.situacao}
            className="border border-gray-300 w-full p-3 rounded-md bg-gray-100 transition duration-200 focus:outline-none focus:border-yellow-500 focus:bg-white focus:shadow-outline"
          />
        </div>
      )}
      {data.descricao && (
        <div className="w-full sm:w-52">
          <label htmlFor="descricao" className="block text-gray-700">
            Descrição
          </label>
          <input
            type="text"
            id="descricao"
            name="descricao"
            defaultValue={data.descricao}
            className="border border-gray-300 w-full p-3 rounded-md bg-gray-100 transition duration-200 focus:outline-none focus:border-yellow-500 focus:bg-white focus:shadow-outline"
          />
        </div>
      )}
      <button
        type="submit"
        className="bg-yellow-500 text-white py-2 px-4 rounded-md transition duration-100 hover:bg-yellow-600 focus:outline-none focus:shadow-outline w-full sm:w-44 h-10"
      >
        Salvar Alterações
      </button>
    </form>
  );
}
