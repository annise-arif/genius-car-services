import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import './Register.css';
import auth from '../../../firebase.init';

const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);
    const navigate = useNavigate();

    const navigateLogin = () =>{
        navigate('/login');
    }

    if(user){
        navigate('/home');
    }

    const handleRegister = (event) =>{
        event.preventDefault();
        // console.log(event.target.email.value)
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        createUserWithEmailAndPassword(email, password);
    }
    return (
        <div className='register-form'>
            <h1 className='text-center text-primary'>Register form</h1>
            <form onSubmit={handleRegister}>
                <input type="text" name="name" placeholder='Your Name' id="" />
                
                <input type="email" name="email" placeholder='Emali Address' required id="" required/>
                
                <input type="password" name="password" placeholder='Password' required id="" required/>
               
                <input type="submit" value="Register" />
            </form>
            <p>Already have an account? <Link to='/login' className="text-danger text-decoration-none" onClick={navigateLogin}>Please Login</Link></p>
        </div>
    );
};

export default Register;