import { Link } from 'react-router-dom'

function NotFound() {
  return(
    <div className="notfound">
      <h1>
        404 not found, we have no such page
      </h1>
      <h3><Link to="/">Go to home page</Link></h3>
    </div>
  )
}

export default NotFound;
