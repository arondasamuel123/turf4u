import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AddTurf from './AddTurf';
import Home from './Home';
import Navbar from './Navbar';
import TurfList from './TurfList';


const App = () => {
  
  return (
    <BrowserRouter>
        <div>
        <Navbar/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/add" component={AddTurf} />
          <Route path="/view" component={TurfList}/>
        </Switch>

      </div>
    </BrowserRouter>
    
  )
}

export default App
