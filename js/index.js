// Your code goes here
let myHome = document.querySelector('.nav-link');
myHome.addEventListener('mouseover', (event) => {
    event.stopPropagation();
    event.target.style.color = 'purple';
});

// 2
let anInput = document.querySelector('input')
anInput.addEventListener('keydown', (event) => {
    anInput.style.background = 'aqua';
});

//3
let doubleClickEffect = document.querySelector('h2')
doubleClickEffect.addEventListener('dblclick', () => { doubleClickEffect.classList.toggle('large') })

//4
function logSelection(event) {
    const log = document.getElementById('log');
    const selection = event.target.value.substring(event.target.selectionStart, event.target.selectionEnd);
    log.textContent = `You selected: ${selection}`;
}

const input = document.querySelector('input');
input.addEventListener('select', logSelection);

//5

window.addEventListener('scroll', (event) => {
    // alert('I have been scrolled')
})


//6
input.addEventListener('focus', (event) => {
    input.style.backgroundColor = 'green';
    input.style.color = 'white'
})

//7
input.addEventListener('blur', (event) => {
    input.style.backgroundColor = 'white';
    input.style.color = 'red'
})


let nav = document.querySelector('.nav');
nav.addEventListener('mouseover', (event) => {
    nav.style.backgroundColor = 'green';
});

//add click to home nav
myHome.addEventListener('click', (event) => {
    event.preventDefault()
});
