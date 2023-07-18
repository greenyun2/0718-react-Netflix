import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Movies from './Pages/Movies';
import MovieDetail from './Pages/MovieDetail';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './Components/Navigation';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';


function App() {
  return (
    <div className='wrapper'>
      <Navigation />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/movies' element={<Movies />} />
        <Route path='/movies/:id' element={<MovieDetail />} />
      </Routes>
    </div>
  );
}

export default App;
