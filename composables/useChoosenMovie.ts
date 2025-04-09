import type { Movie } from "~/types";

export default function useChoosenMovie() {
  const state = useState(
    "choosenMovie",
    (): { movie?: Movie | null; isSeries: boolean | null } => ({
      movie: null,
      isSeries: null,
    })
  );
  const chooseMovie = (movieData: Movie, isSeries: boolean) => {
    state.value.movie = movieData;
    state.value.isSeries = isSeries;
  };
  return {
    state,
    chooseMovie,
  };
}
