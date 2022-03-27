import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeScreen from './views/HomeScreen';
import Login from './views/Login';
import Register from './views/Register';
import MainNavigation from './components/MainNavigation';

function App() {
  return (
    <BrowserRouter>
      <MainNavigation />
          <Routes>
              <Route path="/" element={<HomeScreen />} />
          </Routes>
          <Routes>
              <Route path="/login" element={<Login />} />
          </Routes>
          <Routes>
              <Route path="/register" element={<Register />} />
          </Routes>
      </BrowserRouter>
  )
}

export default App
