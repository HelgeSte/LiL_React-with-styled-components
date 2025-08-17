import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Contact from './components/Contact';
import Home from './components/Home';
import About from './components/About';


function App() {
  return (
   <div>
    <h1>Welcome to my React App!</h1>
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
             <li>
              <Link to="/about">About</Link>
            </li>
             <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
        
        <Routes>
          <Route exact path="/" element ={<Home />} />
          <Route exact path="/about" element ={<About />} />
          <Route exact path="/contact" element ={<Contact />} />
        </Routes>
      </div>
    </Router>
   </div>
  );
}

export default App;
