const querySelectorAllExample = document.querySelectorAll('.list-item, #goodbyeWorld'); // return an array-like of elements
const querySelectorExample = document.querySelector('.list-item'); // return a single element
const getElementsByClassExample = document.getElementsByClassName('list-item'); // return an array-like of elements

const goodbyeWorldElement = document.getElementById('goodbyeWorld'); // return a single element
goodbyeWorldElement.innerText = "Changed value";

const headingOneElement = document.createElement('h1');
headingOneElement.innerText = 'DOM Manipulation Page';

const bodyElement = document.querySelector('body');
bodyElement.appendChild(headingOneElement);

const sectionElement = document.querySelector('section');
console.log(sectionElement)
bodyElement.removeChild(sectionElement);

const ulElement = document.querySelector('ul');
ulElement.innerHTML = '<li class="list-item">Hey :)</li>';

function addItem(){
    const newItem = document.createElement('li');
    const newItemContent = document.getElementById('newItem').value;
    newItem.innerText = newItemContent;
    document.querySelector('ul').appendChild(newItem);
    document.getElementById('newItem').value = '';
}

function changeTheme(){
    const bodyElement = document.querySelector('body');
   console.log('initial classList:', bodyElement.classList)
   if(Array.from(bodyElement.classList).includes('alternateBackground')){
    bodyElement.classList.remove('alternateBackground');
    bodyElement.classList.add('defaultBackground');
   }
   else {
    bodyElement.classList.remove('defaultBackground');
    bodyElement.classList.add('alternateBackground');
   }
    // bodyElement.setAttribute('class', 'alternateBackground');
    // console.log('classList after setAttribute: ',bodyElement.classList)
}