import './App.css';
import { BrowserRouter as Router, NavLink, Routes, Route } from 'react-router-dom';
import About from './components/About';
import AllProductsPage from './components/AllProductsPage';

function App() {
  return (
    <>
      <Router>
        <NavLink className={({ isActive }) => (isActive ? "active" : "inactive")} exact="true" to={"/"}>About</NavLink>
        <NavLink className={({ isActive }) => (isActive ? "active" : "inactive")} to={"/products"}>Products</NavLink>
        <Routes>
          <Route path='/' Component={About}></Route>
          <Route path='/products' Component={AllProductsPage}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
