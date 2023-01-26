import React from 'react';
import { Link } from 'react-router-dom';


const Login = () => {
    return (
        <>
            {/* <div className="main">
                <div className="mainbox">
                    <div className="login"> */}
                        {/* <div className="btns">
                            <button className="btn">Login</button>
                            <button className="btn">Sign up</button></div> */}
                        <form action="login_form" className="details">
                        </form>
                        <form className='credentials'>
                            <div className="mb-3">
                                <label for="exampleInputName" className="form-label">Name</label>
                                <input type="text" className="form-control" id="exampleInputName" aria-describedby="nameHelp" placeholder="Enter you Name" />
                               
                                <label for="exampleInputEmail1" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter you email" />
                                <div id="emailHelp" className="form-text" >We'll never share your email with anyone else.</div>
                            </div>
                            <div className="mb-3">
                                <label for="exampleInputPassword1" className="form-label" >Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                            </div>
                            <Link to="url">Terms and Conditions</Link>
                            <div className="mb-3 form-check">

                                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                <label className="form-check-label" for="exampleCheck1">Check me out</label>
                            </div>
                            <button type="submit" className="sbtbtn btn-primary" >Submit</button>
                        </form>
                        {/* <div class="container">
                            <div class="screen">
                                <div class="screen__content">
                                    <form class="login">
                                        <div class="login__field">
                                            <i class="login__icon fas fa-user"></i>
                                            <input type="text" class="login__input" placeholder="User name " />
                                        </div>
                                        <div class="login__field">
                                            <i class="login__icon fas fa-envolope"></i>
                                            <input type="text" class="login__input" placeholder="Email " />
                                        </div>
                                        <div class="login__field">
                                            <i class="login__icon fas fa-lock"></i>
                                            <input type="password" class="login__input" placeholder="Password" />
                                        </div>
                                        
                                        <button class="button login__submit">
                                            <span class="button__text">Log In Now</span>
                                            <i class="button__icon fas fa-chevron-right"></i>
                                        </button>
                                    </form>
                                    </div>
                                <div class="screen__background">
                                    <span class="screen__background__shape screen__background__shape4"></span>
                                    <span class="screen__background__shape screen__background__shape3"></span>
                                    <span class="screen__background__shape screen__background__shape2"></span>
                                    <span class="screen__background__shape screen__background__shape1"></span>
                                </div>
                            </div>
                        </div>  */}
                        {/* </div>
                </div>
            </div> */}

        </>
    )
}

export default Login;
