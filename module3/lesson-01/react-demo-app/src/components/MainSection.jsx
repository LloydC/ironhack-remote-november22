import AnimalGallery from "./AnimalGallery";

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

function MainSection(){
    return (
        <div>
            <h1>Animal application</h1>
            <br />
            <AnimalGallery animalsList={animalsList} />
        </div>
    )
}

export default MainSection;