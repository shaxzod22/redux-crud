import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import MoviesItem from './MoviesItem'
import { fetchData } from './redux/slice/MoviesSlice'
import './styles/NewsStyles.scss'
const MoviesPage = () => {
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(fetchData('https://movies-api14.p.rapidapi.com/movies'))
    },[dispatch])
    
    const data = useSelector(state=>state.movies)
    // console.log(data);
    
    return (
        <div className="movies__container">
        <h1 className="heading">Movies</h1>
               
        <ul className="movies__list">
        {data.data.movies? data.data.movies.map((movie,index)=>(
           movie._id?  <MoviesItem key={index} id={movie._id} title={movie.title} imgUrl={movie.backdrop_path
           } />:''
        )):''}
        </ul>
        </div>
        )
    }
    
    export default MoviesPage
    