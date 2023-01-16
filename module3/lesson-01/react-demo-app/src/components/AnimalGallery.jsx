import AnimalCard from './AnimalCard';

function AnimalGallery(props){
    return (
        <div className='animal-gallery'>
            {props.animalsList.map(animal => {
                return <AnimalCard animal={animal} id={animal._id}/>
            })
            }
        </div>
    )
}

export default AnimalGallery;