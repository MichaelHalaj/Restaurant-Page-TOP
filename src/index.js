import './style.css';
import { generate } from './home';

const homeTab = document.createElement('div');
homeTab.textContent = 'Home';
document.body.appendChild(homeTab);
homeTab.addEventListener('click', generate);