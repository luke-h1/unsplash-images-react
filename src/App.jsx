import React from 'react';
import './App.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
function App() {
  return (
    <BrowserRouter>
      <>
        <Navbar />
        <Switch></Switch>
      </>
    </BrowserRouter>
  );
}

export default App;
