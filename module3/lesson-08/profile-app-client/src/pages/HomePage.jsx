import { Link } from "react-router-dom"
import { useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../context/auth.context";

const HomePage = props => {
    const [image, setImage] = useState("");
    const { user, setUser, isLoggedIn, logOutUser } = useContext(AuthContext);
    

    const handleFileUpload = (e) => {
        // console.log("The file to be uploaded is: ", e.target.files[0]);
     
        const uploadData = new FormData();
     
        // imageUrl => this name has to be the same as in the model since we pass
        // req.body to .create() method when creating a new movie in '/api/movies' POST route
        uploadData.append("image", e.target.files[0]);
     
        axios.post(`${process.env.REACT_APP_API_URL}/api/upload`, uploadData)
          .then(response => {
            // console.log("response is: ", response);
            // response carries "fileUrl" which we can use to update the state
            setImage(response.data.image);
          })
          .catch(err => console.log("Error while uploading the file: ", err));
      };

      const handleSubmit = (e) => {
        e.preventDefault();

        axios.put(`${process.env.REACT_APP_API_URL}/api/users`, {...user, image})
            .then((response)=> {
                setUser(response.data.updatedUser);
                setImage("")
            })
            .catch(err => console.error(err))
      }
  return (
    <>
        <div>
            <h1>IronProfile</h1>
            <p>Today we will create an app with some cool style!</p>
        </div>

        <div>
            {user && user.image && <img src={user.image} alt={"profile_image"} style={{width: '50px', height: '50px', borderRadius: '75%'}} />}
            {isLoggedIn && <button onClick={logOutUser}>Log out</button>}
            {isLoggedIn && <form onSubmit={handleSubmit}>
                <input type="file" onChange={(e) => handleFileUpload(e)} />
                <button type="submit">Save new profile image</button>
                </form>}
            {!isLoggedIn && <>
                <Link to={'/signup'}><button>Signup</button></Link>
                <Link to={'/login'}><button>Login</button></Link>
            </>}
        </div>
    </>
  )
}

export default HomePage