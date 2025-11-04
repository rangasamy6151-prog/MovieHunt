import { useEffect } from "react"
import { useNavigate, useSearchParams } from "react-router-dom";
import { Card } from "../Components";
import { useFetch } from "../Hooks/useFetch";


export const Search = ( {apiPath} ) => {

  const [searchParams] = useSearchParams();
  const queryTerm = searchParams.get("q");
  const {data : Movies} = useFetch(apiPath, queryTerm);

  useEffect ( () => {
    document.title = `Search result for ${queryTerm}`
  })

  return (
    <main className="container">
      <h5 className="text-danger py-2 border-bottom">
        {Movies.length == 0 ? `No Result found for ${queryTerm}` : `Result for ${queryTerm}` }
      </h5>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3 py-2">
              { Movies.map((movie) => {
                return <Card key={movie.id} movie = {movie} />;
              }) }
          </div>
    </main>
  )
}

