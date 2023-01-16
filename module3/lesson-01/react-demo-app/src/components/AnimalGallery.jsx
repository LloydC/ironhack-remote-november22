import AnimalCard from './AnimalCard';
import CatPicture from '../assets/cat.jpg';
import CapybaraPicture from '../assets/capybara.jpg';
import LionFishPicture from '../assets/lion-fish.jpg';
import SlothPicture from '../assets/sloth.jpg'

const animalsList = [
    {
        _id: '1',
        name: 'cat',
        src: CatPicture,
    },
    {
        _id: '2',
        name: 'capybara',
        src: CapybaraPicture
    },
    {
        _id: '3',
        name: 'lion fish',
        src: LionFishPicture
    },
    {
        _id: '4',
        name: 'sloth',
        src: SlothPicture
    }
]


function AnimalGallery(){
    return (
        <div className='animal-gallery'>
            {animalsList.map(animal => {
                return <AnimalCard animalProperty={animal} />
            })
            }
        </div>
    )
}

export default AnimalGallery;