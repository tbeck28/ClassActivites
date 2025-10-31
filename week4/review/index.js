const h1 = document.querySelector('h1');
h1.textContent = 'My favorite singers';
h1.style.color = 'red'


const oof = document.getElementById('oof');
oof.addEventListener('click', () => {
    oof.style.color = 'purple'
})

const h2 = document.getElementsByTagName('h2');
h2[0].textContent = 'whjate'

document.querySelector('body').addEventListener('mouseover', (event) =>
event.target.style.backgroundColor = 'purple')