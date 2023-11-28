import React, { useState } from 'react'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

export default function Adduser() {

    let navigate = useNavigate()

    const [user, setUser] = useState({
        name:"",
        description:""
    })

    const{name, description} = user

    const onInputChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value});
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:8080/user", user)
        navigate("/")
    };

  return (
    <div className='container'>
        <div className='row'>
            <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
                <h2 className='text-center m-4'>New ToDo</h2>
                <form onSubmit={(e) => onSubmit(e)}>
                <div className='mb-3'>
                    <label htmlFor="Name" className='from-lable'>
                        Topic
                    </label>
                    <input type={"text"}
                            className='form-control'
                            placeholder='Enter your topic'
                            name='name' 
                            value={name}
                            onChange={(e) => onInputChange(e)}
                    />
                </div>
                <div className='mb-3'>
                    <label htmlFor="Username" className='from-lable'>
                        Description
                    </label>
                    <input type={"text"}
                            className='form-control'
                            placeholder='Enter your description'
                            name='description'
                            value={description} 
                            onChange={(e) => onInputChange(e)}
                    />
                </div>
                
                <Link className='btn btn-outline-danger mx-2' to={"/"}>Cancel</Link>
                <button type='submit' className='btn btn-outline-primary'>Submit</button>
                </form>
            </div>
        </div>
    </div>
  )
}
