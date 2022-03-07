import React from 'react';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
export default function DocumentObservation() {
  
  return (
    <div className='DocumentObservation'>
      <div className="cantainer-documentObservation">
          <div className="title">
            <span className="title-class">مشاهده اسناد برگشتی</span>
          </div>
        </div>
        
        <div className="Table">
          <table class="table table-striped">
            <thead>
              <tr>
                <th scope="col">ردیف</th>
                <th scope="col">شماره سند</th>
                <th scope="col">شماره پرسنلی</th>
                <th scope="col">نام و نام خانوادگی</th>
                <th scope="col">تاریخ سند</th>
                <th scope="col">نوع نسخه</th>
                <th scope="col">مبلغ</th>
                <th scope="col">دلیل برگشت</th>
                <th scope="col">تاریح برگشت</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>15</td>
                <td>15712458</td>
                <td>پیام محمدی</td>
                <td>14/12/1399</td>
                <td>سرئایی</td>
                <td>5500000</td>
                <td>مشکل تاریخ سند</td>
                <td>15/10/1400</td>
              </tr>
            </tbody>
          </table>
        
      </div>
    </div>
  )
}
