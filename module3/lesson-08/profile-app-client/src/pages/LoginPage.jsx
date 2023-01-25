import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../context/auth.context";

const LoginPage = () => {
    const [user, setUser] = useState({username: '', password: ''});
    const navigate = useNavigate();
    const { storeToken, authenticateUser } = useContext(AuthContext);

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setUser(user => ({...user, [name]: value}))
    }
    
    const handleSubmit = (e) => {
        e.preventDefault()

        axios.post(`${process.env.REACT_APP_API_URL}/auth/login`, user)
            .then((response) =>{
                // store the token in localStorage
                storeToken(response.data.authToken)
                authenticateUser()
                navigate("/")
            } )
            .catch(err => console.error(err))
    }
  return (
    <div>
    <h1>Login</h1>

    <form onSubmit={handleSubmit}>
        <label>Username</label>
        <input type="text" name="username" value={user.username} onChange={handleChange} />
        <br />
        <label>Password</label>
        <input type="password" name="password" value={user.password}  onChange={handleChange} />
        <br/>
        <button type="submit">Log In</button>
    </form>
</div>
  )
}

export default LoginPage