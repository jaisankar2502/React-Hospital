import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import swal from 'sweetalert';
import { useNavigate } from 'react-router-dom';

// css
import './login.css';

function LoginPage() {
    const LoginUrl = 'http://localhost:8080/login';
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    async function loginUser(loginData) {
        return axios.post(LoginUrl, loginData).then((response) => response.data);
    }
    const submitHandler = async (e) => {
        console.log(e);
        const response = await loginUser(e);

        if ('accessToken' in response) {
            swal('Login Success', 'Press OK!    ', 'success', {
                button: 'Ok'
            }).then(localStorage.setItem('accessToken', response.accessToken.value));
            navigate('/admin', { replace: true });
        } else {
            swal('Failed', 'error');
        }
    };

    return (
        <div className="login">
            <div className="container col-md-4 card-body">
                <h4>Login</h4>
                <form onSubmit={handleSubmit(submitHandler)}>
                    <div className="form-group">
                        <label htmlFor="exampleInputemail">Email address</label>
                        <input
                            type="text"
                            className="form-control"
                            aria-describedby="emailHelp"
                            {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
                            placeholder="Enter email"
                        />
                    </div>
                    <div>
                        {errors.email?.type === 'required' && <span style={{ color: 'red' }}>Email is required </span>}
                        {errors.email?.type === 'pattern' && <span style={{ color: 'red' }}>valid email required </span>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input type="password" placeholder="Password"  className="form-control"  autoComplete='on' {...register('password',  { required: true, pattern: /^\S+@\S+$/i })} />
                    </div>
                    <div>
                        {errors.password?.type === 'required' && <span style={{ color: 'red' }}>Password is required</span>}
                        {errors.password?.type === 'pattern' && <span style={{ color: 'red' }}>not valid password</span>}
                    </div>
                    <button type="submit" className="btn btn-primary" value="submit">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
}

export default LoginPage;
