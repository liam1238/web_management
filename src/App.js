import './App.css';
import {   BrowserRouter as Router ,Routes,Route, } from 'react-router-dom';
import Home from './pages/Home';
import Statistics from './pages/Statistics';
import Users from './pages/Users';

function App() {
  return (
    <Router>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path="/statistics" element={<Statistics/>}/>
      <Route path="/users/all" element={<Users/>}/>
    </Routes>
    </Router>
  );
}

export default App;
