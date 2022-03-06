import React from 'react'
import {
  BrowserRouter as Router,
  Route ,
  Switch,
  Redirect
} from "react-router-dom";

import PrivetRoute from "./utils/PrivetRoute";
import {AuthProvider} from './context/AuthContext';


import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import Home from "./page/personal/Home";
import Newdoc from "./page/admition/Newdoc";
import './App.css';
///////////////////////////////////page for login 
import Login from './page/login/Login';
import Selectuser from './page/login/selectuser/Selectuser';
import Forgetpassword from './page/login/forgetpassword/Forgetpassword';
import Layoutpersonal from './page/personal/components/layout/LayoutPersonal';
///////////////////////////////////
function App() {
  return (
    <div className='App'>
    <Router>
    <AuthProvider>
    <Switch>

      <Route path="/login" component={Login} />
      <Route path="/forgetpassword" component={Forgetpassword} />
      
      <Route exact path="/">
         <Redirect to="/login" /> 
      </Route>
      
      <PrivetRoute component={Selectuser} path='/selectuser'></PrivetRoute>              

      {/* for show prrsonal */}
      <PrivetRoute component={Layoutpersonal} path='/personal'></PrivetRoute>
    </Switch>
      </AuthProvider>
    </Router>

    </div>
  );
}

export default App;
