import React from 'react';
import Link from 'react-scroll/modules/components/Link';
import './styles/index.css'
const SignUpPage = () => {
  return (
    
    <>
    
    <div className="main">
        <div className="mainbox">
        <div className="login">
            <div className="btns">
            <Link to='/login' className="btn btn-login">Login</Link>
            <Link to='/signup' className="btn btn-signup">Sign up</Link></div>
            <form method='post' className='form' action='/signup-data'>
                <div className="mb-3 form ">
                    <label for="exampleInputName" className="form-label">Name</label>
                    <input type="text" className="form-control" id="exampleInputName" aria-describedby="nameHelp" placeholder="Enter you Name" />
                  <label for="exampleInputEmail1" className="form-label">Email address</label>
                  <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter you email"/>
                  <div id="emailHelp" className="form-text" >We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                  <label for="exampleInputPassword1" className="form-label" >Password</label>
                  <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
                </div>
                <Link to="url" className='terms'>Terms and Conditions</Link>
                <div className="mb-3 form-check">
                    
                  <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                  <label className="form-check-label" for="exampleCheck1">&nbsp;Check me out</label>
                </div>
                <button  type="submit" className="sbtbtn btn" >Sign Up</button>
              </form>
        </div>
    </div>
</div>
    
    </>
  )
}

export default SignUpPage;
