import './style.css';
import createHome from './home';
import createMenu from './menu';

const content = document.getElementById('content');
const page = document.createElement('div');
page.classList.add('page');

const homeTab = document.createElement('div');
const menuTab = document.createElement('div');

homeTab.textContent = 'Home';
menuTab.textContent = 'Menu';
content.appendChild(homeTab);
content.appendChild(menuTab);
content.appendChild(page);

createHome(page);
homeTab.addEventListener('click', () => {
    createHome(page);
});
menuTab.addEventListener('click', () => {
    createMenu(page);
});