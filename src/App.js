import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link, Routes } from 'react-router-dom';
import Login from './componentes/Login/Login';
import Navbar from './componentes/Navbar/Navbar';
import Home from './componentes/Home/Home';
import ApiDetail from './componentes/Api/ApiDetail';
import HomeCocktails from './componentes/Cocktails/HomeCocktails';

function App() {
  return (
   <div>
     <Router>
      {window.location.pathname !== '/' && <Navbar />} {/* Condición para mostrar Navbar */}
      <Routes>
        <Route exact path="/" element={<Login/>} />
        <Route exact path="/home" element={<Home/>} />
        <Route exact path="/homecocktails" element={<HomeCocktails/>} />
      </Routes>
    </Router>
   </div>
  );
}

export default App;
