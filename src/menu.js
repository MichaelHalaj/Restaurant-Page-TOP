import { removeAllChildren } from "./functions";
const menuItem = (name, id, price, description) => ({ name, id, price, description });

const createMenu = (content) => {
    removeAllChildren(content);
    let menu = [];
    let itemId = 0;
    menu.push(menuItem('Vanilla', itemId++, 0.99, 'Standard'));
    menu.push(menuItem('Chocolate', itemId++, 0.99, 'Standard'));

    for(let i = 0; i < menu.length; i++){
        const item = document.createElement('div');
        item.classList.add('menu-item');
        const name = document.createElement('h3');
        const price = document.createElement('div');
        const description = document.createElement('div');

        name.textContent = menu[i].name;
        price.textContent = `${menu[i].price}`;
        description.textContent = menu[i].description;
        item.appendChild(name);
        item.appendChild(price);
        item.appendChild(description);
        content.appendChild(item);
    }

};

export default createMenu;