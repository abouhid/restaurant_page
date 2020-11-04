import menuImage from '../images/image.jpg';


const mainPage = () => {
  const section = document.createElement('section');
  const mainTitle = document.createElement('h1');
  const mainText = document.createElement('p');
  const container = document.createElement('div');
  const menuImg = new Image();

  const addContent = () => {
    menuImg.src = menuImage;
    section.appendChild(menuImg);
    mainTitle.textContent = 'Welcome to Green Smell!';
    mainText.innerHTML = 'Feel more than welcome to check out our prices and our unique cousine. Here you can find all the information necessary to order and the options in our menu.';
    mainTitle.classList.add('title');
    mainText.classList.add('mainText');
    container.classList.add('menuContainer');
  };
  const appendElements = () => {
    container.appendChild(mainTitle);
    container.appendChild(mainText);
    section.appendChild(container);
  };

  addContent();
  appendElements();

  return section;
};


export default mainPage;