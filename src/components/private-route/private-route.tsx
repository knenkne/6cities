import * as React from 'react';
import {Route, Redirect} from 'react-router-dom';


const PrivateRoute: React.FC<{component: React.ComponentType; path: string; to: string; require: boolean}> = ({component: Component, to, require}) =>
  <Route render={(props) => (
    require ? <Component {...props}/> : <Redirect to={to}/>
  )}/>;

export default PrivateRoute;
