import menuImage from '../images/image.jpg';


const mainPage = () => {
  const section = document.createElement('section');
  const mainTitle = document.createElement('h1');
  const mainText = document.createElement('p');
  const container = document.createElement('div');
  const menuImg = new Image();


  menuImg.src = menuImage;
  section.appendChild(menuImg);
  mainTitle.textContent = 'Welcome to Green Smell';
  mainText.innerHTML = 'Feel more than welcome to check out our prices and our unique cousine. ';

  container.appendChild(mainTitle);
  container.appendChild(mainText);
  section.appendChild(container);

  mainText.classList.add('mainText');
  container.classList.add('menuContainer');


  return section;
};


export default mainPage;