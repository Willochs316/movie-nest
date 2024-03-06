import Link from "next/link";
import { categories } from "./MovieData";
import { getMovies } from "@/app/config/db";
import TrendingMovies from "./Category/TrendingMovies";
import PopularMovies from "./Category/PopularMovies";
import PopularSeries from "./Category/PopularSeries";
import "./styles.css";

export default async function MovieList() {
  const trendingMovies = await getMovies("trending");
  const popularMovies = await getMovies("movies");
  const popularSeries = await getMovies("series");

  return (
    <section className="m-auto p-[20px] bg-[#171717] w-full">
      {categories.map((category, index) => (
        <div key={index} className="category">
          <div className="category__header">
            <h2 className="category__title trending">{category.title}</h2>
            <Link className="category__link" href={category.href}>
              View all
            </Link>
          </div>

          <div className="card-container">
            {category.title === "What's Trending" && (
              <TrendingMovies trendingMovies={trendingMovies} />
            )}
            {category.title === "Popular Movies" && (
              <PopularMovies popularMovies={popularMovies} />
            )}
            {category.title === "Popular Series" && (
              <PopularSeries popularSeries={popularSeries} />
            )}
          </div>
        </div>
      ))}
    </section>
  );
}
