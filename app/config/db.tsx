export async function getMovies(category: any) {
  let apiUrl;

  switch (category) {
    case "trending":
      apiUrl = `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.API_KEY}`;
      break;
    case "movies":
      apiUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`;
      break;
    case "series":
      apiUrl = `https://api.themoviedb.org/3/tv/popular?api_key=${process.env.API_KEY}`;
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
