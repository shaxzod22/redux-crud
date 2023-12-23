import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import NewsDinamicPage from './components/NewsDinamicPage'
import NewsPage from './components/NewsPage'
import './components/styles/Styles.scss'

function App() {
  
  return (
    <>
   <BrowserRouter>
   <Routes>
    <Route path='/:id' element={<NewsDinamicPage/>}/>
    <Route path='/' element={<NewsPage/>} />
   </Routes>
   </BrowserRouter>
    </>
    )
  }
  
  export default App
  