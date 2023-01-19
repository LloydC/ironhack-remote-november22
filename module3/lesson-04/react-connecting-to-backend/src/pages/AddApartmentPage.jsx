import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

function AddApartmentPage() {
    const [title, setTitle] = useState("")
    const [img,setImg] = useState("");
    const [pricePerDay, setPricePerDay] = useState(0)

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault()

        const newApartment = {title, img, pricePerDay}

        axios.post('https://ironbnb-m3.herokuapp.com/apartments', newApartment)
            .then(() => {
                navigate("/");
            })
    }
    return (
      <div className="AddApartmentPage">
        <h3>Add New Apartment</h3>
        <form onSubmit={handleSubmit}>
            <label>Title</label>
            <input type="text" name="title" value={title} onChange={(event) => setTitle(event.target.value)} />
            <br/>
            <label>Image</label>
            <input type="text" name="img" value={img} onChange={(event) => setImg(event.target.value)} />
            <br/>
            <label>Price</label>
            <input type="number" name="pricePerDay" value={pricePerDay} onChange={(event)=> setPricePerDay(Number(event.target.value))} />
            <button type="submit">Add new apartment</button>
        </form>
      </div>
    );
  }
   
  export default AddApartmentPage;