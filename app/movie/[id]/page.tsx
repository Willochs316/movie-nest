import { Svgs } from "@/app/assets/svgs";
import "./styles.css";
import { getMovies } from "@/app/config/db";

interface movieProps {
  params: { id: number };
}

export default async function Movie({ params }: movieProps) {
  const trendingMovies = await getMovies("trending");

  const movieId = params.id.toString();

  // Find the movie with the specified ID
  const movie = trendingMovies.find(
    (movie: any) => movie.id.toString() === movieId
  );

  return (
    <main className="movie">
      <div className="movie-content">
        <div className="poster">
          <img
            className="m-0 p-0 w-fulll h-full"
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt=""
          />
        </div>

        <div className="movie-description">
          <h2 className="description-heading">{movie.original_title}</h2>
          <p className="description-text tagline">
            She's like nothing you've ever seen.{" "}
          </p>

          <h3 className="description-heading">Overview</h3>

          <p className="description-text">{movie.overview}</p>

          <div className="genre">
            <h3>Genres:</h3>

            <div className="genre-container">
              <div className="genre-content">Science Fiction</div>
              <div className="genre-content">Romance</div>
              <div className="genre-content">Comedy</div>
            </div>
          </div>

          <div className="text-[#fff] m-0 p-0 flex justify-between items-center w-full">
            <p className="description-text">Runtime: 141 mins</p>

            <div className="w-[70px] h-[70px]">
              <div className="circular">
                <Svgs.CircularProgress className="circular-progress" />
                <div className="circular-content">
                  <strong className="color: rgb(255, 41, 1)">80%</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
