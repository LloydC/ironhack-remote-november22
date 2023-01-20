import { Link } from "react-router-dom";

function CountriesList(props){
    const { countries } = props;

    return(
        <div className="container">
          <div className="row">
            <div className="col-5" style={{maxHeight: "90vh", overflow: "scroll"}}>
                <div className="list-group">
                    {
                        countries.map(country => 
                        <Link key={country.alpha3Code} className="list-group-item list-group-item-action" to={`/${country.alpha3Code}`}>
                            {country.name.common}    
                        </Link>
                        )
                    }
                </div>
                </div>
            </div>
        </div>
    )
}

export default CountriesList;