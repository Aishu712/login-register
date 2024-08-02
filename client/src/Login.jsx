import React,{ useState } from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom'
const Login = () => {
  const [email,setEmail] = useState("")
  const [password,setPassword] =  useState("")
  const navigate = useNavigate()
  const handleSubmit = (e) =>{
    e.preventDefault()
    axios.post('http://localhost:3001/login',{email,password})
    .then(result => {
      console.log(result)
      if(result.data === "Success"){
        navigate('/home')
      }
      
    })
    .catch(err => console.log(err))

  }
  return (
      <>
            <div className="d-flex flex-column justify-content-center align-items-center vh-100">
               <form onSubmit={handleSubmit}>
                <h4>Hey there! How's it going? :)</h4>
                <div className="mb-3">
                      <label for="exampleInputEmail1" className="form-label">Email address</label>
                       <input type="email" className="form-control" onChange= {(e)=>setEmail(e.target.value)}/>
                </div>
                <div className="mb-3">
                     <label for="exampleInputPassword1" className="form-label">Password</label>
                     <input type="password" className="form-control" onChange= {(e)=>setPassword(e.target.value)}/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
               </form>
              </div>
        </>
  )
}

export default Login