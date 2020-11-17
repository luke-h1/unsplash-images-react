import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Pages/Home/Home';
import './App.css';
function App() {
  return (
    <BrowserRouter>
      <>
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
      </>
    </BrowserRouter>
  );
}

export default App;
