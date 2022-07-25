import React, { useState, useEffect } from 'react';
import './appoint.css';
import axios from 'axios';
import { useForm } from 'react-hook-form';

function Appointment() {
    const [department, setDepartment] = useState([]);
    const [doctor, setDoctor] = useState([]);
    const { register, handleSubmit } = useForm();
    const [response, handleResponse] = useState([]);

    // fetch department
    useEffect(() => {
        axios
            .get('http://localhost:8080/user/patientDep')
            .then((responce) => setDepartment(responce.data))
            .then((error) => console.log(error));
    }, []);

    //fetchdoctor

    const dataFetch = (data) => {
        if (data != null) {
            axios.post('https://sheetdb.io/api/v1/g40c7rntdc4hc', data).then((response) => handleResponse(response));
            if (response.status === 201 || response.status === 204) {
                document.getElementById('appointment').reset();

                alert('success');
            } else {
                alert('error');
            }
        } else {
            alert('please fill the form');
        }
    };

    const handleDepartmentSelector = (e) => {
        console.log(e.target.value);
        var id = e.target.value;
        axios
            .get('http://localhost:8080/user/doc/' + id)
            .then((response) => setDoctor(response.data))
            .then((error) => console.log(error));
    };

    return (
        <div className="appointment">
            <div className="container-fluid">
                <div className="section_tittle">
                    <h2>Make an Appointment</h2>
                    <p>
                        Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur
                        velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis
                        commodi quidem hic quas.
                    </p>
                </div>
                <div className="container">
                    <form id="appointment" onSubmit={handleSubmit(dataFetch)}>
                        <div className="row">
                            <div className="col-md-4 form-group ">
                                <input type="text" placeholder="Your Name" className="form-control" {...register('Name')} id="Name" />
                            </div>
                            <div className="col-md-4 form-group">
                                <input type="text" placeholder="Your Email" className="form-control" {...register('Email')} id="Email" />
                            </div>
                            <div className="col-md-4 form-group">
                                <input {...register('Phone')} type="text" placeholder="Your Phone" className="form-control" id="Phone" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4 form-group mt-3">
                                <input {...register('Date')} type="Date" placeholder="Your Date" className="form-control" id="date" />
                            </div>
                            <div className="col-md-4 form-group mt-3">
                                <select
                                    {...register('Department')}
                                    id="Department"
                                    className="form-select"
                                    onChange={handleDepartmentSelector}
                                >
                                    <option value="0">--select department--</option>
                                    {department.map((department) => (
                                        <option key={department.depId} value={department.depId}>
                                            {department.depName}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className="col-md-4 form-group mt-3">
                                <select {...register('Doctor')} id="Doctor" className="form-select">
                                    <option value="0">Select Doctor</option>
                                    {doctor.map((doctor) => (
                                        <option key={doctor.userId} value={doctor.firstName + doctor.lastName}>
                                            {doctor.firstName + doctor.lastName}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        <div className="row">
                            <textarea
                                className="form-control"
                                {...register('Message')}
                                rows="5"
                                placeholder="Message (Optional)"
                                id="Message"
                            />
                        </div>
                        <div className="text-center">
                            <button type=" submit">Make an Appointment</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
export default Appointment;
