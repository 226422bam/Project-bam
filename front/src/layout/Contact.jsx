import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

function Contact() {
    const [input, setInput] = useState({
        firstName: '',
        lastName: '',
        email: '',
        message: ''
    });

    const hdlChange = (e) => {
        setInput(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value
        }));
    }

    const hdlSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted!");
    }

    return (
        <div className="mt-20 p-8 border rounded-lg w-1/2 min-w-[400px] mx-auto bg-gray-100 shadow-md">
            <div className="background-containerC relative flex flex-col justify-center h-screen p-8">
                <h1 className="text-3xl font-semibold text-center text-blak-600 mb-6">ติดต่อเรา</h1>
                <form className="mx-auto max-w-lg">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                            <input
                                type="text"
                                className="input input-bordered w-full"
                                name="firstName"
                                placeholder="ชื่อ"
                                value={input.firstName}
                                onChange={hdlChange}
                            />
                        </div>
                        <div>
                            <input
                                type="text"
                                className="input input-bordered w-full"
                                name="lastName"
                                placeholder="นามสกุล"
                                value={input.lastName}
                                onChange={hdlChange}
                            />
                        </div>
                    </div>
                    <div className="mt-4">
                        <input
                            type="email"
                            className="input input-bordered w-full"
                            name="email"
                            placeholder="อีเมล์"
                            value={input.email}
                            onChange={hdlChange}
                        />
                    </div>
                    <div className="mt-4">
                        <textarea
                            id="message"
                            className="textarea textarea-bordered w-full"
                            name="message"
                            rows="4"
                            placeholder="กรอกข้อความที่ต้องการส่ง"
                            value={input.message}
                            onChange={hdlChange}
                        ></textarea>
                    </div>
                    <div className="mt-4 flex justify-end">
                        <button type="submit" className="btn btn-red px-4 py-2">ส่งข้อความ</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contact;
