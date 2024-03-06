import { Svgs } from "@/app/assets/svgs";

export default function PopularSeries({ popularSeries }: any): JSX.Element {
  return (
    <>
      {popularSeries.splice(0, 4).map((serie: any, movieIndex: number) => (
        <div key={movieIndex} className="card">
          <Svgs.Heart className="favorite" />
          <div className="movie-card__poster">
            <img
              className="p-0 m-0 w-fullh-full"
              src={`https://image.tmdb.org/t/p/w500/${serie.poster_path}`}
              alt={serie.title}
            />
          </div>

          <div className="movie-card__content">
            <p>{serie.original_name}</p>
            <p>
              <span>{serie.first_air_date}</span>
            </p>
          </div>
        </div>
      ))}
    </>
  );
}
