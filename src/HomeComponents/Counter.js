import React from 'react'
import'./count.css'

function Counter() {
  return (
  
    <div className="containercount">
    <div className="row">
        <div className="col-lg-3 col-md-6 ">
           <div className="count-box">
            <i className="fas fa-user-md"></i>
            <span >{10}</span>
            <p>Doctors</p>
           </div>
        </div>
        <div className="col-lg-3  col-md-6 mt-5 mt-md-0">
            <div className="count-box">
                <i className="far fa-hospital"></i>
            <span>{10}</span>
              <p>Departments</p>
            </div>
        </div>
        <div className="col-lg-3  col-md-6 mt-5 mt-lg-0">
            <div className="count-box">
                <i className="fas fa-flask"></i>
                <span>{10}</span>
                <p>Research Labs</p>
            </div>
           
        </div>
        <div className="col-lg-3  col-md-6 mt-5 mt-lg-0">
            <div className="count-box">
                <i className="fas fa-award"></i>
                <span>{10}</span>
                  <p>Awards</p>
            </div>
           
        </div>
    </div>
</div>
  )
}

export default Counter