import React, { useState } from 'react'
import NavBar from './components/NavBar'
import { Routes, Route } from 'react-router-dom'
import News from './pages/News'
import NewsDetails from './pages/NewsDetails'
import { Footer } from './components/Footer'

const App = () => {
  const [articles, setArticles] = useState([])
  return (
    <>
    <NavBar setArticles={setArticles}/>
    <Routes>
      <Route path='/' element={<News country='us' category='general' articles={articles} setArticles={setArticles} />}></Route>
      <Route path="/news-details" element={<NewsDetails/>} />
        <Route path='/business' element={<News country='us' category='business' articles={articles} setArticles={setArticles} />}></Route>
        <Route path='/entertainment' element={<News country='us' category='entertainment' articles={articles} setArticles={setArticles} />}></Route>
        <Route path='/general' element={<News country='us' category='general' articles={articles} setArticles={setArticles} />}></Route>
        <Route path='/health' element={<News country='us' category='health' articles={articles} setArticles={setArticles} />}></Route>
        <Route path='/science' element={<News country='us' category='science' articles={articles} setArticles={setArticles} />}></Route>
        <Route path='/sports' element={<News country='us' category='sports' articles={articles} setArticles={setArticles} />}></Route>
        <Route path='/technology' element={<News country='us' category='technology' articles={articles} setArticles={setArticles} />}></Route>
    </Routes>
    <Footer/>
    </>
  )
}

export default App