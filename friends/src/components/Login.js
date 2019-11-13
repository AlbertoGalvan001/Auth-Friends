import React, { useState } from 'react';
import api from '../helpers/api';

const Login = (props) => {

    const [error, setError] = useState();
    const [data, setData] = useState({
        username: '',
        password: ''
    });

    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        api()
            .post('api/login', data)
            .then(response => {
                console.log(response);
                localStorage.setItem('token', response.data.payload)
                props.history.push('/friends');

            })
            .catch(err => {
                console.log(error);
                setError(err.response.data.message)
            })
    }

    return (
        <div className='login'>
            <form onSubmit={handleSubmit} >
                {error && <div className='error'>{error}</div>}
                <input
                    type='text'
                    name='username'
                    placeholder='Enter Username'
                    value={data.username}
                    onChange={handleChange}
                />
                <input
                    type='password'
                    name='password'
                    placeholder='Enter Password'
                    value={data.password}
                    onChange={handleChange}
                />
                <button type='submit'>Log In</button>
            </form>
        </div>
    )
}
export default Login;
