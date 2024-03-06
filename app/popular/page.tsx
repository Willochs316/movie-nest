import Link from "next/link";
import { Svgs } from "../assets/svgs";
import { getMovies } from "../config/db";
import "./styles.css";

export default async function PopularMovies() {
  const popularMovies = await getMovies("movies");

  return (
    <section className="m-auto p-[20px] bg-[#171717] w-full">
      <div className="category">
        <div className="card-container">
          {popularMovies.map((movie: any, movieIndex: number) => (
            <Link key={movieIndex} className="card" href={`/movie/${movie.id}`}>
              <Svgs.Heart className="favorite" />
              <div className="movie-card__poster">
                <img
                  className="p-0 m-0 w-fullh-full"
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  alt={movie.title}
                />
              </div>

              <div className="movie-card__content">
                <p>
                  {movie
                    ? movie.original_title
                      ? movie.original_title
                      : movie.name
                    : ""}
                </p>
                <p>
                  <span>
                    {movie
                      ? movie.release_date
                        ? movie.release_date
                        : movie.first_air_date
                      : ""}
                  </span>
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
