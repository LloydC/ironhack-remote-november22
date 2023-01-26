import { useState } from "react";
// import axios from 'axios';
import { useNavigate } from "react-router-dom";
import authMethods from "../service/auth.service"

const SignupPage = () => {
    const [user, setUser] = useState({username: '', password: '', campus: '', course: ''});
    const navigate = useNavigate()

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setUser(user => ({...user, [name]: value}))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        ///
        authMethods.signUp(user)
            .then(() => navigate('/login'))
            .catch(err => console.error(err))
        
    }
  return (
    <div>
        <h1>Sign up</h1>

        <form onSubmit={handleSubmit}>
            <label>Username</label>
            <input type="text" name="username" value={user.username} onChange={handleChange} />
            <br />
            <label>Password</label>
            <input type="password" name="password" value={user.password}  onChange={handleChange} />
            <br />
            <label>Campus</label>
            <input type="text" name="campus" value={user.campus}  onChange={handleChange} />
            <br />
            <label>Course</label>
            <input type="text" name="course" value={user.course}  onChange={handleChange} />
            <br/>
            <button type="submit">Create the account</button>
        </form>
    </div>
  )
}

export default SignupPage