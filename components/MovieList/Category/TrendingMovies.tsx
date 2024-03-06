import Link from "next/link";
import { Svgs } from "@/app/assets/svgs";

export default function TrendingMovies({ trendingMovies }: any): JSX.Element {
  return (
    <>
      {trendingMovies.splice(0, 4).map((movie: any, movieIndex: number) => (
        <div key={movieIndex} className="card">
          <Svgs.Heart className="favorite" />

          <Link className="movie-card__poster" href={`/movie/${movie.id}`}>
            <img
              className="p-0 m-0 w-fullh-full"
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt={movie.title}
            />
          </Link>

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
        </div>
      ))}
    </>
  );
}
