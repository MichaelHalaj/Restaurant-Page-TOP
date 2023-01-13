import { removeAllChildren } from "./functions";
import vanilla from './dovile-ramoskaite-vanilla.jpg';
import chocolate from './mae-mu-chocolate.jpg';
import strawberry from './svitlana-strawberry.jpg';

const menuItem = (name, id, price, description, image ) => ({ name, id, price, description, image });

const createMenu = (content) => {
    removeAllChildren(content);
    let menu = [];
    let itemId = 0;
    menu.push(menuItem('Vanilla', itemId++, 0.99, 'Standard', vanilla));
    menu.push(menuItem('Chocolate', itemId++, 0.99, 'Standard', chocolate));
    menu.push(menuItem('Strawberry', itemId++, 0.99, 'Standard', strawberry));
    for(let i = 0; i < menu.length; i++){
        const item = document.createElement('div');
        item.classList.add('menu-item');
        const element = document.createElement('div');
        element.classList.add(menu[i].name);
        const name = document.createElement('h3');
        const price = document.createElement('div');
        const description = document.createElement('div');
        const image = new Image();
        image.src = menu[i].image;
        image.setAttribute('width', '360px');
        image.setAttribute('height', '540px');
        image.classList.add('food');
        element.appendChild(image);
        name.textContent = menu[i].name;
        price.textContent = `$${menu[i].price}`;
        description.textContent = menu[i].description;
        item.appendChild(element);
        item.appendChild(name);
        item.appendChild(price);
        item.appendChild(description);
        content.appendChild(item);
    }

};

export default createMenu;