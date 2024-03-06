import { Svgs } from "@/app/assets/svgs";
import "./styles.css";

interface movieProps {
  params: { id: number };
}

export default function Movie({ params }: movieProps) {
  return (
    <main className="movie">
      <div className="movie-content">
        <div className="poster">
          <img
            className="m-0 p-0 w-fulll h-full"
            src="http://image.tmdb.org/t/p/original/kCGlIMHnOm8JPXq3rXM6c5wMxcT.jpg"
            alt=""
          />
        </div>

        <div className="movie-description">
          <h2 className="description-heading">Poor Things</h2>
          <p className="description-text tagline">
            She's like nothing you've ever seen.{" "}
          </p>

          <h3 className="description-heading">Overview</h3>

          <p className="description-text">
            Brought back to life by an unorthodox scientist, a young woman runs
            off with a debauched lawyer on a whirlwind adventure across the
            continents. Free from the prejudices of her times, she grows
            steadfast in her purpose to stand for equality and liberation.
          </p>

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
