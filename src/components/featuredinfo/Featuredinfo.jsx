import React from 'react'
import './featuredinfo.css'
export default function Featuredinfo() {
  return (
    <div className='featured'>
      <div className="featuredItem">
        <span className="featuredTitel">
            اسناد ارسالی
        </span>
        <div className="featuredDocContainer">
            <span className="docNumber"> پرونده‌های ارسالی</span>
            <span className="docCheced">10</span>
        </div>
      </div>

      <div className="featuredItem">
        <span className="featuredTitel">
            اسناد برگشتی
        </span>
        <div className="featuredDocContainer">
            <span className="docNumber"> پرونده‌های برگشتی</span>
            <span className="docCheced">10</span>
        </div>
      </div>
      
      <div className="featuredItem">
        <span className="featuredTitel">
            اسناد تایید شده
        </span>
        <div className="featuredDocContainer">
            <span className="docNumber"> اسناد تایید شده</span>
            <span className="docCheced">10</span>
        </div>
      </div>
      
    </div>
  )
}
