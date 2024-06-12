import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home.jsx';
import Projects from './pages/projects.jsx';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path = '/' Component={Home} />
        <Route exact path = '/projects' Component={Projects} />
      </Routes>
    </div>
  );
}

export default App;
