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
          <table class="table table-striped Table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </table>
        
      </div>
    </div>
  )
}
