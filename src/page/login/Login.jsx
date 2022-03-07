import React, { useContext,useState,useEffect } from "react";
import { Lock, Person } from '@material-ui/icons'
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.png';

import AuthContext from '../../context/AuthContext'

export default function Login() {
  
  let {loginUser} = useContext(AuthContext)
  let {loginUserField} = useContext(AuthContext)
  
  //برای تغییر دکمه لودینگ
  let [loading,setLoading] = useState(false);  

  setInterval(()=>{
    setLoading(false)
  },4000)
  return (
    
    
      <div className="container-fluid Login">
      {/* logo */}
      <div className="row">
        <div className="col-md-3 mx-auto my-5">
            <img src={logo} className=" ml-3 " style={{width:"100%"}}/>
        </div>
      </div>
      <br/>
      {/* logo */}



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
          <div className="d-grid gap-2 col-md-3 mx-auto">
            
            {loginUserField && 
                <div className="style-error">
                  <span className="wrong-class">
                  نام کاربری یا رمز عبور اشتباه است.
                  </span>
                </div>
                
            }
          </div>
      </div>

      <div className="row">
        <div className="d-grid gap-2 col-md-4 mx-auto mt-5">
           <button className="btn-lg btn-primary" type="submit" onClick={()=>{setLoading(true)}}>{loading==false?"ورود": <span><span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> لطفا شکیبا باشید... </span>}</button>
          
        </div>
    </div>
    
   </form>

   </div>
  );
}

