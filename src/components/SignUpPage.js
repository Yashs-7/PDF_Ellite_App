import React, { useState } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './styles/index.css'
const SignUpPage = () => {
  const [dataUser, setDataUser] = useState({
    name: '',
    email: '',
    password: '',
  });
  let history = useNavigate();

  // const [data,setData]=useState();

  const onChange = (e) => {
    const {name,value} = e.target
    setDataUser({
    ...dataUser, 
    [name]:value
    })
  }

  const handleSubmit = async (e) => {
    console.log(e)
    // e.preventDefault();
    console.log(history)
      const {name,email,password} = dataUser
      if (name && email && password){
        console.log('inside axios');
        await axios.post("http://localhost:5000/signup-data",dataUser )
       .then(res=>console.log(res))
      }
      else{
          alert("invalid input")
      };
   
    // use your api call 
    // const response = await fetch("http://localhost:5000/api/auth/createuser", {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify({username:dataUser.username,email: dataUser.email, password: dataUser.password})
    // });

    // const json = await response.json()
    // console.log(json);
    // if (json.success){
    //     // Save the auth token and redirect
    //     localStorage.setItem('token', json.authtoken); 
    //     history.push("/");
    // }
    // else{
    //     alert("Invalid User Data");
    // }
  }




  return (

    <>

      <div className="main">
        <div className="mainbox">
          <div className="login">
            <div className="btns">
              <Link to='/login' className="btn btn-login">Login</Link>
              <Link to='/signup' className="btn btn-signup">Sign up</Link></div>
            <form  >
              <div className="mb-3 form ">
                <label htmlFor="exampleInputName" className="form-label">Name</label>
                <input value={dataUser.name} onChange={onChange} name='name' type="text" className="form-control" id="exampleInputName" aria-describedby="nameHelp" placeholder="Enter you Name" />
                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                <input value={dataUser.email} onChange={onChange} name='email' type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter you email" />
                <div id="emailHelp" className="form-text" >We'll never share your email with anyone else.</div>
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label" >Password</label>
                <input value={dataUser.password} onChange={onChange} name='password' type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
              </div>
              <Link to="url" className='terms'>Terms and Conditions</Link>
              <div className="mb-3 form-check">
                {/* <input type="file" name="file" id="file" /> */}
                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                <label className="form-check-label" htmlFor="exampleCheck1">&nbsp;Check me out</label>
              </div>
              <button disabled={dataUser.password === ''} type='submit' className="sbtbtn btn"  >Sign Up</button>
            </form>
          </div>
        </div>
      </div>

    </>
  )
}

export default SignUpPage;
