import React ,{useEffect} from "react";
// import { json } from "stream/consumers";
import {useNavigate} from 'react-router-dom'

const Login = () => {
  const [email, SetEmail] = React.useState("");
  const [password, SetPassword] = React.useState("");
  const navigate= useNavigate();
  useEffect(()=>{
    const auth=localStorage.getItem('user');
    if(auth){
        navigate('/');
    }
})
  const handlelogin = async () => {
    console.warn(email, password);
    let result= await fetch ('http://localhost:3008/login',{
        method: "post",
        body:JSON.stringify({email,password}),
        headers: {
            "Content-Type": "application/json",
        },

    });
    result= await result.json();
    console.warn(result);
    localStorage.setItem("user",JSON.stringify(result));
    navigate('/')

  };
  return (
    <div className="login">
     <h1>Login</h1>
      <input
        className="inputBox"
        type="text"
        placeholder="Enter Name"
        onChange={(e) => SetEmail(e.target.value)}
        value={email}
      />
      <input
        className="inputBox"
        type="password"
        placeholder="Enter password"
        onChange={(e) => SetPassword(e.target.value)}
        value={password}
      />
      <button onClick={handlelogin} className="btn" type="button">
        Sign up
      </button>
    </div>
  );
};

export default Login;
