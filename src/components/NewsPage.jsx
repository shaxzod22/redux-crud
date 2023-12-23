import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { fetchData } from "./redux/slice/Country"
import './styles/NewsStyles.scss'

import NewsItem from "./NewsItem"
const NewsPage = () => {
    const URL = 'https://api.spaceflightnewsapi.net/v3/articles'
    const dispatch = useDispatch()
    
    useEffect(()=>{
        dispatch(fetchData(URL))
    },[dispatch,URL])
    
    const dataState = useSelector(state=>state.news)
    console.log(dataState.data);
    
    return (
        <>
        {dataState.loading &&<div className="loading">
        <div className="showbox">
        <div className="loader">
        <svg className="circular" viewBox="25 25 50 50">
        <circle className="path" cx="50" cy="50" r="20" fill="none" strokeWidth="2" strokeMiterlimit="10"/>
        </svg>
        </div>
        </div>
        </div>}
        {!dataState.loading && <h1 className="heading">News</h1>}
        
        <ul className="news__list">
        {dataState.data[0]?dataState.data.map((news,index)=>(
            <NewsItem key={index} imgUrl={news.imageUrl} id={news.id} title={news.title}/>
            )):''}
            </ul>
            </>
            )
        }
        
        export default NewsPage
        