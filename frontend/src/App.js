import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';

function App() {
  return (    
    <Router>
      <Routes>
        <Route exact path='/signup' element={ <SignUp/> } />
        <Route exact path='/login' element={ <Login/> } />
        <Route exact path='/' element={ <Home/> } />
      </Routes>
    </Router>
  );
}

export default App;