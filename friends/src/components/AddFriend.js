import React, { useState } from 'react';
import api from '../helpers/api';

const AddFriend = (props) => {
    const [newFriend, setNewFriend] = useState({
        name: '',
        age: null,
        email: ''
    })

    const handleInput = e => {
        setNewFriend({
            ...newFriend,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        api()
            .post('/api/friends', {
                name: newFriend.name,
                email: newFriend.email,
                age: newFriend.age
            })
            .then(response => {
                props.history.push('/firends')
            })
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className='add-friend'>
                <h4>Enter Friend</h4>

                <input
                    type='text'
                    name='name'
                    placeholder='friend name'
                    onChange={handleInput}
                />
                <input
                    type='number'
                    name='age'
                    placeholder='friend age'
                    onChange={handleInput}
                />
                <input
                    type='text'
                    name='email'
                    placeholder='friend email'
                    onChange={handleInput}
                />
                <button type='submit'>Add New Friend</button>

            </div>

        </form>
    )
}


export default AddFriend;