import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

interface Props {
  category: string;
}
export const GifGrid = ({ category }: Props) => {
  const { images, isLoading } = useFetchGifs(category);

  return (
    <div className="bg-sky-100 m-8 p-8 rounded-md">
      <h3 className="text-xl text-sky-900 font-semibold">
        {category.toUpperCase()}
      </h3>
      {isLoading && <h2>Cargando...</h2>}

      <div className="flex flex-wrap justify-center items-center">
        {images.map((image) => (
          <GifItem key={image.id} {...image} />
        ))}
      </div>
    </div>
  );
};
