import './App.css';
import { BrowserRouter as Router, NavLink, Routes, Route } from 'react-router-dom';
import About from './components/About';
import AllProductsPage from './components/AllProductsPage';
import ProductDetailsPage from './components/ProductDetailsPage';
import { ProductProvider } from './components/ProductContext';

function App() {
  return (
    <ProductProvider>
      <Router>
        <NavLink className={({ isActive }) => (isActive ? "active" : "inactive")} exact="true" to={"/"}>About</NavLink>
        <NavLink className={({ isActive }) => (isActive ? "active" : "inactive")} exact="true" to={"/products"}>Products</NavLink>
        <Routes>
          <Route path='/' Component={About}></Route>
          <Route path='/products' Component={AllProductsPage}></Route>
          <Route path='/products/:productname' Component={ProductDetailsPage}></Route>
        </Routes>
      </Router>
    </ProductProvider>
  );
}

export default App;
