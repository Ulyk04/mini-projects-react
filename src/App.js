import './App.css';
import {BrowserRouter as Router , Routes, Route} from 'react-router-dom';
import Counter from './components/Counter';
import Home from './components/Home';
import ToDo from './components/ToDo';


function App() {
  return (
    <Router>
      <div className="App">
          <Routes>
              <Route path='/' element = {<Home />} />
              <Route path='/counter' element = {<Counter/>} />
              <Route path='/list' element = {<ToDo />} />
          </Routes>
      </div>
    </Router>
  );
}

export default App;
