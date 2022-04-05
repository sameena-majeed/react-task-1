import React, { useEffect, useRef, useState, useReducer } from 'react'
import { Link } from 'react-router-dom';
import '../App.css';
// import axios from '../api/axios';
// import axios from 'axios';

// import { useSelector } from 'react-redux';

// import { useDispatch } from 'react-redux';

const EMAIL_FORMAT = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
const PASSWORD_FORMAT = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,24}$/;
// const REGISTER_URL = 'https://jsonplaceholder.typicode.com/users';
const Register = () => {

    

    // const userDetails = useSelector( state => state);

    const errorRef = useRef();
    const emailRef = useRef();

    const [errorMessage, setErrorMessage] = useState("");


    const [email, setEmail] = useState('');
    const [isValidEmail, setIsValidEmail] = useState('false');
    const [focusEmail, setFocusEmail] = useState('false');

    const [password, setPassword] = useState('');
    const [isValidPassword, setIsValidPassword] = useState('false');
    const [focusPassword, setFocusPassword] = useState('false');

    const [confirmPassword, setConfirmPassword] = useState('');
    const [isValidCPassword, setIsValidCPassword] = useState('false');
    const [focusCPassword, setFocusCPassword] = useState('false');

    const [registrationSuccess, setRegistrationSuccess] = useState(false);

    const initialValues = {
        email : {
            value: ''
        },
        password: {
            value: ''
        },
    }
    
    const reducer = (state,  action) => {
        switch(action.type) {
            case 'FORM_SUBMISSION':
                return { ...state, 
                email: action.payload.email,
                password: action.payload.password
                } ;
            default:
                return state;
        }

    }

    
    // const dispatch = useDispatch();

    const [state, dispatch] = useReducer(reducer, initialValues)

    useEffect(() => {
        emailRef.current.focus();
    }, [])


    useEffect(() => {
        const result = EMAIL_FORMAT.test(email);
        console.log("result: " + result);
        console.log("email : " + email);
        setIsValidEmail(result);
    }, [email]);


    useEffect(() => {
        const result = PASSWORD_FORMAT.test(password);
        console.log("result: " + result);
        console.log("password :" + password);
        setIsValidPassword(result);
        const match = password === confirmPassword;
        setIsValidCPassword(match);
    }, [password, confirmPassword]);

    useEffect(() => {
        setErrorMessage("");

    }, [email, password, confirmPassword])

    const submitHandler = async (e) => {

        e.preventDefault();
        console.log("ENTERED!");
        const validSubmittedEmail = EMAIL_FORMAT.test(email);
        const validSubmittedPassword = PASSWORD_FORMAT.test(password);

        if (!validSubmittedEmail || !validSubmittedPassword) {
            setErrorMessage("Invalid Entry!");
            return;
        }
        try {
     
            const userDetails = {
                email,
                password
            }

            console.log("userDetails");
            console.log(userDetails);
            dispatch({ type: "FORM_SUBMISSION", userDetails});

           console.log("state:")
           console.log(state);
            setRegistrationSuccess(true);
            setEmail('');
            setPassword('');
            setConfirmPassword('');
        } catch (error) {
            if(!error?.response){
                setErrorMessage("No Server REsponse");
            } else if(error.response.status === 400){
                setErrorMessage("Email Already taken! TRy a different one!");
            } else {
                setErrorMessage("Registration failed!");
            }
            errorRef.current.focus();

        }



    }

    return (
        <>

            {registrationSuccess ?
                <section>
                    <h1>User Registration Successful!!</h1>
                    <Link to="/login" className='newUser' >Log in to continue!</Link>
                </section>
                :
                <section>

                    <p ref={errorRef} className={errorMessage ? "errorMessage": "offScreen"}>{errorMessage}</p>
                    <form className="form" onSubmit={submitHandler}>
                        <h3 className="register-label" >Register</h3>
                        <div className="form-group">
                            <label>Email address</label>
                            <input
                                type="email"
                                ref={emailRef}
                                className="form-control"
                                placeholder="Enter email"
                                onChange={(e) => setEmail(e.target.value)}
                                area-describedby="emailId"
                                area-invalid={isValidEmail ? "false" : "true"}
                                onFocus={() => setFocusEmail(true)}
                                onBlur={() => setFocusEmail(false)}
                                required
                            />
                        </div>
                        <p id="emailInstructions" className={focusEmail && email && !isValidEmail ? "emailInstructions" : "offScreen"}>
                            Use uppercase and lowercase letters in English (A-Z, a-z),
                            Digits from 0 to 9 and
                            special characters such as - @ .
                        </p>

                        <div className="form-group">
                            <label>Password</label>
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Enter password"
                                onChange={(e) => setPassword(e.target.value)}
                                 area-invalid={isValidPassword ? "false" : "true"}
                               
                                onFocus={() => setFocusPassword(true)}
                                onBlur={() => setFocusPassword(false)}
                                required
                            />
                        </div>

                        <p id="passwordInstructions" className={focusPassword && password && !isValidPassword ? "passwordInstructions" : "offScreen"}>
                            Password should contain numbers, alphabets and special characters of length between 8 and 24.
                        </p>

                        <div className="form-group">
                            <label>Confirm Password</label>
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Enter password again"
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                area-invalid={isValidCPassword ? "false" : "true"}
                                onFocus={() => setFocusCPassword(true)}
                                onBlur={() => setFocusCPassword(false)}
                                required
                            />
                        </div>
                        <p id="confirmPasswordInstructions" className={focusCPassword && confirmPassword && !isValidCPassword ? "confirmPasswordInstructions" : "offScreen"}>
                            Passwords do not match!
                        </p>
                        <div className="form-group">
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-danger btn-block submit-btn" disabled={!isValidEmail || !isValidPassword || !isValidCPassword ? true : false}>
                            Submit
                        </button>
                        <br />
                        <Link to="/login" className='newUser' >Already a member?</Link>

                    </form>
                </section>
            }


        </>
    )
}

export default Register