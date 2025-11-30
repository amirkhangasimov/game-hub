import useData from "./useData";

interface Genre {
  image_background: string;
  id: number;
  name: string;
}

const useGenres = () => useData<Genre>("/genres");

export default useGenres;
