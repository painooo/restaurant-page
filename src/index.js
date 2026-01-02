import './styles.css';
import home2 from './home2.js';
import home3 from './home3.js';

const buttons = document.querySelectorAll("nav button");
const content = document.querySelector("#content");

function initPage() {
    content.textContent = "Starting page";
}
initPage();

buttons[0].addEventListener("click", initPage)

buttons[1].addEventListener("click", home2)

buttons[2].addEventListener("click", home3)