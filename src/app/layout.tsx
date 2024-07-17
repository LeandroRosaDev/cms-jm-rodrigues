import type { Metadata } from "next";
import "./globals.css";
import { userGetAction } from "@/actions/user/user-get-action";
import { UserContextProvider } from "@/context/user-context";
import Menu from "@/componentes/Menu";

export const metadata: Metadata = {
  title: "Administrador JM Rodrigues",
  description: "CMS JM Rodrigues",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { data: user } = await userGetAction();

  return (
    <html lang="pt-br">
      <body>
        <UserContextProvider user={user}>
          <Menu />
          {children}
        </UserContextProvider>
      </body>
    </html>
  );
}
