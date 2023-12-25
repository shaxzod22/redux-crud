import { Link } from "react-router-dom"
import PropTypes from 'prop-types'

const MoviesItem = ({id,title,imgUrl}) => {
  return (
    <li className="movies__item">
      <Link to={`/${id}`} className="movies__link">
<img src={imgUrl} className='movies__img' alt="movie" />
<h2 className="movies__title">{title}</h2>
      </Link>
    </li>
  )
}

MoviesItem.propTypes={
    id:PropTypes.number,
    title:PropTypes.string,
    imgUrl:PropTypes.string
}

export default MoviesItem
