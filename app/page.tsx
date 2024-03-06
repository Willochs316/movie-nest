import Hero from "@/components/Hero/Hero";
import MovieList from "@/components/MovieList/MovieList";

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <Hero />
      <MovieList />
    </main>
  );
}
// https://api.themoviedb.org/3/trending/all/day?api_key=7ec1d8275890813d38c865e574b0f124
