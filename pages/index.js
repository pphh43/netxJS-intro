import { useEffect, useState } from "react";
import Seo from "../components/Seo";

// https://developers.themoviedb.org/3/getting-started/introduction
const API_KEY = "ead5ed356cd864a9c038275f0791815c";

export default function Home() {
  const [movies, setMovies] = useState();
  useEffect(() => {
    (async () => {
      const { results } = await (
        await fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
        )
      ).json();
      //console.log(data);
      setMovies(results);
      //console.log(results);
    })();
  }, []);
  return (
    <>
      <Seo title="Home" />
      {!movies && <h4>Loading</h4>}
      {movies?.map((movie) => (
        <div key={movie.id}>
          <h4>{movie.original_title}</h4>
        </div>
      ))}
    </>
  );
}
