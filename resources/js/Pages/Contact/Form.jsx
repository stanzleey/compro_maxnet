import React, { useState } from 'react';
import { Inertia } from '@inertiajs/inertia';
import Swal from 'sweetalert2';

const ContactForm = () => {
    const [values, setValues] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.id]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        Inertia.post('/contact', values, {
            onSuccess: (response) => {
                Swal.fire({
                    title: 'Success!',
                    text: response.message || 'Your message has been sent successfully.',
                    icon: 'success',
                    confirmButtonText: 'OK',
                });
                setValues({
                    name: '',
                    email: '',
                    subject: '',
                    message: '',
                });
            },
            onError: (errors) => {
                // Display errors if any validation fails
                const errorMessages = Object.values(errors).flat().join('\n');
                Swal.fire({
                    title: 'Error!',
                    text: errorMessages || 'Something went wrong.',
                    icon: 'error',
                    confirmButtonText: 'OK',
                });
            },
        });
    };

    return (
        <div className="contact-form">
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        value={values.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        value={values.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="subject">Subject</label>
                    <input
                        type="text"
                        id="subject"
                        value={values.subject}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="message">Message</label>
                    <textarea
                        id="message"
                        value={values.message}
                        onChange={handleChange}
                        required
                    ></textarea>
                </div>
                <button type="submit">Send Message</button>
            </form>
        </div>
    );
};

export default ContactForm;
