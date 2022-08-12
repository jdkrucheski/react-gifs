import { Gif } from "../interfaces/interfaces";

const API_KEY = import.meta.env.VITE_API_KEY;

export const getGifs = async (category: string): Promise<Gif[]> => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${category}&limit=8`;
  const resp = await fetch(url);
  const { data } = await resp.json();

  const gifs = data.map(
    (img: any): Gif => ({
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url,
    })
  );

  return gifs;
};
