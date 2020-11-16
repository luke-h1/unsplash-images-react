import React from 'react';
import './App.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Pages/Home/Home';
function App() {
  return (
    <BrowserRouter>
      <>
        <Switch>
          <Home />
        </Switch>
      </>
    </BrowserRouter>
  );
}

export default App;
