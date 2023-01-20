import axios from 'axios';
import {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';

const apiURL = "https://ironbnb-m3.herokuapp.com/apartments";

function ApartmentDetails(){
    const [apartment, setApartment] = useState(null)
    const { apartmentId } = useParams()

    useEffect(()=>{
        axios.get(`${apiURL}/${apartmentId}`)
            .then(response => setApartment(response.data))
    // eslint-disable-next-line
    }, [apartmentId])

    return(
        <>
        {apartment !== null && ( <div key={apartment._id} className="card">
            <img src={apartment.img} alt="apartment" />
            <h3>{apartment.title}</h3>
            <p>Price: {apartment.pricePerDay}</p>
          </div>)}
        </>
        
    )
}

export default ApartmentDetails