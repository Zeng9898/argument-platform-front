import React from 'react';
import './App.css';
import Labelpage from './pages/labelpage';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

function App() {
  console.log("App");
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/labelpage" component={Labelpage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;