import React,{useContext}  from 'react';
import {Form,Card} from "react-bootstrap";
import AuthContext from '../../../context/AuthContext';


import 'bootstrap/dist/css/bootstrap.min.css';
import "./css/selectuserstayle.css";
import logo from './logo.png'
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
      <option value={item.link} key={item.id} className="text-item">{item.user}</option>
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
  
      <section>
        <div className="container-fluid backgroundStayle">
          <div className="row justify-content-center align-items-center wb-bg-banner">
            <div className="col-sm-4 text-center">
                   
                    <div className="row">
                     <div className="col-md-7 mx-auto my-4">
                         <img src={logo} className=" ml-3 " style={{width:"100%"}}/>
                   </div>
                    </div>
                    <br/>
                    
                    <div className="row">
                     <div className="col-md-12 mx-auto my-3e">
                     <div class="mb-3">
                               <label for="exampleInputEmail1" class="form-label">
                                 <h3 className='mb-4'>
                                 انتخاب نوع کاربری 
                                 </h3>
                                 </label>
                               <Form.Select className='form-select-lg rightToleft rightToleftt' onChange={(e)=>{
                                 path = e.target.value;
                                   }}>
                                 {optionSelectUser}
                             </Form.Select> 

                             </div>
                   </div>
                    </div>
                    <div className="row mb-3">
                      <div className="d-grid gap-2 col-md-12 mx-auto">
                      <button className="btn btn-primary  btn-lg" type="submit" onClick={()=>gotopage(path)}>ورود</button>  
                      </div>
                  </div>
                   
                            
                            
            </div>
          </div>
        </div>
      </section>

    
    )
}


  // <section>

       

  //       <div class="container-fluid backgroundStayle">
  //         <div class="row justify-content-center align-items-center wb-bg-banner">
  //           <div class="col-4 text-center ">
           
                     
                        
  //                         <div className="  selectUserLocation">   
  //                          {/* logo */}
  //                   <div className="row">
  //                     <div className="col-md-8 mx-auto my-5">
  //                         <img src={logo} className=" ml-3 " style={{width:"100%"}}/>
  //                     </div>
  //                   </div>
  //                   <br/>
  //                   {/* logo */}
                          
                        
  //                           <div class="mb-3">
  //                             <label for="exampleInputEmail1" class="form-label">
  //                               <h3 className='mb-4'>
  //                               انتخاب نوع کاربری 
  //                               </h3>
  //                               </label>
  //                             <Form.Select className='form-select-lg rightToleft rightToleftt' onChange={(e)=>{
  //                               path = e.target.value;
  //                                 }}>
  //                               {optionSelectUser}
  //                             </Form.Select> 

  //                           </div>
  //                           <button className="btn btn-primary mt-4 widthButton" type="submit" onClick={()=>gotopage(path)}>ورود</button> 

                          
        
                            
  //                       </div>
                         
                        
                    
                        


  //           </div>   
  //         </div>
  //         </div>
  //     </section>

























 
{/* <label htmlFor="exampleDataList" className="form-label fw-bold fs-5 "> <h4>انتخاب کاربری</h4></label> */}



{/* <div className="  col-3  maginRight">
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
</div> */}
  
   

