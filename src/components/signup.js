import React,{useState,useEffect} from 'react'
import {useNavigate} from 'react-router-dom'

const SignUp=()=>{
    const [name,SetName]=useState("");
    const [email,SetEmail]=useState("");
    const [password,SetPassword]=useState("");
    const navigate = useNavigate();

    useEffect(()=>{
        const auth=localStorage.getItem('user');
        if(auth){
            navigate('/');
        }
    })

    const collectData= async()=>{
        console.warn(name,password,email)
        let result= await fetch('http://localhost:3008/register',{
            method: 'post',
            body: JSON.stringify({ name,password,email }),
            headers: {
                "Content-Type": "application/json",
            },
        });
        result = await result.json();
        console.warn(result);
        localStorage.setItem("user",JSON.stringify(result));
        navigate('/');
        
 }
    return(
        <div className='Register'>
            <h1>Register</h1>
            <input className="inputBox" type="text" 
            value={name} onChange={(e)=>SetName(e.target.value)} placeholder="Enter Name" />
            <input className="inputBox" type="text"
              value={email} onChange={(e)=>SetEmail(e.target.value)} placeholder="Enter Email" />
            <input className="inputBox" type="Password"
              value={password} onChange={(e)=>SetPassword(e.target.value)} placeholder="Enter Password" />
            <button onClick={collectData} className='btn' type="button">Sign up</button>
        </div>
    )
}

export default SignUp;