import { Link, useRouteError } from "react-router-dom"

function ErrorPage() {
  const error = useRouteError();
  console.log(error)

  if(error.status == 404) {
    return (
      <div className="error-container container">
        <h3>404 - Not Found, Oops! The page youre looking for doesnt exist.It might have been moved, deleted, or never existed in the first place.</h3>
        <Link to='/' className="btn">Home</Link>
      </div>
    )
  } else {
    return (
      <div className="error-container container">
        <h3>Something went wrong, Oops! An unexpected error occurred. Please try again later, If the problem persists, contact support. </h3>
        <Link to='/' className="btn">Home</Link>
      </div>
    )
  }
  
}

export default ErrorPage