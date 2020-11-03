import _ from 'lodash';
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
    const desc = document.createElement('h2');
    const img = document.createElement('img');
    home.textContent="HOME";
    menu.textContent="MENU";
    moreInfo.textContent="MORE INFO";

    nav.appendChild(home);
    nav.appendChild(menu);
    nav.appendChild(moreInfo);

    desc.textContent = "This is the greatest restaurant in your area!"
    img.src = 'https://thumbs.dreamstime.com/b/seamless-vegetables-pattern-green-background-vegetarian-food-43296007.jpg';
    content.appendChild(nav)
    content.appendChild(menuPage())

    home.addEventListener('click', () => {
        content.removeChild(content.lastChild);
        content.appendChild(mainPage());
      });

    menu.addEventListener('click', () => {
        content.removeChild(content.lastChild);
        content.appendChild(menuPage());
      });
      moreInfo.addEventListener('click', () => {
        content.removeChild(content.lastChild);
        content.appendChild(infoPage());
      });
     

    return content;
  }
  
  document.body.appendChild(component());