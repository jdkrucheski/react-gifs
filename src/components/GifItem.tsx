import { Gif } from "../interfaces/interfaces";

export const GifItem = ({ title, url }: Gif) => {
  return (
    <div className="w-96 h-80 m-2 rounded-xl bg-sky-300">
      <img className="w-96 aspect-video rounded-t-xl" src={url} alt={title} />
      <p className="py-4 text-xl text-center text-slate-900 font-medium ">
        {title}
      </p>
    </div>
  );
};
