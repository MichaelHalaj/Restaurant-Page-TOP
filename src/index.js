import './style.css';
import createHome from './home';
import createMenu from './menu';
import createContact from './contact';

const content = document.getElementById('content');
const page = document.createElement('div');
page.classList.add('page');
const navBar = document.createElement('div');
navBar.classList.add('navbar');
const homeTab = document.createElement('div');
const menuTab = document.createElement('div');
const contactTab = document.createElement('div');

homeTab.textContent = 'Home';
menuTab.textContent = 'Menu';
contactTab.textContent = 'Contact';

navBar.appendChild(homeTab);
navBar.appendChild(menuTab);
navBar.appendChild(contactTab);

content.appendChild(navBar);
content.appendChild(page);

createHome(page);
homeTab.addEventListener('click', () => {
    createHome(page);
});
menuTab.addEventListener('click', () => {
    createMenu(page);
});
contactTab.addEventListener('click', () => {
    createContact(page);
});