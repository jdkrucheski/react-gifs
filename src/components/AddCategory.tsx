import { useState } from "react";

interface Props {
  onNewCategory: (value: string) => void;
}

export const AddCategory = ({ onNewCategory }: Props) => {
  const [inputValue, setInputValue] = useState("");

  const onInputChange = ({ target }: any) => {
    setInputValue(target.value);
  };
  const onSubmit = (event: any) => {
    event.preventDefault();
    if (inputValue.trim().length <= 1) return;
    setInputValue("");
    onNewCategory(inputValue.trim());
  };

  return (
    <form className="w-screen flex justify-center pt-8 " onSubmit={onSubmit}>
      <input
        className="block w-96 h-16 px-3 py-4 bg-white border border-slate-300 rounded-md text-lg shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 text-center"
        type="text"
        placeholder="Buscar gifs"
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  );
};
