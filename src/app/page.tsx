import GetProdutos from "@/componentes/produtos/Get-produto";
import GetProdutosIndisponiveis from "@/componentes/produtos/Get-produto-indisponivel";
import GetProdutoPromocao from "@/componentes/produtos/Get-produto-promocao";
import GetProdutosQueimadeEstoque from "@/componentes/produtos/Get-produto-saldao";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="bg-[url('/bg2.png')] h-64 sm:h-[280px] w-fullflex flex-col justify-center items-center gap-6 sm:gap-9 text-white p-4 sm:p-8">
        <h1 className="text-2xl sm:text-4xl font-bold uppercase text-center mt-36 bg-red-600 w-fit m-auto p-2 rounded-xl">
          A Barreira vai virar baile
        </h1>
      </div>
      <h1 className="text-2xl sm:text-4xl font-light uppercase border-b-8 border-yellow-500 text-center mx-auto my-4 max-w-fit sm:max-w-fit mt-20">
        Últimos Produtos Adicionados
      </h1>
      <GetProdutos />
      <h1 className="text-2xl sm:text-4xl font-light uppercase border-b-8 border-yellow-500 text-center mx-auto my-4 max-w-fit sm:max-w-fit mt-20">
        Produtos Promoção
      </h1>
      <GetProdutoPromocao />
      <h1 className="text-2xl sm:text-4xl font-light uppercase border-b-8 border-yellow-500 text-center mx-auto my-4 max-w-fit sm:max-w-fit mt-20">
        Produtos Queima de Estoque
      </h1>
      <GetProdutosQueimadeEstoque />
      <h1 className="text-2xl sm:text-4xl font-light uppercase border-b-8 border-yellow-500 text-center mx-auto my-4 max-w-fit sm:max-w-fit mt-20">
        Produtos Indisponíveis
      </h1>
      <GetProdutosIndisponiveis />
    </main>
  );
}
