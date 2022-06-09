/*
const details = {
    Authorization: 'd4176663e2904c2c95da301349841db1',
    country: 'us',
    category: 'technology'
}
*/

const button = document.querySelector('button');
button.addEventListener('click',res=>{
    fetch('http://127.0.0.1:8080/').then(res=>{
        return res.json();
    }).catch(res=>{
        console.log('ERROR: ',res);
    })
})

const body = document.querySelector('body');
body.style = 'display: flex; flex-direction: column; border: 1px solid red;width: 90vw; height: 90vh;';
function createNewsHeadline(){
    const article = document.createElement('div');
    article.style = 'border: 1px solid green;width: 100%;height:20%;'
    body.appendChild(article);
}
createNewsHeadline()

