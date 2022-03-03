import React ,{ useContext } from 'react';
import { Link,Redirect,Route } from 'react-router-dom';
import AuthContext from '../context/AuthContext';

const PrivetRoute=({children,...rest})=>{
    
  let authenticated;
  const {user} = useContext(AuthContext);
  user!=null ?  authenticated=true : authenticated=false; 
  
  return (
    <Route {...rest}>{!authenticated?<Redirect to="/login" /> :children}</Route>
  )
}

export default PrivetRoute