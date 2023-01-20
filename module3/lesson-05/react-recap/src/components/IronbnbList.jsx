import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
 
const apiURL = "https://ironbnb-m3.herokuapp.com/apartments";
 
function IronbnbList() {
    // step 1 
  const [fetching, setFetching] = useState(true);
  const [apartments, setApartments] = useState([]);
 
  // step 3
  useEffect(() => {
    console.log("useEffect - Initial render (Mounting)");
    axios.get(apiURL).then((response) => {
      setApartments(response.data);
      setFetching(false);
    });
  }, []);
 
  //step 2
  return (
    <div>
      <h3>List of apartments</h3>
      {fetching && <p>Loading ...</p>}
 
      {apartments.map((apt) => {
        return (
          <div key={apt._id} className="card">
            <img src={apt.img} alt="apartment" />
            <h3><Link to={`/${apt._id}`}>{apt.title}</Link></h3>
            <p>Price: {apt.pricePerDay}</p>
          </div>
        )
      })}
    </div>
  );
}
 
export default IronbnbList;