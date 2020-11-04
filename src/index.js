import './styles/style.css';

import mainPage from './tabs/main-page';
import menuPage from './tabs/menu-page';
import infoPage from './tabs/info-page';

function component() {
  const content = document.getElementById('content');
  const nav = document.createElement('nav');
  const home = document.createElement('span');
  const menu = document.createElement('span');
  const moreInfo = document.createElement('span');

  const addElements = () => {
    home.textContent = 'HOME';
    home.classList.add('active');
    menu.textContent = 'MENU';
    moreInfo.textContent = 'MORE INFO';
  };


  const appendElements = () => {
    nav.appendChild(home);
    nav.appendChild(menu);
    nav.appendChild(moreInfo);
    content.appendChild(nav);
    content.appendChild(mainPage());
  };


  home.addEventListener('click', () => {
    document.querySelector('.active').classList.remove('active');
    home.classList.add('active');
    content.removeChild(content.lastChild);
    content.appendChild(mainPage());
  });

  menu.addEventListener('click', () => {
    document.querySelector('.active').classList.remove('active');
    menu.classList.add('active');
    content.removeChild(content.lastChild);
    content.appendChild(menuPage());
  });
  moreInfo.addEventListener('click', () => {
    document.querySelector('.active').classList.remove('active');
    moreInfo.classList.add('active');
    content.removeChild(content.lastChild);
    content.appendChild(infoPage());
  });

  addElements();
  appendElements();

  return content;
}

document.body.appendChild(component());