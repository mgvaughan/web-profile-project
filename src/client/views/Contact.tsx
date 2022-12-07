import * as React from 'react';
import { useState } from 'react';
// import { apiService } from '../services/api-services';

const Contact = () => {
    const [from, setFrom] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        fetch('/api/contact', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ from, subject, message })
        })
        .then(res => res.json())
        .then(result => console.log(result));
    };

    // const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    //     e.preventDefault();
    //     apiService('/api/contact', 'POST', { from, subject, message })
    //         .then(res => res.json())
    //         .then(result => console.log(result));
    // };

    return (
        <main className="container">
            <section className="row mt-5 justify-content-center">
                <div className="col-md-7">
                    <form className="form-group p-3 border border-rounded-lg bg-light shadow">
                        <h3 className="text-center">Please Feel Free to Share Your Feedback!</h3>
                        <input type="text" className="form-control my-1" value={from} onChange={e => setFrom(e.target.value)} />
                        <input type="text" className="form-control my-1" value={subject} onChange={e => setSubject(e.target.value)} />
                        <textarea cols={30} rows={7} className="form-control my-1" value={message} onChange={e => setMessage(e.target.value)} />
                        <button onClick={handleSubmit} className="btn btn-secondary my-1">Contact Me!</button>
                    </form>
                </div>
            </section>
        </main>
    )
};

export default Contact;