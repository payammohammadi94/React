import React, { useContext } from "react";
import { Lock, Person } from '@material-ui/icons'
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.png';

import AuthContext from '../../context/AuthContext'

export default function Login() {
  
  let {loginUser} = useContext(AuthContext)
  let {loginUserField} = useContext(AuthContext)

  return (
    
    <div className="Login">
      <div className="container-fluid">
      {/* logo */}
      <div className="row">
        <div className="col-md-3 mx-auto my-5">
            <img src={logo} className=" ml-3 " style={{width:"100%"}}/>
        </div>
      </div>
      <br/>
      {/* logo */}

      <div className="row">
        <div className="d-grid gap-2 col-md-3 mx-auto">
          {loginUserField && 
            <h6 style={{color:"red"}}> .نام کاربری یا رمز عبور اشتباه است</h6>
          }
        </div>
    </div>

      <form onSubmit={loginUser}>
        <div className="row">
          <div className="col-md-4 mx-auto">
            <Person style={{float: "right"}}/>       
            <label htmlFor="exampleFormControlInput1" className="form-label label" style={{float: "right"}}>نام کاربری</label>
              <input type="text" className="form-control mb-3 form-control-lg rightToleftt" name="username" placeholder="نام کاربری "/>  
          <div>
          <Lock style={{float: "right"}}/>  
            <label htmlFor="exampleFormControlInput1" className="form-label label" style={{float: "right"}}>رمز عبور</label>
            <input type="password" className="form-control  form-control-lg rightToleftt" name='password' placeholder="رمز عبور"/>
          </div>
          </div>
      </div> 

      <div className="row">
        <div className="d-grid gap-2 col-md-4 mx-auto mt-5">
          <button className="btn btn-primary" type="submit">ورود</button>
        </div>
    </div>
   </form>

   </div>
      </div>
  );
}

