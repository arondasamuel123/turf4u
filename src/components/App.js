import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AddOrg from './AddOrg';
import AddTurf from './AddTurf';
import Home from './Home';
import Navbar from './Navbar';
import OrgList from './OrgList';
import TurfList from './TurfList';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/add/:id" component={AddTurf} />
          <Route path="/view/:id" component={TurfList} />
          <Route path="/add-org" component={AddOrg} />
          <Route path="/view-orgs" component={OrgList} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
