const content = document.querySelector("#content");
function about(){
    const headline = document.createElement("h1");
    headline.classList.add("title")
    headline.textContent = "About us";
    content.appendChild(headline);

    const text = document.createElement("p");
    text.classList.add("text");
    text.textContent = "lorem ipsum bruhhhhhh";
    content.appendChild(text);
}
export default about;