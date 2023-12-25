
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import DinamicPage from './components/DinamicPage'
import MoviesPage from './components/MoviesPage'
import './components/styles/Styles.scss'

function App() {
  
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/:id' element={<DinamicPage/>} />
    <Route path='/' element={<MoviesPage/>} />
    </Routes>
    </BrowserRouter>
    )
  }
  
  export default App
  