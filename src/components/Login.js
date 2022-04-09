import React, { useRef, useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../features/userSlice'
import { Redirect } from "react-router-dom";
import '../App.css';

const Login = () => {
    const emailRef = useRef();
    const errorRef = useRef();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [isSuccess, setIsSuccess] = useState(false); 

    const dispatch = useDispatch();

    useEffect( () => {
        setErrorMessage("");
    }, [email, password])

    useEffect(() => {
        emailRef.current.focus();
    },[])

    const submitHandler = (e) => {
        e.preventDefault();

        dispatch(login({
            email : email,
            password: password,
            loggedIn: true
        }));
        setIsSuccess(true);

    }

    if (isSuccess) {
        return <Redirect to="/home" />;
      }

    return (
        <>        
            <p ref={errorRef} className={errorMessage ? "errorMessage": "offScreen"}>{errorMessage}</p>
            <form className="form" onSubmit={ submitHandler } >
                <h3 className="signIn-label" >Sign In</h3>
                <div className="form-group">
                    <label>Email address</label>
                    <input 
                        type="email" 
                        ref={emailRef} 
                        className="form-control" 
                        placeholder="Enter email"  
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input 
                        type="password" 
                        className="form-control" 
                        placeholder="Enter password" 
                        onChange={(e) => setPassword(e.target.value)}
                        required 
                    />
                </div>
                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>
                <button type="submit" className="btn btn-danger btn-block submit-btn">Submit</button>
                <br/>
                <Link to="/register" className='newUser' >New User?</Link>
               
            </form>
        </>
    )
}

export default Login