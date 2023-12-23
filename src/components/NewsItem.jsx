import { PropTypes } from "prop-types"
import { Link } from "react-router-dom"
const NewsItem = (props) => {
    const {imgUrl,title,id} = props

  return (
    <li className="news__item">
     <Link className="news__link" to={`/${id}`}>
        <img className="news__img" src={imgUrl} alt="news" />
        <h2 className="news__title">{title}</h2>
        </Link>
    </li>
  )
}

NewsItem.propTypes ={
    title:PropTypes.string,
    id:PropTypes.number,
    imgUrl:PropTypes.string,
}

export default NewsItem
