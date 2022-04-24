import { async } from "@firebase/util";
import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import auth from "../../../firebase.init";
import Loading from "../../Shared/Loading/Loading";
import PageTitle from "../../Shared/PageTitle/PageTitle";
import SocialLogin from "../SocialLogin/SocialLogin";

const Login = () => {
  const emailRef = useRef('');
  const passwordRef = useRef('');
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || '/';
  let errorElement;

  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);

  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

  if(loading || sending){
    return <Loading></Loading>;
  }
  if(user){
    navigate(from, { replace: true});
  }

  if(error){
    errorElement = <p className='text-danger'> Error: {error?.message}</p>  
  }

  const handleSubmit = (event) =>{
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    signInWithEmailAndPassword(email, password);
    
  }

  
  const navigateRegister = (event) =>{
    navigate('/register')
  }

  const resetPassword = async() =>{
    const email = emailRef.current.value;
    if(email){
      await sendPasswordResetEmail(email);
      toast('Sent email');
    }
    else{
      toast('Please Enter Your Email Address');
    }
  }

  return (
    <div className="container w-50 mx-auto border p-5 mt-4 rounded-3">
    <PageTitle title='Login'></PageTitle>
      <h1 className="text-center text-primary pb-4">Please Login</h1>
      <Form onSubmit={handleSubmit}>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control ref={emailRef} type="email" required placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control ref={passwordRef} type="password" required placeholder="Password" />
        </Form.Group>
        
        <Button variant="primary w-25 mx-auto d-block mb-3" type="submit">
          Login
        </Button>

      </Form>
      <p className="text-center">{errorElement}</p>
      <p>New to Genius Car? <Link to='/register' className="text-primary text-decoration-none" onClick={navigateRegister}>Please Register</Link></p>
      <p>Forget Password? <button className="btn btn-link text-primary text-decoration-none" onClick={resetPassword}>Reset Password</button></p>
      <SocialLogin></SocialLogin>
      <ToastContainer />
    </div>
  );
};

export default Login;
