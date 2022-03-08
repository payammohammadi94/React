import React, { useEffect, useState } from 'react'
import './sidebar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import  { Link } from "react-router-dom";
import { ArrowRightSquareFill,
    ArrowLeftSquareFill,
    Speedometer,
    CaretDownFill,
    CaretUpFill,
    Files,
    ArrowReturnRight,
    Check2Circle,
    Archive,
    ClockHistory,
    House,
    List
} from 'react-bootstrap-icons';

import logo from '../../assets/logo/logo.png';

export default function Sidebar(props) {
    //برای باز و بسته شدن سایدبار
    let [inactive,setInactive]=useState(false)
    //برای باز و بسته شدن مواردی که در ساید بار است
    let [expends1,setExpends1]=useState(false)
    let [expends2,setExpends2]=useState(false)
    let [expends3,setExpends3]=useState(false)
    let [expends4,setExpends4]=useState(false)

    useEffect(()=>{
        if(inactive){
            document.querySelectorAll(".sub-menu").forEach((el)=>
                el.classList.remove("active")
            )
        }
    },)

    props.onCollaps(inactive)

  return (
    <div className={`Sidebar-menu side ${inactive?"inactive": ""}`}>
        <div className="Topsection">
            <div className="logo">
                {/* <img src={logo} />       */}
            </div>
            <div className="arrowicon" onClick={()=>{setInactive(!inactive);
                setExpends1(false);
                setExpends2(false);
                setExpends3(false);
                setExpends4(false)}}>
                {inactive?<List /> :<List /> } 
            </div>
        </div>

        <div className="divaider"> </div>
        
        <div className="main-menu">
            <ul>
                
                <li>
                    <Link className='menu-item' to="/personal/home">
                        <div className='menu-icon'>
                            <Speedometer />
                        </div>
                        <span>داشبورد</span>
                    </Link>
                </li>

                <li>
                    <Link className='menu-item' onClick={()=>{setExpends1(!expends1)}}>
                        <div className='menu-icon'>
                            <Files />
                        </div>
                        <span>ثبت سند و ارسال فرم</span>
                        
                        <span className='CaretDownFill-loc'>
                            {expends1?<CaretUpFill />:<CaretDownFill />}
                        </span>  
                    </Link>
                    <ul className={`sub-menu ${expends1?"active":""}`}>
                        <li >
                            <Link className='sub-menu-item' to="/personal/documentRegistr">ثبت سند</Link>
                        </li>
                        <li >
                            <Link className='sub-menu-item'>تایید و ویرایش سند</Link>
                        </li>
                        <li >
                            <Link className='sub-menu-item'>ارسال فرم</Link>
                        </li>
                    </ul>
                </li>

                <li>
                    <Link className='menu-item' onClick={()=>{setExpends2(!expends2)}}>
                        <div className='menu-icon'>
                            <ArrowReturnRight />
                        </div>
                        <span>اسناد برگشتی</span>
                        
                        <span className='CaretDownFill-loc'>
                            {expends2?<CaretUpFill />:<CaretDownFill />}
                        </span>  
                    </Link>
                    <ul className={`sub-menu ${expends2?"active":""}`}>
                        <li >
                            <Link className='sub-menu-item' to='/personal/docRetured/docObservation'>مشاهده</Link>
                        </li>
                        <li >
                            <Link className='sub-menu-item'>ویرایش و ثبت</Link>
                        </li>
                    </ul>
                </li>

                <li>
                    <Link className='menu-item' onClick={()=>{setExpends3(!expends3)}}>
                        <div className='menu-icon'>
                            <Check2Circle />
                        </div>
                        <span>ثبت درخواست علی الحساب</span>
                        
                        <span className='CaretDownFill-loc'>
                            {expends3?<CaretUpFill />:<CaretDownFill />}
                        </span>  
                    </Link>
                    <ul className={`sub-menu ${expends3?"active":""}`}>
                        <li >
                            <Link className='sub-menu-item' >ثبت درخواست اولیه</Link>
                        </li>
                        <li >
                            <Link className='sub-menu-item'>ارسال اسناد نهایی و تکمیل پرونده علی الحساب</Link>
                        </li>
                    </ul>
                </li>

                <li>
                    <Link className='menu-item' onClick={()=>{setExpends4(!expends4)}}>
                        <div className='menu-icon'>
                            <Archive />
                        </div>
                        <span>آرشیو اسناد</span>
                        
                        <span className='CaretDownFill-loc'>
                            {expends4?<CaretUpFill />:<CaretDownFill />}
                        </span>  
                    </Link>
                    <ul className={`sub-menu ${expends4?"active":""}`}>
                        <li >
                            <Link className='sub-menu-item' >پیگیری وضعیت سند</Link>
                        </li>
                        <li >
                            <Link className='sub-menu-item'>سوابق پرداخت</Link>
                        </li>
                    </ul>
                </li>

                <li>
                    <Link className='menu-item' to="/personal/home">
                        <div className='menu-icon'>
                            <ClockHistory />
                        </div>
                        <span>سوابق طب کار</span>
                    </Link>
                </li>

                <li>
                    <Link className='menu-item' to="/personal/home">
                        <div className='menu-icon'>
                            <House />
                        </div>
                        <span> لیست مراکز درمانی طرف قرارداد</span>
                    </Link>
                </li>

            </ul>
        </div>

    </div>
  )
}
