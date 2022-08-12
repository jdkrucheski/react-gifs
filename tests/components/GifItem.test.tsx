import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";

jest.mock("../../src/hooks/useFetchGifs");

describe("Tests in <GifItem />", () => {
  const testData = {
    id: "1",
    title: "Saitama",
    url: "https://one-punch.com/saitama.jpg",
  };

  test("should be match with snapshot", () => {
    render(<GifItem {...testData} />);
    expect(screen).toMatchSnapshot();
  });

  test("should render initial loading", () => {
    render(<GifItem {...testData} />);
    const { src, alt } = screen.getByRole("img") as HTMLImageElement;
    expect(src).toBe(testData.url);
    expect(alt).toBe(testData.title);
  });
});
