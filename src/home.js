import { removeAllChildren } from "./functions";
const createHome = (content) => {
    removeAllChildren(content);
    const welcome = document.createElement('div');
    welcome.classList.add('welcome');
    const home = document.createElement('h1');
    home.classList.add('title');
    home.textContent = 'Free-Z\'s Ice-cream';

    const description = document.createElement('p');
    description.textContent = 'Enjoy ice cream from the coldest places on the planet.';
    
    welcome.appendChild(home);
    welcome.appendChild(description);
    content.appendChild(welcome);
};

export default createHome;
