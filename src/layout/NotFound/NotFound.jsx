import { useRouteError, Link } from "react-router-dom"

const NotFound = () => {
    const error = useRouteError()
  return (
    <div>
        <h1>404 - Not Found</h1>
        <p>{error.statusText || error.message}</p>
        <Link to='/'>Volver</Link>
    </div>
  )
}

export default NotFound