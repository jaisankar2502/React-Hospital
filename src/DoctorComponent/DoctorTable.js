import React from 'react'

//css
import './doctor.css'

const DoctorTable = () => {
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


        <section className="content">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 col-sm-6 col-md-3">
                        <div className="info-box">
                            <span className="info-box-icon bg-info elevation-1"><i className="fas fa-cog"></i></span>
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
                            <span className="info-box-icon bg-danger elevation-1"><i className="fas fa-users"></i></span>
                            <div className="info-box-content">
                                <span className="info-box-text">Total patients</span>
                                <span className="info-box-number">41,410</span>
                            </div>

                        </div>

                    </div>


                    <div className="clearfix hidden-md-up"></div>
                    <div className="col-12 col-sm-6 col-md-3">
                        <div className="info-box mb-3">
                            <span className="info-box-icon bg-success elevation-1"><i className="fas fa-user-doctor"></i></span>
                            <div className="info-box-content">
                                <span className="info-box-text">Doctors</span>
                                <span className="info-box-number"></span>
                            </div>

                        </div>

                    </div>

                    <div className="col-12 col-sm-6 col-md-3">
                        <div className="info-box mb-3">
                            <span className="info-box-icon bg-warning elevation-1"><i className="fas fa-users"></i></span>
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
                                <div className="card-tools">
                                </div>
                            </div>

                            <div className="card-body p-0">
                                <div className="table-responsive">
                                    <table className="table m-0">
                                        <thead>
                                            <tr>
                                                <th>Doc ID</th>
                                                <th>Name</th>
                                                <th>Depatment</th>
                                                <th>Status</th>

                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td >Dr</td>
                                                <td>Dr </td>
                                                <td>
                                                    <div className="sparkbar"data-height="20"></div>
                                                </td>
                                                <td ><span className="badge badge-success">Present</span></td>
                                            </tr>
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
                                <div className="card-tools">
                                </div>
                            </div>

                            <div className="card-body p-0">
                                <div className="table-responsive">
                                    <table className="table m-0">
                                        <thead>
                                            <tr>
                                                <th>Doc ID</th>
                                                <th>Name</th>
                                                <th>Depatment</th>
                                                <th> Apply Date</th>
                                                <th>Status</th>
                                                <th>LeaveType</th>
                                                <th>Action</th>

                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td >Dr leave.user</td>
                                                <td >Dr leave.firstName+leave.lastName</td>
                                                <td>
                                                    <div className="sparkbar"data-height="10">leave.departmentName</div>
                                                </td>
                                                <td>leave.leaveDate</td>
                                                <td ></td>
                                                <td>leaveTypeCheck(leave.leaveType)</td>
                                                <td>
                                                    <button type="button" className="btn btn-success mr-2"><i className=" fa-solid fa-check"></i></button>
                                                    <button type="button" className="btn btn-danger"><i className="fa-solid fa-xmark"></i></button>
                                                </td>
                                            </tr>
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
                                    <div className="card-tools">
                                    </div>
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
                                                <tr  >
                                                    <td >appointment.Name</td>
                                                    <td > appointment.Phone</td>
                                                    <td >appointment.Department</td>
                                                    <td >appointment.Doctor</td>
                                                    <td>
                                                        <button type="button" className="btn btn-success mr-2"><i className="fas fa-edit"></i></button>
                                                        <button type="button" className="btn btn-danger"><i className="far fa-trash-alt"></i></button>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
      
            </div>
        </section>
    </div>
  )
}

export default DoctorTable
