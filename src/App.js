import './App.css';
import {BrowserRouter as Router , Routes, Route} from 'react-router-dom';
import Counter from './components/Counter';
import Home from './components/Home';
import ToDo from './components/ToDo';
import Timer from './components/Timer';
import Search from './components/Seearch';
import Login from './components/Login';
import Galery from './components/Galery';
import Theme from './components/Theme';


function App() {
  return (
    <Router>
      <div className="App">
          <Routes>
              <Route path='/' element = {<Home />} />
              <Route path='/counter' element = {<Counter/>} />
              <Route path='/list' element = {<ToDo />} />
              <Route path='/timer' element = {<Timer />} />
              <Route path='/search' element={<Search/>} />
              <Route path='/login' element={<Login/>} />
              <Route path='/images' element = {<Galery/>} />
              <Route path='/theme' element = {<Theme />} />
          </Routes>
      </div>
    </Router>
  );
}

export default App;
