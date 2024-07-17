import GetProdutos from "@/componentes/produtos/Get-produto";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Image
        className="h-[300px]"
        src="/bg2.png"
        width={1920}
        height={3000}
        alt=""
      />
      <h1 className="text-4xl font-light uppercase border-b-8 border-yellow-500  text-center w-[600px] mx-auto my-4">
        Últimos Produtos Adicionados
      </h1>
      <GetProdutos />
    </main>
  );
}
