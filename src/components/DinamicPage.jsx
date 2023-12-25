import { useEffect } from "react"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import { fetchData } from "./redux/slice/MoviesSlice"
import './styles/DinamicPage.scss'

const DinamicPage = () => {
    const navigate = useNavigate()
    const {id} = useParams()
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(fetchData(`https://movies-api14.p.rapidapi.com/movie/${id}`))
    },[dispatch,id])
    const data = useSelector(state=>state.movies.data.movie)
    console.log(data);
    return (
     <>
     {data &&    <div className="dinamicPage">
        <div className="dinamicPage__container">
        <img className="dinamicPage__img" src={data.backdrop_path
        } alt="movie" />
        <div className="dinamicPage__info__box">
        <h2>{data.title}</h2>
        <p>{data.overview}</p>
        <button onClick={()=>navigate('/')} className="dinamicPage__info__btn">Go to back</button>
        </div>
        </div>
        </div>}
     </>
        )
    }
    
    export default DinamicPage
    