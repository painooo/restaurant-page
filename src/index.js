import './styles.css';
import menu from './menu.js';
import home3 from './home3.js';

const buttons = document.querySelectorAll("nav button");
const content = document.querySelector("#content");

function init(){
    content.textContent = "";
}

function home1(){
    const headline = document.createElement("h1");
    headline.textContent = "Homepage"
    headline.classList.add("headline");
    content.appendChild(headline);

    const text = document.createElement("p");
    text.textContent = "My restaurant is the best muahahahaha";
    text.classList.add("text");
    content.appendChild(text)
}
home1();

buttons[0].addEventListener("click", () => {init();home1()})

buttons[1].addEventListener("click", () => {init();menu()})

buttons[2].addEventListener("click", () => {init();home3()})