import React from 'react'
import {
  BrowserRouter as Router,
  Route ,
  Switch
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
      <PrivetRoute component={Selectuser} path='/selectuser'></PrivetRoute>              
      <Route path="/forgetpassword" component={Forgetpassword} />

      {/* for show prrsonal */}
      <PrivetRoute component={Home} path='/home'></PrivetRoute>
      <PrivetRoute component={Layoutpersonal} path='/personal'></PrivetRoute>
    </Switch>
      {/* <Topbar /> */}
      <div className="container">
        {/* <Sidebar /> */}     

      </div>
      </AuthProvider>
    </Router>

    </div>
  );
}

export default App;
