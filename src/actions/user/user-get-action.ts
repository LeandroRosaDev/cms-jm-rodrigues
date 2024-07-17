"use server";

import { cookies } from "next/headers";
import { url } from "@/componentes/url";

export async function userGetAction() {
  const token = cookies().get("token")?.value;
  const response = await fetch(url + "/wp-json/api/usuario", {
    headers: {
      Authorization: "Bearer" + token,
    },
  });
  const data = await response.json();
  return { data };
}
