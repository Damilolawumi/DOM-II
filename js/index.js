// Your code goes here

// mouseover
let myHome = document.querySelector('.nav-link');
myHome.addEventListener('mouseover', (event) => {
    event.stopPropagation(); //stop propagation
    event.target.style.color = 'purple';
});

// 2 keydown
let anInput = document.querySelector('input')
anInput.addEventListener('keydown', (event) => {
    anInput.style.background = 'aqua';
});

//3 dblclick
let doubleClickEffect = document.querySelector('h2')
doubleClickEffect.addEventListener('dblclick', () => { doubleClickEffect.classList.toggle('large') })

//4 select
function logSelection(event) {
    const log = document.getElementById('log');
    const selection = event.target.value.substring(event.target.selectionStart, event.target.selectionEnd);
    log.textContent = `You selected: ${selection}`;
}

const input = document.querySelector('input');
input.addEventListener('select', logSelection);

//5 scroll

window.addEventListener('scroll', (event) => {
    // alert('I have been scrolled').. commemnted it out cause the alert kept popping
})


//6 focus
input.addEventListener('focus', (event) => {
    input.style.backgroundColor = 'green';
    input.style.color = 'white'
})

//7 blur
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

//8 Load
window.addEventListener('load', (event) => {
    alert('page is fully loaded');
  });

  //9 online
 window.addEventListener('online', (event) => {
    alert("You are now connected to the network.");
});

//10 resize
window.addEventListener('resize', (event) => { 
    alert ('your screen got resized');
});