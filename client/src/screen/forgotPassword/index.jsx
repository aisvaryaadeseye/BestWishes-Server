import React from 'react'
import './style.css'
import { Link, } from 'react-router-dom'

const ForgotPasswordScreen = ({ history}) => {

    const handleClick =()=>{
       history.push({ pathname: '/resetPassword',})
    }
  return (
    <div className='forgotPassword'> 
        <div className="forgotPasswordFormContainer">
            <h1>Reset your password</h1>
            <p>Enter your email address </p>
            <p>and we'll send you a link to reset your password</p>
            <div className="forgotpasswordInputContainer passForm">
                <span className="userEmail">Email Address</span>
                    <div className="passwordContainer">
                        <input type="text" className='passwordInput' />
                    </div>
                <div className="forgotPasswordBtnContainer" onClick={handleClick}>
                    <button><Link to="/resetPassword" className=''>Submit</Link></button>
                </div>
            </div>
        </div>

    </div>
  )
}

export default ForgotPasswordScreen