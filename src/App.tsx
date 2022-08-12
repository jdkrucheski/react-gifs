import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const App = () => {
  const [categories, setCategories] = useState(["Zoro"]);

  const onAddCategory = (newCategory: string) => {
    if (categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories]);
  };

  return (
    <div className="w-screen pt-12 bg-sky-50">
      <h1 className="text-4xl text-center text-slate-900 font-semibold">Gif Search</h1>
      <AddCategory onNewCategory={(value: string) => onAddCategory(value)} />
      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </div>
  );
};
