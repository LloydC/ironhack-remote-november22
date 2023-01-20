import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

function CountryDetails(props){
    const {countries} = props;
    const [country, setCountry] = useState(null);

    const {id} = useParams()

    useEffect(()=>{
        axios.get(`https://ih-countries-api.herokuapp.com/countries/${id}`)
            .then(response => setCountry(response.data))
    }, [id])

    const findCountryName = (borderCode) => {
        // return the countryName
        const foundCountry = countries.find(country => country.alpha3Code === borderCode);
        return foundCountry ? foundCountry.name.common : "";
    }
    
    if(country === null){
        return <p>Loading...</p>
    }

    return(
        <div className="col-7">
            <h1>{country.name.official}</h1>
            <table className="table">
              <thead></thead>
              <tbody>
                <tr>
                  <td style={{width: "30%"}}>CAPITAL</td>
                  <td>{country.capital[0]}</td>
                </tr>
                <tr>
                  <td>Area</td>
                  <td>
                    {country.area} km
                    <sup>2</sup>
                  </td>
                </tr>
                {country.borders.length !== 0 && (<tr>
                  <td>Borders</td>
                  <td>
                    <ul>
                        {country.borders.map(border =>  
                        <li key={border}>
                            <Link to={`/${border}`}>{findCountryName(border)}</Link>
                        </li>
                        )}
                    </ul>
                  </td>
                </tr>)}
              </tbody>
            </table>
          </div>
    )
}

export default CountryDetails;