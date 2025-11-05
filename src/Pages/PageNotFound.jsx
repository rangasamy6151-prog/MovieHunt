import NotFound from "../assets/404-image-1.png"
import { Link } from "react-router-dom"

export const PageNotFound = () => {
  return (
    <div className="container">
      <img src= {NotFound} className="img-fluid" />
      <p className="text-center">
        <Link to= "/MovieHunt" className="btn btn-danger" >Goto Home Page</Link>
      </p>
    </div>
  )
}

