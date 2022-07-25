import React, { useState,useEffect } from 'react';
import './admin.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useNavigate} from "react-router-dom";
import { useForm } from 'react-hook-form';
// assets

import userImg from '../assets/user2-160x160.jpg';
import swal  from 'sweetalert';
import axios from 'axios';
function AdminSidebar() {

    const {register,handleSubmit,formState: { errors }} = useForm();
    const navigate= useNavigate();
    const [bindDepartment,setDepartment]=useState([])
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [view, setView] = useState(false);
    const Close = () => setView(false);
    const open = () => setView(true);
    const key= localStorage.getItem('accessToken')

/// fetch department for Add user
useEffect(() => {
    axios
    .get('http://localhost:8080/user/department',{
        headers:{
            Authorization: "Hospital "+key        
        }
    })
    .then((response)=>setDepartment(response.data))
}, [])






    const logout= ( )=>{
    localStorage.clear()
        swal({
            title: "Good job!",
            text: "Logout Success!",
            icon: "success",
            button: "OK",
            timer: 1000,
            
          })
          navigate('/login',{replace:true});

    }



    const handleSubmitDoctor = (e) => {
       axios
       .post('http://localhost:8080/user',e,{
        headers:{
            Authorization: "Hospital "+key        
        }}) 
        .then((response)=>response.data);   
            
    }
    const submitHandler =(e)=>{
        axios
        .post('http://localhost:8080/user/department',e,{
            headers: {
                Authorization:"Hospital "+key
            }})
        .then((response)=>response.data)
    }
    return (
        <aside className="main-sidebar sidebar-dark-primary elevation-4">
            <a className="brand-link">
                <img src={userImg} alt="AdminLTE Logo" className="brand-image img-circle elevation-3" />
                <span className="brand-text font-weight-light">Admin</span>
            </a>

            <div className="sidebar">

        
                <div className="form-inline mt-3">
                    <div className="input-group" data-widget="sidebar-search">
                        <input className="form-control form-control-sidebar" type="search" placeholder="Search" aria-label="Search" />
                        <div className="input-group-append">
                            <button className="btn btn-sidebar">
                                <i className="fas fa-search fa-fw"></i>
                            </button>
                        </div>
                    </div>
                </div>

                <nav className="mt-2">
                    <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                        <li className="nav-item">
                            <a className="nav-link">
                                <i className="nav-icon fas fa-table"></i>
                                <p>
                                    Tables
                                    <i className="fas fa-angle-left right"></i>
                                </p>
                            </a>
                            <ul className="nav nav-treeview">
                                <li className="nav-item">
                                    <a href="#" className="nav-link">
                                        <i className="far fa-circle nav-icon"></i>
                                        <p>Department list</p>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link">
                                        <i className="far fa-circle nav-icon"></i>
                                        <p>Doctor List</p>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="# " className="nav-link">
                                        <i className="far fa-circle nav-icon"></i>
                                        <p>Patient list</p>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-header">Action</li>
                        <li className="nav-item">
                            <a className="nav-link" onClick={handleShow}>
                                <i className="nav-icon fas fa-calendar-alt"></i>
                                <p>Add Department</p>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" onClick={open}>
                                <i className="nav-icon far fa-image"></i>
                                <p>Add Doctor</p>
                            </a>
                        </li>
                        <li className="nav-item  mt-5 pt-5">
                            <a className="nav-link" onClick={logout}>
                                <i className="fa-solid fa-arrow-right-from-bracket"></i>
                                <p>Logout</p>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>  

            {/* DepartmentModal */}
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Department</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit(submitHandler)}>
                        <Form.Group className="mb-3 " controlId="exampleForm.ControlInput1">
                            <Form.Label>Department :</Form.Label>
                            <Form.Control type="text" placeholder="Department name" autoFocus {...register('depName')} />
                            
                        </Form.Group>
                        <Form.Group className="mb-3 " controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Type:</Form.Label>
                            <Form.Select aria-label="DorpDown FOR Type " {...register('type')}>
                                <option>--Select--</option>
                                <option value="1">Admin</option>
                                <option value="2">Doctor</option>
                            </Form.Select>
                          
                        </Form.Group>

                        <Form.Group>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary"  type='submit' onClick={handleClose}>
                        Save Changes
                    </Button>
                    </Form.Group>
                    </Form>
                </Modal.Body>
               
            </Modal>

            {/* Doctor Modal */}
            <Modal show={view} onHide={Close}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Doctor</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit(handleSubmitDoctor)}>
                        <div className="row">
                            <Form.Group className="col-md-4 " controlId="exampleForm.ControlInput1">
                                <Form.Label> First Name</Form.Label>
                                <Form.Control type="text" placeholder="First Name" autoFocus {...register('firstName')} />
                            </Form.Group>
                            <Form.Group className="col-md-4 " controlId="exampleForm.ControlInput1">
                                <Form.Label>Last Name </Form.Label>
                                <Form.Control type="text" placeholder="Last Name" autoFocus {...register('lastName')} />
                            </Form.Group>
                            <Form.Group className="col-md-4 " controlId="exampleForm.ControlInput1">
                                <Form.Label>Nick Name</Form.Label>
                                <Form.Control type="text" placeholder="Nick Name" autoFocus {...register('nickName')} />
                            </Form.Group>
                           
                            <Form.Group className="col-md-0" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Address</Form.Label>
                                <Form.Control type="text" placeholder="Address" autoFocus {...register('address')} />
                            </Form.Group>

                            
                            <Form.Group className="col-md-4 " controlId="exampleForm.ControlInput1">
                                <Form.Label>Country</Form.Label>
                                <Form.Control type="text" placeholder="Country" autoFocus  {...register('country')}/>
                            </Form.Group>
                            <Form.Group className="col-md-4 " controlId="exampleForm.ControlInput1">
                                <Form.Label>State</Form.Label>
                                <Form.Control type="text" placeholder="State" autoFocus {...register('state')}/>
                            </Form.Group>
                            <Form.Group className="col-md-4 " controlId="exampleForm.ControlInput1">
                                <Form.Label>City</Form.Label>
                                <Form.Control type="text" placeholder="City" autoFocus {...register('city')} />
                            </Form.Group>
                        </div>
                        <div className="row">
                            
                            <Form.Group className="col-md-4 " controlId="exampleForm.ControlInput1">
                                <Form.Label>ZipCode :</Form.Label>
                                <Form.Control type="text" placeholder="ZipCode" autoFocus {...register('zipcode')} />
                            </Form.Group>
                            <Form.Group className="col-md-4 " controlId="exampleForm.ControlInput1">
                                <Form.Label>Type</Form.Label>
                                <Form.Select aria-label="DorpDown FOR Type " {...register('type')}>
                                <option>--Select--</option>
                                <option value="1">Admin</option>
                                <option value="2">Doctor</option>
                            </Form.Select>
                            </Form.Group>
                            <Form.Group className="col-md-4 " controlId="exampleForm.ControlInput1">
                                <Form.Label>Department</Form.Label>
                                <Form.Select aria-label="DorpDown FOR Type " {...register('department')}>
                                <option>--Select--</option>
                                {bindDepartment.map((department)=>
                                  <option key={department.depId} value={department.depId}>{department.depName}</option>
                                )}
                            </Form.Select>
                            </Form.Group>


                            <Form.Group className="col-md-4 " controlId="exampleForm.ControlInput1">
                                <Form.Label>Dob </Form.Label>
                                <Form.Control type="date" placeholder="Dob" autoFocus {...register('dob')}/>
                            </Form.Group>

                            <Form.Group className="col-md-4 " controlId="exampleForm.ControlInput1">
                                <Form.Label>Phone</Form.Label>
                                <Form.Control type="text" placeholder="Phone" autoFocus {...register('phone')} />
                            </Form.Group>
                            <Form.Group className="col-md-4 " controlId="exampleForm.ControlInput1">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="text" placeholder="Email" autoFocus {...register('email')} />
                            </Form.Group>
                            <Form.Group className="col-md-0 " controlId="exampleForm.ControlInput1">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="text" placeholder="Password " autoFocus {...register('password')}/>
                            </Form.Group>
                        </div>
                        <Button type='submit' variant="primary" onClick={Close}>
                        Save Changes
                    </Button>
                        
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={Close}>
                        Close
                    </Button>
                    <Button type='submit' variant="primary" onClick={Close}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </aside>
    );
}

export default AdminSidebar
