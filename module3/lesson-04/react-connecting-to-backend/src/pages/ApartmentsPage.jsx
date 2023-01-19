import { useState, useEffect } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';
 
function ApartmentsPage() {
  const [apartments, setApartments] = useState([]);

  useEffect(() => {
    axios.get('https://ironbnb-m3.herokuapp.com/apartments')
        .then(response => setApartments(response.data))
  }, [])
  
  return (
    <div>
      <h3>List of apartments</h3>
        {apartments.length === 0 && <p>Loading apartments details...</p>}

      {apartments.length !== 0 && apartments.map(apartment => {
        return <div key={apartment._id}>
                <h3><Link to={`/apartments/${apartment._id}`}>{apartment.title}</Link></h3>
                <img src={apartment.img} alt={'apartment_image'} />
                <p>Price: {apartment.pricePerDay}$</p>
                </div>
      })}
    </div>
  );
}
 
export default ApartmentsPage;