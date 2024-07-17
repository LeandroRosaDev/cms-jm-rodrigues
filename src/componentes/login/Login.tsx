"use client";
import { useRef, useState } from "react";
import { loginAction } from "@/actions/login/login-action";
import { Button } from "../form-componentes/Button";

export default function Login() {
  const formRef = useRef<HTMLFormElement>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (formRef.current) {
      const formData = new FormData(formRef.current);
      try {
        await loginAction(formData);
        // window.location.reload();
      } catch (error) {
        console.error("Erro no login:", error);
        setErrorMessage("Erro no login. Por favor, tente novamente.");
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="bg-white p-6 sm:p-8 rounded-lg shadow-lg w-full max-w-xs sm:max-w-md"
      >
        <h2 className="text-xl sm:text-2xl font-semibold text-center text-gray-700 mb-4 sm:mb-6">
          Login
        </h2>
        <div className="mb-3 sm:mb-4">
          <label
            htmlFor="username"
            className="block text-gray-700 mb-1 sm:mb-2"
          >
            Usuário
          </label>
          <input
            type="text"
            id="username"
            name="username"
            className="border border-gray-300 w-full p-2 sm:p-3 rounded-md bg-gray-100 transition duration-200 focus:outline-none focus:border-yellow-500 focus:bg-white focus:shadow-outline"
          />
        </div>
        <div className="mb-4 sm:mb-6">
          <label
            htmlFor="password"
            className="block text-gray-700 mb-1 sm:mb-2"
          >
            Senha
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="border border-gray-300 w-full p-2 sm:p-3 rounded-md bg-gray-100 transition duration-200 focus:outline-none focus:border-yellow-500 focus:bg-white focus:shadow-outline"
          />
        </div>
        <Button className="w-full bg-yellow-500 text-white py-2 sm:py-3 rounded-md transition duration-100 hover:bg-yellow-600 focus:outline-none focus:shadow-outline">
          Login
        </Button>
        {errorMessage && (
          <p className="mt-4 text-center text-red-500">{errorMessage}</p>
        )}
      </form>
    </div>
  );
}
