import React, { useState, useEffect } from 'react';
import axios from 'axios';


//css
import './admin.css';


function AdminTables() {
    const [department, setDepartment] = useState([]);
    const [doctor, setDoctor] = useState([]);
    const [count, setCount] = useState();
    const [leave,setLeave] = useState([]);
    const[patientCount,setPatientCount]= useState();
    const[appointment,setAppointment]= useState([])


useEffect(() => {

    const key= localStorage.getItem('accessToken')
    fetchDepartment(key);
    fetchDoctor(key);
    fetchCount(key)
    fetchLeave(key);
    fetchAppointment();
    fetchPatientCount()
},[]);
 function fetchDepartment(key){
    axios.get('http://localhost:8080/user/department',
 {
     headers: {
         Authorization:"Hospital "+key
     }}).then((response)=> setDepartment(response.data));
     console.log(department)
 }



function fetchDoctor(key){
    axios.get('http://localhost:8080/user/doctor', {
 headers: {
     Authorization:"Hospital "+key 
 }})
 .then((response)=> setDoctor(response.data));
}


function fetchCount(key){
    axios.get('http://localhost:8080/user/count', 
    { headers: {
     Authorization:"Hospital "+key 
 }}).then((response)=> setCount(response.data))
 
}
 function fetchAppointment(){
    axios.get("https://sheetdb.io/api/v1/g40c7rntdc4hc")
    .then((response)=> setAppointment(response.data));
 }


function fetchLeave(key){
axios.get('http://localhost:8080/user/leave', {
 headers: {
     Authorization:"Hospital "+key 
 }}).then((response)=> setLeave(response.data))
 console.log(leave);
}
function fetchPatientCount(){
    axios.get('http://localhost:8080/patient/pcount')
    .then((response)=>setPatientCount(response.data))
}


  return (
    
    <div className="content-wrapper">
    <div className="content-header">
        <div className="container-fluid">
            <div className="row mb-2">
                <div className="col-sm-6">
                    <h1 className="m-0">Dashboard</h1>
                </div>
            </div>
        </div>
    </div>

    <div className="content">
        <div className="container-fluid">
            <div className="row">
                <div className="col-12 col-sm-6 col-md-3">
                    <div className="info-box">
                        <span className="info-box-icon bg-info elevation-1">
                            <i className="fas fa-cog"></i>
                        </span>
                        <div className="info-box-content">
                            <span className="info-box-text">------</span>
                            <span className="info-box-number">
                                10
                                <small>%</small>
                            </span>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-sm-6 col-md-3">
                    <div className="info-box mb-3">
                        <span className="info-box-icon bg-danger elevation-1">
                            <i className="fas fa-users"></i>
                        </span>
                        <div className="info-box-content">
                            <span className="info-box-text">Total patients</span>
                            <span className="info-box-number">{patientCount}</span>
                        </div>
                    </div>
                </div>

                <div className="clearfix hidden-md-up"></div>
                <div className="col-12 col-sm-6 col-md-3">
                    <div className="info-box mb-3">
                        <span className="info-box-icon bg-success elevation-1">
                            <i className="fas fa-user-doctor"></i>
                        </span>
                        <div className="info-box-content">
                            <span className="info-box-text">Doctors</span>
                            <span className="info-box-number">{count}</span>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-sm-6 col-md-3">
                    <div className="info-box mb-3">
                        <span className="info-box-icon bg-warning elevation-1">
                            <i className="fas fa-users"></i>
                        </span>
                        <div className="info-box-content">
                            <span className="info-box-text">Patients</span>
                            <span className="info-box-number">2,000</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header border-transparent">
                            <h3 className="card-title">Doctors</h3>
                            <div className="card-tools"></div>
                        </div>

                        <div className="card-body p-0">
                            <div className="table-responsive">
                                <table className="table m-0">
                                    <thead>
                                           
                                                <tr>
                                                    <th>Doc ID</th>
                                                    <th>Name</th>
                                                    <th>Department</th>
                                                    <th>Status</th>             
                                          </tr>
                                            
                                          
                                    </thead>
                                    <tbody>
                                    {
                                    doctor.map((data,index)=>{
                                        return(
                                        <tr key={index}>
                                            <td>{data.userId}</td>
                                            <td>Dr {data.firstName + data.lastName}</td>
                                            <td>
                                                <div className="sparkbar" data-height="20">
                                                  {data.depName}
                                                </div>
                                            </td>
                                            <td>
                                                <span className="badge badge-success">Present</span>
                                            </td>
                                       
                                        </tr>
                                        )
                                        
                                         })}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header border-transparent">
                            <h3 className="card-title">Leaves</h3>
                            <div className="card-tools"></div>
                        </div>

                        <div className="card-body p-0">
                            <div className="table-responsive">
                                <table className="table m-0">
                                    <thead>
                                        <tr>
                                            <th>Doc ID</th>
                                            <th>Name</th>
                                            <th>Department</th>
                                            <th> Apply Date</th>
                                            <th>Status</th>
                                            <th>LeaveType</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            leave.map((data,index)=>{
                                                return(

                                            <tr key={index}>
                                            <td>Dr{data.user}</td>
                                            <td>Dr{data.firstname+data.lastname} </td>
                                            <td>
                                                <div className="sparkbar" data-height="10">{data.departmentName}</div>
                                            </td>
                                            <td>{data.leaveDate}</td>
                                            <td>{data.approval}</td>
                                            <td>{data.leaveType}</td>
                                            <td>
                                                <button type="button" className="btn btn-success mr-2">
                                                    <i className=" fa-solid fa-check"></i>
                                                </button>
                                                <button type="button" className="btn btn-danger">
                                                    <i className="fa-solid fa-xmark"></i>
                                                </button>
                                            </td>
                                        </tr>)

                                             } 
                                             )}
                                        
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row ">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header border-transparent">
                            <h3 className="card-title">appointment</h3>
                            <div className="card-tools"></div>
                        </div>

                        <div className="card-body p-0">
                            <div className="table-responsive">
                                <table className="table m-0">
                                    <thead>
                                        <tr>
                                            <th>Patient Name</th>
                                            <th>Phone</th>
                                            <th>Department</th>
                                            <th>Doctor</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        { appointment.map((data,index)=>{
                                            return(<tr key={index}>
                                            <td>{data.Name}</td>
                                            <td>{data.Phone}</td>
                                            <td>{data.Department}</td>
                                            <td>{data.Doctor}</td>
                                            <td>
                                                <button type="button" className="btn btn-success mr-2">
                                                    <i className="fas fa-edit"></i>
                                                </button>
                                                <button type="button" className="btn btn-danger">
                                                    <i className="far fa-trash-alt"></i>
                                                </button>
                                            </td>
                                        </tr>
                                        )
                                        }
                                        )
                                        }
                                        
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default AdminTables