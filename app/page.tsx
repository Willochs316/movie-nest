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
