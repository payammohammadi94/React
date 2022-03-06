import React from 'react'
// import {Container} from "react-bootstrap";
// import 'bootstrap/dist/css/bootstrap.min.css';
import "./css/forgetpassword.css"
export default function Forgetpassword(props) {
    const changepage=()=>{
        props.location.pathname=''
        props.history.push({pathname:'login'})
    }

    return (
        <section>
        <div class="container-fluid backgroundStayle">
          <div class="row justify-content-center align-items-center wb-bg-banner">
            <div class="col-10 text-center ">
        <div className="card border-dark mb-3  d-grid col-6 mx-auto " style={{width:"36rem"}}>
        
        <div className="card-header ">
            <h5>بازیابی کلمه عبور</h5>
        </div>
        <div className="card-body text-dark">
            <h6 className="card-title mb-5">برای بازیابی اطلاعات خواسته شده را وارد کنید.</h6>
            <div className="row mb-3">
            <label for="colFormLabel" className="col-sm-4 col-form-label">کد ملی</label>
            <div className="col-sm-8">
                <input type="text" className="form-control" id="colFormLabel" placeholder="لطفا کد ملی خود را وارد کنید." />
            </div>
            </div>
            <div className="row mb-3">
            <label className="col-sm-4 col-form-label">شماره موبایل</label>
            <div className="col-sm-8">
                <input type="text" className="form-control" id="colFormLabel" placeholder="لطفا شماره موبایل خود را وارد کنید." />
            </div>
            </div>
            <p className="card-text">پس از تایید صحت و ارسال  اطلاعات وارد شده رمز عبور جدید برای شما به صورت پیامک ارسال خواهد شد.</p>
        </div>
        <div className="row m-3">

            <button type="submit" className="btn btn-primary" onClick={()=>changepage()}>
               ارسال اطلاعات
            </button>
        </div>
        
        </div>
        </div>   
            </div>
          </div>
      </section>

    )
}
{/* <div class='container-fluid'>
        <div className='row justify-content-center'> 
        <div className='col-md-6'>
        <div className="card border-dark mb-3  d-grid col-6 mx-auto " style={{width:"36rem"}}>
        
        <div className="card-header ">
            <h5>بازیابی کلمه عبور</h5>
        </div>
        <div className="card-body text-dark">
            <h6 className="card-title mb-5">برای بازیابی اطلاعات خواسته شده را وارد کنید.</h6>
            <div className="row mb-3">
            <label for="colFormLabel" className="col-sm-4 col-form-label">کد ملی</label>
            <div className="col-sm-8">
                <input type="text" className="form-control" id="colFormLabel" placeholder="لطفا کد ملی خود را وارد کنید." />
            </div>
            </div>
            <div className="row mb-3">
            <label className="col-sm-4 col-form-label">شماره موبایل</label>
            <div className="col-sm-8">
                <input type="text" className="form-control" id="colFormLabel" placeholder="لطفا شماره موبایل خود را وارد کنید." />
            </div>
            </div>
            <p className="card-text">پس از تایید صحت و ارسال  اطلاعات وارد شده رمز عبور جدید برای شما به صورت پیامک ارسال خواهد شد.</p>
        </div>
        <div className="row m-3">

            <button type="submit" className="btn btn-secondary" onClick={()=>changepage()}>
               ارسال اطلاعات
            </button>
        </div>
        
        </div>
        </div>   
        </div>
        </div> */}
