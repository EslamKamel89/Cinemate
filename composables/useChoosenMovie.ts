import type { Movie } from "~/types";

export default function useChoosenMovie() {
  const movie = useState("choosenMovie", (): Movie | null => null);
  const chooseMovie = (movieData: Movie) => {
    movie.value = movieData;
  };
  return {
    movie,
    chooseMovie,
  };
}
