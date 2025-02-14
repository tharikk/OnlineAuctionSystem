
import './App.css'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import LoginPage from './LogOn.jsx';
import Bidding from './Bidding.jsx';
import Home from './Home.jsx';
import Profile from './Profile.jsx';
import { useEffect, useState } from 'react';



function App() {


  const [products, setProducts] = useState([{}])

  useEffect(() => {
    fetch('http://localhost:1234/api/products')
    .then(response => response.json())
    .then(result => setProducts(result))
  }, [])

  console.log(products)

  return (
    <div className="background">
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage products = {products}/>} />
          <Route path="/Bidding" element={<Bidding products = {products}/>} />
          <Route path="/Home" element={<Home products = {products}/>} />
          <Route path="/Profile" element={<Profile products = {products}/>}/>
        </Routes>
    </Router>
    </div>
  );
}

export default App
