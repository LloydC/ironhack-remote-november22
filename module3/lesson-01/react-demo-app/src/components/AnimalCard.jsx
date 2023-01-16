import CustomButton from "./CustomButton";

const capitalizeFirstLetter = (str) => {
    return str[0].toUpperCase() + str.slice(1);
  }

function AnimalCard(props){
    // const { animalProperty } = props;

    return(
        <div key={props.animal._id}>
            <h3>{capitalizeFirstLetter(props.animal.name)}</h3>
            <img className={'animalPicture'} src={props.animal.src} alt={'animal_picture'} />
            <br />
            <CustomButton content={'Hello'} animalName={props.animal.name} />
        </div>
    )
}

export default AnimalCard;