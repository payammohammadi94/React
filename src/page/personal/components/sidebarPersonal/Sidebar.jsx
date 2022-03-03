import React, { useEffect, useState } from 'react'
import './sidebar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import  { Link } from "react-router-dom";
import { ArrowRightSquareFill,ArrowLeftSquareFill,Speedometer } from 'react-bootstrap-icons';
import logo from '../../assets/logo/logo.png'

export default function Sidebar(props) {
    let [inactive,setInactive]=useState(false)
    let [expends,setExpends]=useState(false)

    useEffect(()=>{
        if(inactive){
            document.querySelectorAll(".sub-menu").forEach((el)=>
                el.classList.remove("active")
            )
        }
    },)

    props.onCollaps(inactive)

  return (
    <div className={`Sidebar-menu ${inactive?"inactive": ""}`}>
        <div className="Topsection">
            <div className="logo">
                <img src={logo} />
            </div>
            <div className="arrowicon" onClick={()=>{setInactive(!inactive);setExpends(false)}}>
                {inactive?<ArrowLeftSquareFill /> :<ArrowRightSquareFill /> } 
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
                    <Link className='menu-item' onClick={()=>{setExpends(!expends)}}>
                        <div className='menu-icon'>
                            <Speedometer />
                        </div>
                        <span>اسناد برگشتی</span>
                    </Link>
                    <ul className={`sub-menu ${expends?"active":""}`}>
                        <li >
                            <Link className='sub-menu-item' >اسناد عودتی</Link>
                        </li>
                        <li >
                            <Link className='sub-menu-item'>اسناد عودتی</Link>
                        </li>
                        <li >
                            <Link className='sub-menu-item'>اسناد عودتی</Link>
                        </li>
                    </ul>
                </li>

                <li>
                    <Link className='menu-item'>
                        <div className='menu-icon'>
                            <Speedometer />
                        </div>
                        <span>ثبت سند جدید</span>
                    </Link>
                </li>

            </ul>
        </div>

    </div>
  )
}
