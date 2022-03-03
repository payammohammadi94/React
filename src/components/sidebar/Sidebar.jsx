import { Home, Timeline, TrendingUp } from '@material-ui/icons'
import  { Link } from "react-router-dom";
import React from 'react';
import "./sidebar.css"; 
import 'bootstrap/dist/css/bootstrap.min.css';
export default function Sidebar() {
  return (
<div className='sidebar'>
<div className="sidbarWrapper">
    <div className="sidebarMenu">
        <h3 className="sidbarTitle">داشبورد</h3>
            <ul className="sidebarList">
                <li className="sidebarListItem active">
                    <Link to='/personal' className='link'>
                      <Home className='sidebarIcon'/>
                        خانه            
                    </Link>
                </li>
            </ul>
            
    </div>
    <div className="sidebarMenu">
        <h6 className="sidbarTitle">ثبت سند و ارسال فرم</h6>
            <ul className="sidebarList">
                <Link to="/personal/newdocument" className='link'>
                    <li className="sidebarListItem">
                        <Home className='sidebarIcon'/>
                        ثبت سند
                    </li>
                </Link>
                <Link to="" className='link'>
                    <li className="sidebarListItem">
                        <Home className='sidebarIcon'/>
                        تایید و ویرایش سند
                    </li>
                </Link>

                <Link to="" className='link'>
                    <li className="sidebarListItem">
                        <Home className='sidebarIcon'/>
                        ارسال فرم
                    </li>
                </Link>
            </ul>
    </div>
    <div className="sidebarMenu">
        <h3 className="sidbarTitle">اسناد برگشتی</h3>
            <ul className="sidebarList">
                <Link to="" className='link'>
                    <li className="sidebarListItem">
                        <Home className='sidebarIcon'/>
                        مشاهده اسناد برگشتی
                    </li>
                </Link>
            </ul>
    </div>
    
    <div className="sidebarMenu">
        <h3 className="sidbarTitle">ثبت درخواست علی‌الحساب</h3>
            <ul className="sidebarList">
                <Link to="" className='link'>
                    <li className="sidebarListItem">
                        <Home className='sidebarIcon'/>
                        ثبت درخواست اولیه
                    </li>
                </Link>
                <Link to="" className='link'>
                    <li className="sidebarListItem">
                        <Home className='sidebarIcon'/>
                        ارسال اسناد نهایی و تکمیل پرونده
                    </li>
                </Link>
            </ul>
    </div>

    <div className="sidebarMenu">
        <h3 className="sidbarTitle">آرشیو اسناد</h3>
            <ul className="sidebarList">
                <Link to="" className='link'>
                    <li className="sidebarListItem">
                        <Home className='sidebarIcon'/>
                        پیگیری وضعیت سند
                    </li>
                </Link>
                <Link to="" className='link'>
                    <li className="sidebarListItem">
                        <Home className='sidebarIcon'/>
                        سوابق پرداخت
                    </li>
                </Link>
            </ul>
    </div>

    <div className="sidebarMenu">
        <h3 className="sidbarTitle">طب‌کار</h3>
            <ul className="sidebarList">
                <Link to="" className='link'>
                    <li className="sidebarListItem">
                        <Home className='sidebarIcon'/>
                        سوابق طب‌کار
                    </li>
                </Link>
            </ul>
    </div>

    <div className="sidebarMenu">
        <h3 className="sidbarTitle">مراکز درماتی</h3>
            <ul className="sidebarList">
                <Link to="" className='link'>
                    <li className="sidebarListItem">
                        <Home className='sidebarIcon'/>
                        لیست مراکز درمانی طرف قرارداد
                    </li>
                </Link>
            </ul>
    </div>

</div>
</div>

  )
}

{/* <div className='sidebar'>
<div className="sidbarWrapper">
    <div className="sidebarMenu">
        <h3 className="sidbarTitle">داشبورد</h3>
            <ul className="sidebarList">
                <li className="sidebarListItem active">
                    <Link to='/personal' className='link'>
                      <Home className='sidebarIcon'/>
                        خانه            
                    </Link>
                </li>
            </ul>
            
    </div>
    <div className="sidebarMenu">
        <h6 className="sidbarTitle">ثبت سند و ارسال فرم</h6>
            <ul className="sidebarList">
                <Link to="/personal/newdocument" className='link'>
                    <li className="sidebarListItem">
                        <Home className='sidebarIcon'/>
                        ثبت سند
                    </li>
                </Link>
                <Link to="" className='link'>
                    <li className="sidebarListItem">
                        <Home className='sidebarIcon'/>
                        تایید و ویرایش سند
                    </li>
                </Link>

                <Link to="" className='link'>
                    <li className="sidebarListItem">
                        <Home className='sidebarIcon'/>
                        ارسال فرم
                    </li>
                </Link>
            </ul>
    </div>
    <div className="sidebarMenu">
        <h3 className="sidbarTitle">اسناد برگشتی</h3>
            <ul className="sidebarList">
                <Link to="" className='link'>
                    <li className="sidebarListItem">
                        <Home className='sidebarIcon'/>
                        مشاهده اسناد برگشتی
                    </li>
                </Link>
            </ul>
    </div>
    
    <div className="sidebarMenu">
        <h3 className="sidbarTitle">ثبت درخواست علی‌الحساب</h3>
            <ul className="sidebarList">
                <Link to="" className='link'>
                    <li className="sidebarListItem">
                        <Home className='sidebarIcon'/>
                        ثبت درخواست اولیه
                    </li>
                </Link>
                <Link to="" className='link'>
                    <li className="sidebarListItem">
                        <Home className='sidebarIcon'/>
                        ارسال اسناد نهایی و تکمیل پرونده
                    </li>
                </Link>
            </ul>
    </div>

    <div className="sidebarMenu">
        <h3 className="sidbarTitle">آرشیو اسناد</h3>
            <ul className="sidebarList">
                <Link to="" className='link'>
                    <li className="sidebarListItem">
                        <Home className='sidebarIcon'/>
                        پیگیری وضعیت سند
                    </li>
                </Link>
                <Link to="" className='link'>
                    <li className="sidebarListItem">
                        <Home className='sidebarIcon'/>
                        سوابق پرداخت
                    </li>
                </Link>
            </ul>
    </div>

    <div className="sidebarMenu">
        <h3 className="sidbarTitle">طب‌کار</h3>
            <ul className="sidebarList">
                <Link to="" className='link'>
                    <li className="sidebarListItem">
                        <Home className='sidebarIcon'/>
                        سوابق طب‌کار
                    </li>
                </Link>
            </ul>
    </div>

    <div className="sidebarMenu">
        <h3 className="sidbarTitle">مراکز درماتی</h3>
            <ul className="sidebarList">
                <Link to="" className='link'>
                    <li className="sidebarListItem">
                        <Home className='sidebarIcon'/>
                        لیست مراکز درمانی طرف قرارداد
                    </li>
                </Link>
            </ul>
    </div>

</div>
<div> */}