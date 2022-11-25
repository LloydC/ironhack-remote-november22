console.log('index.js is connected')

function changeTheme(){
    if(document.body.style.backgroundColor === ''){
        document.body.style.backgroundColor = 'grey';
        document.body.style.color = 'coral';
    }
    else{
        document.body.style.backgroundColor = '';
        document.body.style.color = 'black';
    }
}