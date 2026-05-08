import React from 'react'
import Home from './components/Home'
import Products from './components/Products'
import Review from './components/Review'
import Contact from './Contact'
import About from './About'
import Counter from './Counter'


const App = () => {
  return (
    <div>
     <center> <Home/>
      <Products/>
      <Review/>
      <Contact/>
     <About/>
     <Counter/>
</center>
    </div>
  )
}

export default App
