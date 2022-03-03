import React,{useContext}  from 'react';
import {Form,Card} from "react-bootstrap";
import AuthContext from '../../../context/AuthContext';


import 'bootstrap/dist/css/bootstrap.min.css';
import "./css/selectuserstayle.css";

import logo2 from "./download.jpg";


let path;             //varibele for change page to request page


export default function Selectuser(props) {
  //برای دسترسی به اطلاعاتی که از سمت سرور برگردانده می‌شود
  
  let {user} = useContext(AuthContext)
  console.log(user)
  
  
  //
  path = '/personal';

  const choiceDocterDegree = [
    {
      id:1,
      user:"پرسنل",
      link: "/personal",
           
    },

    {
      id:2,
      user:"مدیریت",
      link: "/managment/home",
          },
    
    {
      id:3,
      user:"پذیرش",
      link: "/admition/dashboard",
           
    },

    {
      id:4,
      user:"وصول",
      link: "/receipt/report",
           
    },
    {
      id:5,
      user:"تقسیم سند",
      link: "/collect/dashboard",
          
    },
    {
      id:6,
      user:"بررسی اسناد پزشکی",
      link: "/analysis/dashboard",
          },
    {
      id:7,
      user:"سندرسی مالی",
      link: "/financial/dashboard",
      
    },
    
  ];

  //////////////////////////////////create option select/////////

  const optionSelectUser = choiceDocterDegree.map(item=>{
    
    return(
      <option value={item.link} key={item.id}>{item.user}</option>
    )
  })
////////////////////////////////////////////////////////////////


  /////////////////////////change page//////////////////////////////
  const gotopage=(path,)=>{
      props.history.push({
      pathname:path,
    })
  }
///////////////////////////////////////////////////////////////////
    return (
      <div className='container-fluid'>
     <section className='backgroundStayle '>
        <div className="row ">
          <div className="card d-grid gap-2 mx-auto  cardd marginTop" style={{width:"72rem"}}>
            <div class="container">
                <div className="row profileLocation  justify-content-between">
                  <div className="  col-md-7  selectUserLocation">
                  <label htmlFor="exampleDataList" className="form-label fw-bold fs-5 "> <h4>انتخاب کاربری</h4></label>
                    <Form.Select className='form-select-lg' onChange={(e)=>{
                      path = e.target.value;
                        }}>
                      {optionSelectUser}
                    </Form.Select>
                    
                    <div className="row mt-3 mb-3">
                      <div className=" col-md-4 ">
                      </div>
                      <div className=" col-md-4 ">
                        <button className="btn btn-primary mt-4 widthButton" type="submit" onClick={()=>gotopage(path)}>ورود</button>
                      </div>
                      <div className=" col-md-4 ">
                      </div>
                    </div>
                    
                </div>
                  <div className="  col-md-3  maginRight">
                      <Card style={{ width: '18rem' }} className='card border-primary borderRed'>
                        <Card.Img variant="top" src={logo2} />
                        <Card.Body className='text-center'>
                          <Card.Text>
                            نام و نام خانوادگی: محمد محمدی
                          </Card.Text>
                          <Card.Text>
                            نام کاربری: {user.username}
                          </Card.Text>
                          <Card.Text>
                            سمت: غواص
                          </Card.Text>

                          <Card.Text>
                            شماره پرسنلی: {user.user_id}
                          </Card.Text>
                        </Card.Body>
                    </Card>
                  </div>
                </div>
            </div>
                
          </div>
        </div>
        
     </section>
     </div>


    )
}

