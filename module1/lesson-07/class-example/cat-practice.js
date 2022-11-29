// SOLUTION 1
// const addCatPicture = function () {
//     // get cat pictures --> https://placekitten.com/randomnumber/randomNumber
//     // create an event listener to the button so that it triggers addCatPicture onclick
//     // function should create a new image element, locate a parent and then append it to the page
//     const randomNum = Math.floor(Math.random() * 100); // generate a random number between 1-100
//     const catPictureElement = document.createElement("img");
    
    
//     catPictureElement.setAttribute('src', `https://placekitten.com/${randomNum}/${randomNum}`) // catPictureElement.src = `https://placekitten.com/${randomNum}/${randomNum}`;
    
//     catPictureElement.style.width = '100px';
//     catPictureElement.style.height = '100px';
//     catPictureElement.style.marginLeft = '10px';

//     // const listElement = document.querySelector("#list-container"); // targets parent node
//     // listElement.appendChild(catPictureElement)
//     document.getElementById("cat-container").appendChild(catPictureElement)
    
// }



// document.querySelector('#add-cat').addEventListener('click', function () {
//     addCatPicture();
//   });


//SOLUTION 2

  const randomNumber = function () {
    return Math.floor(Math.random() * (400 - 200)) + 200;// Math.random() --> 0.433434
}

const generateCatUrl = function () {
    
    const height = randomNumber();
    const width = randomNumber();
    
    const url = `https://placekitten.com/${height}/${width}`;
    return url;

}

const removeCat = function(event) {
    console.log(event.currentTarget)
    event.currentTarget.setAttribute('style', 'display: none;')
}

window.addEventListener('load', (event) => {

    const catButton = document.getElementById('add-cat');

    catButton.addEventListener('click', function () {
        const catDiv = document.getElementById('cat-container');
        const newCat = document.createElement('div');
        newCat.setAttribute('style', `display:inline-block;margin:0px 10px 10px 10px;height:150px; width: 150px; background-image: url('${generateCatUrl()}'); background-position: center; background-repeat: no-repeat; background-size: cover;`)
        newCat.setAttribute('onclick', 'removeCat(event)');
        catDiv.appendChild(newCat);
    });

    // newCat.addEventListener('click', removeCat());

});