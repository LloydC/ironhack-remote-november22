const addCatPicture = function () {

    const catCard = document.createElement('div'); // create div element
    catCard.className = "cat-card"; // add pre-defined class to div element

    const ourImage = document.createElement('img'); // create img element 
    const RandomNumber = Math.floor(Math.random() * 400) + 100; // Generate a random number
    ourImage.setAttribute('src', `http://placekitten.com/${RandomNumber}/${RandomNumber}`); // set attribute of the image element
    const catContainer = document.getElementById('cat-container'); // get cats container element
    const catName = document.getElementById('cat-name').value; // gets input value
    const textName = document.createTextNode("mr." + catName); // creates new content 

    catCard.appendChild(ourImage); // add image within div element
    catCard.insertBefore(textName, ourImage); // add text before the image

    catCard.addEventListener('click', (e) => e.currentTarget.remove()); // add event listener on div to remove it on click

    catContainer.appendChild(catCard); // add catCard to the div container
}

const removeCat = function(e) {
    const catCard = e.currentTarget; // the current cat clicked
    console.log(e.currentTarget); // log the current cat clicked
    const catCardParent = catCard.parentNode; // go up the dom tree to the parent node container

    catCardParent.removeChild(catCard); // remove the card from the parent node container
    catCard.remove();
}

const addCat = document.getElementById('add-cat');
//addCat.onclick = addCatPicture;
addCat.addEventListener('click', addCatPicture); // event listener to add Cat picture on click