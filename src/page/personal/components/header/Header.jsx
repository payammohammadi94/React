import React,{useState,useContext} from 'react';
import {  MailOutline, NotificationsNone, Settings, PowerSettingsNew } from '@material-ui/icons';
import { useHistory } from 'react-router-dom';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import AuthContext from '../../../../context/AuthContext';

import logo from "../../../../assets/header-falat2.png"
export default function Header() {
  let {logout} = useContext(AuthContext)
  let history = useHistory()
  let  path= history.location.pathname
 
  
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
    <div>
      {/* <div class="b-example-divider"></div> */}
      <div className='main py-2 bg-light'>
        <nav >
            <div class="container d-flex flex-wrap">
                <ul class="nav me-auto">
                {/* <li class="nav-item"><a href="#" class="nav-link link-dark px-2 active" aria-current="page">Home</a></li> */}
                  <li class="nav-item">
                    <a href="#" class="nav-link link-dark px-2">
                    <div className="topbarIconContainer">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt0XikLERJ8A3kTEC6_j9lMiLFu7-27j_AyA&usqp=CAU" alt="" className="topAvatar" />
                    </div>
                    </a>
                  </li>
                </ul>
                <ul class="nav">
                <li class="nav-item"><a href="#" class="nav-link link-dark px-2 active">انتخاب ناحیه کاربری</a></li>
                </ul>
            </div>
        </nav>
        <div class=" ">
          <nav >
              <div class="container d-flex flex-wrap">                
                  <ul class="nav">
                    <li class="nav-item"> 
                      {/* <div className="Clock">
                        <span className='clockShow'>{`${timeDate}`}</span>
                      </div> */}
                      <img src={logo} className="logoclass" alt="" />
                    </li>
                  </ul>
              </div>
          </nav>
        </div>

        <div class=" ">
          <div class="container d-flex flex-wrap">
          <ul class="nav me-auto">
                  {/* <li class="nav-item"><a href="#" class="nav-link link-dark px-2 active" aria-current="page">Home</a></li> */}
                    <li class="nav-item">
                      <div className="main">
                        <div className="topbarIconContainerinfo">
                            <NotificationsNone />
                            <span className="tapIconBadg">2</span>
                          </div>
                      
                          <div className="topbarIconContainerinfo">
                            <MailOutline />
                            <span className="tapIconBadg">2</span>
                          </div>  
                      </div>
                    </li>
                  </ul>
                  <ul class="nav me-auto">
                    <li class="nav-item pointer"><Link onClick={logout} class="nav-link link-dark px-2">خروج</Link></li>
                  </ul>
              </div>
          </div>
        </div>

        <header class="py-3  border-bottom xxx">
            <div class="d-flex flex-wrap justify-content marinRight">
            <Stack spacing={2} style={{direction: "rtl"}}>
                <Breadcrumbs separator="›" aria-label="breadcrumb">
                  {breadcrumbs}
                </Breadcrumbs>
              </Stack>   
            </div>
        </header>

    </div>
  )
}
