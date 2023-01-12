import './style.css';
import createHome from './home';
import createMenu from './menu';
import createContact from './contact';

const content = document.getElementById('content');
const page = document.createElement('div');
page.classList.add('page');

const homeTab = document.createElement('div');
const menuTab = document.createElement('div');
const contactTab = document.createElement('div');

homeTab.textContent = 'Home';
menuTab.textContent = 'Menu';
contactTab.textContent = 'Contact';

content.appendChild(homeTab);
content.appendChild(menuTab);
content.appendChild(contactTab);
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