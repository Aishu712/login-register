import React,{ useState } from 'react'
import { Link } from "react-router-dom"
import axios from "axios"
import { useNavigate } from 'react-router-dom'

const Signup = () => {
  const [users,setUsers] = useState([])
  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [password,setPassword] =  useState("")
  const navigate = useNavigate()
  
  const handleSubmit = (e) =>{
    e.preventDefault()
    axios.post('http://localhost:3001/register',{name,email,password})
    .then(result => {console.log(result)
      navigate('/login')
    })
    .catch(err => console.log(err))

  }
  return (
    <>
       <div className="d-flex flex-column justify-content-center align-items-center vh-100">
       <form onSubmit={handleSubmit}>
         <h4>Register</h4>
         <div className="mb-3">
            <label for="Name" className="form-label">Name</label>
            <input type="text" className="form-control" onChange= {(e)=>setName(e.target.value)}/>
         </div>
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
        <p>Already have an account?</p>
        <Link to= "/login">Create Account</Link>

       </div>
    </>
  )
}

export default Signup