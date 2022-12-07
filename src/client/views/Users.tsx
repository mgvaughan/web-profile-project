import * as React from 'react';
import { useState, useEffect } from 'react';
import { IUser } from '../../types';
import { useNavigate } from 'react-router-dom';
// import { apiService } from '../services/api-services';

const Users = () => {
    const nav = useNavigate();
    const [users, setUsers] = useState<IUser[]>([])

    useEffect(() => {
        fetch('/api/users')
            .then(res => res.json())
            .then(data => setUsers(data))
            .catch(error => console.error(error));
    }, []);

    // useEffect(() => {
    //     apiService('/api/users')
    //         .then(res => res.json())
    //         .then(data => setUsers(data))
    //         .catch(error => console.log(error));
    // }, [])

    return (
        <div className="row justify-content-center">
            {users.map(usr => (
                <div onClick={() => nav(`/users/${usr.id}`)} key={`user-car-${usr.id}`} className="col-7 my-1">
                    <div className="card bg-white shadow-lg">
                        <h1>{usr.id}</h1>
                        <h6>{usr.email}</h6>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Users;