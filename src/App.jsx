import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Pages/Home/Home';
import About from './components/Pages/About/About';
import Navbar from './components/Navbar/Navbar';
import SideBar from './components/SideBar/SideBar';
import NotFound from './components/NotFound/NotFound';
import './App.css';
import Random from './components/Random/Random';
function App() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <BrowserRouter>
      <>
        <Navbar toggle={toggle} />
        <SideBar isOpen={isOpen} toggle={toggle} />

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/random" exact component={Random} />
          <Route default component={NotFound} />
        </Switch>
      </>
    </BrowserRouter>
  );
}
export default App;
