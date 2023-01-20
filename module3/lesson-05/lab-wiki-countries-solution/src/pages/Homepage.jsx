import CountriesList from "../components/CountriesList";
import CountryDetails from "../components/CountryDetails";
import { useParams } from "react-router-dom";

function Homepage(props){
    const {countries} = props;
    const { id } = useParams();

    const country = countries.find(country => country.alpha3Code === id)

    return(
        <div style={{ width: '90vw', display: 'flex', justifyContent: 'space-between'}}>
            <CountriesList countries={countries} />
            {id && <CountryDetails country={country} countries={countries} />}
        </div>
    )
}

export default Homepage;