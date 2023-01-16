const capitalizeFirstLetter = (str) => {
    return str[0].toUpperCase() + str.slice(1);
  }

function AnimalCard(props){
    const { animalProperty } = props;
    return(
        <div key={animalProperty._id}>
            <h3>{capitalizeFirstLetter(animalProperty.name)}</h3>
            <img className={'animalPicture'} src={animalProperty.src} alt={'animal_picture'} />
        </div>
    )
}

export default AnimalCard;