import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { AuthContextProvider } from './config/store';

import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';

function App() {
  return (
    <Router>
      <AuthContextProvider>
        <Routes>
          <Route exact path='/signup' element={ <SignUp/> } />
          <Route exact path='/login' element={ <Login/> } />
          <Route exact path='/' element={ <Home/> } />
        </Routes>
      </AuthContextProvider>
    </Router>
  );
}

export default App;