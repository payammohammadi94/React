import {  MailOutline, NotificationsNone, Settings } from '@material-ui/icons';
import React,{useState} from 'react';
import Link from '@mui/material/Link';
import "./topbar.css";


export default function Topbar() {
  
  let showHour = new Date;
  showHour=showHour.toTimeString().split(' ')[0].slice(0,5);
  const [timeDate,setTimeDate]=useState(showHour)
  
  setInterval(() => {
    let showHour = new Date;
    showHour=showHour.toTimeString().split(' ')[0].slice(0,5);
    setTimeDate(showHour)
  }, 60000);



  return (

    <div className='topbar'>
        <div className="topbarWraper">
            
            <div className="topLeft"> 
                        
              <div className="topbarIconContainer">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt0XikLERJ8A3kTEC6_j9lMiLFu7-27j_AyA&usqp=CAU" alt="" className="topAvatar" />
              </div>

              <div className="topbarIconContainer">
                <Settings />
              </div>

              <div className="topbarIconContainer">
                <NotificationsNone />
                <span className="tapIconBadg">2</span>
              </div>
              
              <div className="topbarIconContainer">
                <MailOutline />
                <span className="tapIconBadg">2</span>
              </div>
              <div className="Clock">
                <span className='clockShow'>{`${timeDate}`}</span>
              </div>
              
              
              
            </div>
            
            <div className="topRight">
                <span className='logo'>payam mohammdi</span>
            </div>
        
        </div>
    </div>
  )
}
