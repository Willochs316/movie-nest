export async function getMovies(category: any) {
  let apiUrl;

  switch (category) {
    case "trending":
      apiUrl =
        "https://api.themoviedb.org/3/trending/all/day?api_key=7ec1d8275890813d38c865e574b0f124";
      // "https://api.themoviedb.org/3/trending/movie/day?api_key=7ec1d8275890813d38c865e574b0f124";
      break;
    case "movies":
      apiUrl =
        "https://api.themoviedb.org/3/movie/popular?api_key=7ec1d8275890813d38c865e574b0f124";
      break;
    case "series":
      apiUrl =
        "https://api.themoviedb.org/3/tv/popular?api_key=7ec1d8275890813d38c865e574b0f124";
      break;
    default:
      throw new Error("Invalid category");
  }

  const response = await fetch(apiUrl, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || "Error fetching movies");
  }

  const data = await response.json();
  return data.results;
}
