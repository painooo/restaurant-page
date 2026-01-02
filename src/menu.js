const content = document.querySelector("#content");
function home2(){
    const headline = document.createElement("h1");
    headline.textContent = "Menu";
    content.appendChild(headline);

    const items = document.createElement("ol");
    items.classList.add("items")
    let foods = { pizza: "The most overrated item", burger: "A simple patty and burger bread", cheeseburger: "Burger but with cheese", water: "You should drink some" };
    for (const food in foods) {
        const item = document.createElement("li");
        item.classList.add("item");

        const itemTitle = document.createElement("h4");
        itemTitle.classList.add("title");
        itemTitle.textContent = food[0].toUpperCase()+food.slice(1);

        const itemDesc = document.createElement("subtext");
        itemDesc.classList.add("desc");
        itemDesc.textContent = foods[food];

        item.appendChild(itemTitle);
        item.appendChild(itemDesc);
        items.appendChild(item);
    }
    content.appendChild(items);
}
export default home2;