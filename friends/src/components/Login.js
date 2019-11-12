import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

export default function Login(props) {

    const [credentials, setCredentials] = useState({
        username: '',
        password: ''
    });

    const handleChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axiosWithAuth()
            .post('/api/login', credentials)
            .then(response => {
                console.log(response);
                localStorage.setItem('token', response.data.payload);
                props.history.push('/friends');
            })
            .catch(error => {
                console.log(error);
            })
    }
}
return (
    <div className='login'>
        <form className='login-form' onSubmit={handleSubmit}>
            <input type='text' name='username' placeholder='Enter Username' onChange={handleChange} value={credentials.username} />
            <input type='text' name='password' placeholder='Enter Password' onChange={handleChange} value={credentials.password} />
            <button type='submit'>Log In</button>
        </form>
    </div>
)
