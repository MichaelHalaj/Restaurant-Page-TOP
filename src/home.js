import { removeAllChildren } from "./functions";
const createHome = (content) => {
    removeAllChildren(content);
    const home = document.createElement('h1');
    home.textContent = 'Welcome to the Restaurant';

    const description = document.createElement('p');
    description.textContent = 'Aenean blandit justo enim, eu dignissim ex vehicula sit amet. In accumsan porttitor facilisis. Cras sagittis at est in volutpat. Etiam sagittis sed purus non elementum. Duis ipsum libero, venenatis.';
    content.appendChild(home);
    content.appendChild(description);
};

export default createHome;
