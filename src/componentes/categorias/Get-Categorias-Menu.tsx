"use client";

import { useState } from "react";
import Link from "next/link";

export default function GetCategoriasMenu() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories: any = {
    "Madeiras para telhado": [
      "Eucalipto Rosa",
      "Angelim",
      "Massaranduba ",
      "Cedrinho",
      "Guajará",
      "Telha",
      "Parafusos",
    ],
    "Madeiras para Obra": [
      "Eucalipto",
      "Angelim",
      "Massaranduba ",
      "Cedrinho",
      "Pinus",
      "Madeirite",
    ],
    "Madeiras para Acabamento": [
      "Eucalipto",
      "Angelim",
      "Massaranduba ",
      "Cedrinho",
    ],
    "Madeira para Estofados": [
      "Eucalipto",
      "Angelim",
      "Massaranduba ",
      "Cedrinho",
    ],
    "Portas e Acabamentos": [
      "Eucalipto",
      "Angelim",
      "Massaranduba ",
      "Cedrinho",
    ],
    Ferragens: ["Vara de Ferro", "Radier", "Prego", "Coluna de Ferro", "Arame"],
  };

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(selectedCategory === category ? null : category);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-semibold text-center text-gray-700 mb-6">
        Confira os Produtos disponíveis em estoque!
      </h1>
      <ul className="space-y-4">
        {Object.keys(categories).map((category) => (
          <li key={category} className="border-b border-gray-300 pb-2">
            <button
              onClick={() => handleCategoryClick(category)}
              className="w-full text-left text-lg font-medium text-gray-900 hover:text-red-500 transition duration-200"
            >
              {category}
            </button>
            {selectedCategory === category && (
              <ul className="pl-4 mt-2 space-y-2">
                {categories[category].map((subcategory: any) => (
                  <li key={subcategory}>
                    <Link
                      href={`/categorias/${subcategory}`}
                      className="text-gray-700 hover:text-red-500 transition duration-200"
                    >
                      {subcategory}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
