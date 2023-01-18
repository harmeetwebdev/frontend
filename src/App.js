
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Cart from './components/Cart';
import Contact from './components/Contact';
import ErrorPage from './components/ErrorPage';
import Header from './components/Header';
import Home from './components/Home';
import Product from './components/Product';
import SingleProduct from './components/SingleProduct';

import Footer from './Footer';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='*' element={<ErrorPage />} />
          <Route path="/singleproduct/:id" element={<SingleProduct />} />
          <Route path='/product' element={<Product />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
        <div>
          <Footer />
        </div>
      </div>

    </BrowserRouter>
  );
}

export default App;
