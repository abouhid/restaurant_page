import menuImage from '../images/menu.jpg';


const menuPage = () => {
  const section = document.createElement('section');
  const menuTitle = document.createElement('h1');
  const container = document.createElement('div');
  const menuImg = new Image();
  const menuList = document.createElement('ul');
  const menuArr = ['Sandwich', '$8', 'Tacos', '$15', 'Hot-dog', '4$', 'Fries', '7$'];

  const addContent = () => {
    menuImg.src = menuImage;
    menuTitle.textContent = 'Menu:';
    container.classList.add('menuContainer');
  };

  const appendList = () => {
    for (let i = 0; i < menuArr.length; i += 1) {
      const listItem = document.createElement('li');
      listItem.textContent = menuArr[i];
      menuList.appendChild(listItem);
    }
  };

  const appendElements = () => {
    section.appendChild(menuImg);
    container.appendChild(menuTitle);
    appendList();
    container.appendChild(menuList);
    section.appendChild(container);
  };


  addContent();
  appendElements();


  return section;
};


export default menuPage;