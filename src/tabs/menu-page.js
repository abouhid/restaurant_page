import menuImage from '../images/menu-img.jpeg';


const menuPage = () => {
  const section = document.createElement('section');
  const menuTitle = document.createElement('h1');
  const container = document.createElement('div');
  const menuImg = new Image();
  const menuList = document.createElement('ul');
  const menuArr = ['Salad', '$8', 'French Fries', '$15', 'Spaghetti', '$14', 'Soup', '$7', 'Pizza', '$14', 'Lasagna', '$13', 'Burguer', '$11'];

  const addContent = () => {
    menuImg.src = menuImage;
    menuTitle.textContent = 'Menu:';
    container.classList.add('menuContainer');
    menuTitle.classList.add('title');
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