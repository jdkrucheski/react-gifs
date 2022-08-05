import { Gif } from "../interfaces/interfaces";

export const getGifs = async (category: string): Promise<Gif[]> => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=kaJ1JwD4CuQgYun7YpTQpTr5p1qs1sQn&q=${category}&limit=8`;
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
