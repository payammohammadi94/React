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

const Layoutpersonal = () => {
    //با تعییر ساز سایدبار.نوشته های وسط صفحه هم تغییر سایز پیدا می‌کنند
    let [containerActive,setContainerActive] = useState(false)
    return (
        <div className="Layout">
            <Router>
                <div className="Header">
                    <Topbar /> 
                </div>
            
                <div className="Sidebar">
                    <Sidebar onCollaps={(inactive)=>{
                        setContainerActive(inactive)
                    }}/>
                </div>

                <div className={`container ${containerActive?"active":""}`}>
                    <Route path='/personal/home' component={Home} />
                </div>
            </Router>
        </div>
    );
}

export default Layoutpersonal;
