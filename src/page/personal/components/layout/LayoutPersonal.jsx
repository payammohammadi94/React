import React, { useState } from 'react';
import {
    BrowserRouter as Router,
    Route ,
    Switch
  } from "react-router-dom";
import  './layout.css';
import Topbar from '../topbar/Topbar';
import Sidebar from '../sidebarPersonal/Sidebar';
import Home from "../../Home"
import CreateDocument from '../../personalPage/documentRecord/documentRegistration/CreateDocument';
import DocumentObservation from '../../personalPage/documentReturned/documentObservation/DocumentObservation';
import Header from '../header/Header';
import PeriodicVisit from '../../personalPage/forms/periodicVisits/PeriodicVisit';
const Layoutpersonal = () => {
    //با تعییر ساز سایدبار.نوشته های وسط صفحه هم تغییر سایز پیدا می‌کنند
    let [containerActive,setContainerActive] = useState(false)
    return (
        <div className="Layout">
            <Router>
                
                <div className="Header">
                    <Header /> 
                </div>

                <div className='sidebar-layout'>
                    <div className="Sidebar">
                        <Sidebar onCollaps={(inactive)=>{
                            setContainerActive(inactive)
                        }}/>
                    </div>

                    <div className={`container ${containerActive?"active":""}`}>
                        <Route path='/personal/home' component={Home} />
                        
                        {/* روت برای ثبت سند */}
                        <Route path='/personal/documentRegistr' component={CreateDocument} />
                        
                        {/* روت برای مشاهده سند بازگشتی */}
                        <Route path='/personal/docRetured/docObservation' component={DocumentObservation} />
                        
                        {/* قسمت روت فرم های اپ شخصی */}
                        <Route path='/personal/forms/periodicVisit' component={PeriodicVisit} />
                    </div>
                </div>
            </Router>
        </div>
    );
}

export default Layoutpersonal;
