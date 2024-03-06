import { Svgs } from "@/app/assets/svgs";

export default function PopularMovies({ popularMovies }: any): JSX.Element {
  return (
    <>
      {popularMovies.splice(0, 4).map((movie: any, movieIndex: number) => (
        <div key={movieIndex} className="card">
          <Svgs.Heart className="favorite" />
          <div className="movie-card__poster">
            <img
              className="p-0 m-0 w-fullh-full"
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt={movie.title}
            />
          </div>

          <div className="movie-card__content">
            <p>{movie.original_title}</p>
            <p>
              <span>{movie.release_date}</span>
            </p>
          </div>
        </div>
      ))}
    </>
  );
}
