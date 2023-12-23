import { useEffect } from "react"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import { fetchData } from "./redux/slice/Country"
import './styles/DinamicPage.scss'

const NewsDinamicPage = () => {
    const navigate = useNavigate()
    const {id} = useParams()
    const dispatch = useDispatch()
    const URL = `https://api.spaceflightnewsapi.net/v3/articles/${id}`

    useEffect(()=>{
        dispatch(fetchData(URL))
    },[dispatch,URL])

    const dataEach = useSelector(state=>state.news)
    
    return (
       <section className="dinamicPage">
           {dataEach.loading &&<div className="loading">
        <div className="showbox">
        <div className="loader">
        <svg className="circular" viewBox="25 25 50 50">
        <circle className="path" cx="50" cy="50" r="20" fill="none" strokeWidth="2" strokeMiterlimit="10"/>
        </svg>
        </div>
        </div>
        </div>}
         <div className="dinamicPage__container">
         {dataEach.data.imageUrl && <img className="dinamicPage__img" src={dataEach.data.imageUrl} alt={dataEach.data.title} />}
        <div className="dinamicPage__info__box">
            <h2 className="dinamicPage__info__heading">{dataEach.data.title}</h2>
            <p className="dinamicPage__info__overview">{dataEach.data.summary}</p>
            {dataEach.data.imageUrl && <button className="dinamicPage__info__btn" onClick={()=>navigate('/')}>Go to back</button>}
        </div>
        </div>

        {dataEach.error && <p className="dinamicPage__error">{dataEach.error}</p>}
       </section>
        )
    }
    
    export default NewsDinamicPage
    