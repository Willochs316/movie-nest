import Link from "next/link";
import { Svgs } from "@/app/assets/svgs";
import { movieData } from "./MovieData";
import "./styles.css";

export default function MovieList() {
  return (
    <section className="m-auto p-[20px] bg-[#171717] w-full">
      <div className="category">
        <div className="category__header">
          <h2 className="category__title trending">What's Trending</h2>
          <Link className="category__link" href="/trending">
            View all
          </Link>
        </div>

        <div className="card-container">
          {movieData.map((data, index) => (
            <div className="card">
              <Svgs.Heart className="favorite" />
              <div className="movie-card__poster">
                <img src={data.imageUrl} alt="" />
              </div>

              <div className="movie-card__content">
                <p>{data.title}</p>
                <p>
                  <span>{data.releaseDate}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
