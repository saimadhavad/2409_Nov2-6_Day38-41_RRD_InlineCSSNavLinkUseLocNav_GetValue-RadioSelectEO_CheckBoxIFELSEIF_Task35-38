import React, { useRef } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom' 
import userSigninImage from './../images/profile.png'

function Signin() {

    let navigate = useNavigate();
    
    let emailInputref = useRef();
    let passwordInputRef =  useRef();
    // let messageInputRef = useRef();

  return (
    <div className='App signInDiv'>
       <form className='signINForm'>
        <h1>Signin Form</h1>
        <img src={userSigninImage} className='signINImageLogo' alt='SignIN-Profile-Image-Logo'></img>
        <div>
            <label>Email</label>
            <input type='email' placeholder='Enter Username/ Email / Mobile Number' ref={emailInputref}></input>
        </div>
        <div>
            <label>Password</label>
            <input type='password' placeholder='Enter Password' ref={passwordInputRef}></input>
        </div>
        {/* <div>
            <label>Message</label>
            <input ref={messageInputRef}></input>
        </div> */}
        <div>
            <button type='button' className='signINBTN'
                onClick={ () => {

                    let email = emailInputref.current.value;
                    let password = passwordInputRef.current.value;
                    // let message = messageInputRef.current.value;

                    if(email == "dsmv@gmail.com" && password == "dsmv") {
                        navigate("/dashboard", {state:{msg:"Welcome DSMV!"}});
                    }
                    else {
                        alert("Invalid Email / Password");
                    }
                    
                }}
            
            >Signin</button>
            <button type='button' className='signUPBTN'
            onClick={ () => {
                navigate('/signup')
            }}>Signup</button>
            {/* <Link to={"/dashboard"}>Signin!</Link>
            <Link to={"/signup"} style={{
                margin:"10px",
                color:"white",
                textDecoration:"none"   
            }}>SignUp!</Link> */}
        </div>
        <div className='forgotPasswordDiv'>
        <Link style={{
            color:"white"
        }} to={"/PageNotFound"}>Forgot Password ?</Link>
        </div>
      </form>
    </div>
  )
}

export default Signin
