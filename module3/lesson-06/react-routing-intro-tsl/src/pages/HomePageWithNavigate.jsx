 import { useState } from "react";
import { Navigate } from "react-router-dom";
 
const imgURL = "https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/m3/react-routing/home.gif";
 
 
function HomePageWithNavigate() {
  const [isLoggedIn] = useState(true);
 
  if (!isLoggedIn) return <Navigate to="/error" />;
 
  return (
    <div>
      <h1>Home - With Navigate</h1>
      <img src={imgURL} alt="home" className="page-img" />
    </div>
  );
}
 
export default HomePageWithNavigate;