
import React,{useState,useContext} from 'react';
import {  MailOutline, NotificationsNone, Settings, PowerSettingsNew } from '@material-ui/icons';
import { useHistory } from 'react-router-dom';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./topbar.css";

import AuthContext from '../../../../context/AuthContext';


export default function Topbar() {
  
  let {logout} = useContext(AuthContext)
  console.log(logout)
  let history = useHistory()
  let  path= history.location.pathname
  console.log(path)
  
  let showHour = new Date;
  showHour=showHour.toTimeString().split(' ')[0].slice(0,8);
  const [timeDate,setTimeDate]=useState(showHour)
  
  setInterval(() => {
    let showHour = new Date;
    showHour=showHour.toTimeString().split(' ')[0].slice(0,8);
    setTimeDate(showHour)
  }, 1000);

//بر ای ایجاپ برد بردکرامبس
  const breadcrumbs = [
    <Link underline="hover" key="1" color="inherit" href="/selectuser" 
    // onClick={handleClick}
    >
      انتخاب کاربری
    </Link>,
    <Link
      underline="hover"
      key="2"
      color="inherit"
      href="/personal/home"
      // onClick={handleClick}
    >
      داشبورد
    </Link>,
    <Typography key="3" color="text.primary">
      Breadcrumb
    </Typography>,
  ];
  return (

    <div className='topbar'>
        <div className="topbarWraper">
            
            <div className="topLeft"> 
                        
              <div className="topbarIconContainer">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt0XikLERJ8A3kTEC6_j9lMiLFu7-27j_AyA&usqp=CAU" alt="" className="topAvatar" />
              </div>

              <div className="topbarIconContainer">
                <Link onClick={logout} > <PowerSettingsNew className="pwersetting"/> </Link>
              </div>
              
              
              <div className="topbarIconContainer">
                <Settings  />
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
              <Stack spacing={2} style={{direction: "rtl"}}>
                <Breadcrumbs separator="›" aria-label="breadcrumb">
                  {breadcrumbs}
                </Breadcrumbs>
              </Stack>        
            </div>
        
        </div>
    </div>
  )
}
