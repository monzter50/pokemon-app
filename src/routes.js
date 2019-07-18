import React,{ Suspense, lazy }  from "react";
import { BrowserRouter as Router, Route,Redirect,Switch   } from "react-router-dom";
// import Details from './container/Details'
// import PokeApp from './container/PokeContainer'
const Home = lazy(() => import('./container/PokeContainer'));
const Details = lazy(() => import('./container/Details'));

const PublicRoutes = ({history}) => {
  return (
    <Router  history={history}>
      <Suspense fallback={<div>Loading...</div>}>
      <Switch >
          <Redirect from='/details/:id' to='/'/>
          <Route
            exact strict 
            path={"/details/"}
            component={Details}
          />
          <Route
            exact
            path={"/"}
            component={Home}
          />
      </Switch>
       
      </Suspense>
     
 
     
    </Router>
  )
};

export default PublicRoutes;