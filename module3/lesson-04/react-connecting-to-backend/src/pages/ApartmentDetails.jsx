import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function ApartmentDetails(){
    const [apartment, setApartment] = useState(null);
    const { apartmentId } = useParams();
    console.log('apartmentId', apartmentId)

    useEffect(() => {
        axios.get(`https://ironbnb-m3.herokuapp.com/apartments/${apartmentId}`)
            .then(response => setApartment(response.data))
    }, [apartmentId])
    return (
        <div>
            <h1>Apartment Details</h1>

            {apartment === null && <p>Loading details...</p>}
            {apartment !== null  && 
            <>
                <h3>{apartment.title}</h3>
                <img src={apartment.img} alt={'apartment_image'} />
                <p>Price per Day {apartment.pricePerDay}$ </p>
            </>}


        </div>
    )
}

export default ApartmentDetails;