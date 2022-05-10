import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {   BrowserRouter as Router ,Routes,Route, } from 'react-router-dom';
import Home from '../src/pages/Home';
import Statistics from '../src/pages/Statistics';
import Users from '../src/pages/Users';
import EditUser from  '../src/pages/EditUser';
import AddUser from  '../src/pages/AddUser';

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <React.StrictMode>
    <Router>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path="/statistics" element={<Statistics/>}/>
      <Route path="/users/all" element={<Users/>}/>
      <Route path="/user/edit" element={<EditUser/>}/>
      <Route path="/add/user" element={<AddUser/>}/>
    </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
