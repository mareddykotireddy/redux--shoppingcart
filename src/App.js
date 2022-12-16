import React from 'react'
import Header from "./containers/Header"
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import ProductListing from './containers/ProductListing'
import ProductDetails from './containers/ProductDetail'
import Cart from './components/Cart'
function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
        <Route exact path="/" element={<ProductListing/>} />
        <Route path="/product/:productId" exact element={<ProductDetails/>}/>
        <Route path="/cart" exact element={<Cart/>} />
        <Route> 404 Not Found!</Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
