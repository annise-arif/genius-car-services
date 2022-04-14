import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import './Register.css';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import Loading from '../../Shared/Loading/Loading';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
    const [agree, setAgree] = useState(false);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});
      const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const navigate = useNavigate();

    const navigateLogin = () =>{
        navigate('/login');
    }

    if(loading || updating){
        return <Loading></Loading>;
    }

    if(user){
        console.log('User:', user);
    }


    const handleRegister = async (event) =>{
        event.preventDefault();
        // console.log(event.target.email.value)
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        // const agree = event.target.terms.checked;
        
        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
        console.log('Update profile');
        navigate('/home');
    }
    return (
        <div className='register-form container w-50 mx-auto p-5 mt-4 border rounded-3'>
            <h1 className='text-center text-primary mb-4 pb-2'>Register form</h1>
            <form onSubmit={handleRegister}>
                <input type="text" name="name" placeholder='Your Name' id="" />
                
                <input type="email" name="email" placeholder='Emali Address' required id="" required/>
                
                <input type="password" name="password" placeholder='Password' required id="" required/>
                <input onClick={() => setAgree(!agree)} type="checkbox" name="terms" id="terms" />
                {/* <label className={agree ? 'text-success ms-2' : 'text-danger ms-2'} htmlFor="terms">Accept Genius Care Ters And Conditions</label> */}
                <label className={`ps-2 ${agree ? 'text-success' : 'text-danger'}`} htmlFor="terms">Accept Genius Care Ters And Conditions</label>
                <input 
                    disabled={!agree}
                    className='w-25 mx-auto text-light bg-primary rounded-3 mt-4' 
                    type="submit" 
                    value="Register" />
            </form>
            <p>Already have an account? <Link to='/login' className="text-primary text-decoration-none" onClick={navigateLogin}>Please Login</Link></p>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;