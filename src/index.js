import './style.css';
import { generate } from './home';
import createMenu from './menu';

generate();
const homeTab = document.createElement('div');
const menuTab = document.createElement('div');

homeTab.textContent = 'Home';
menuTab.textContent = 'Menu';
document.body.appendChild(homeTab);
document.body.appendChild(menuTab);
homeTab.addEventListener('click', generate);
menuTab.addEventListener('click', createMenu);