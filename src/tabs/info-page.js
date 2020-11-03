import menuImage from '../images/contact.jpg';


const infoPage = () => {
    const section = document.createElement('section');
    const menuTitle = document.createElement('h1');
    const container = document.createElement('div')
    const menuImg = new Image();
  
    menuImg.src = menuImage;
    section.appendChild(menuImg);
    menuTitle.textContent="Menu:"
    container.appendChild(menuTitle);


    section.appendChild(container)

    container.classList.add('menuContainer');


    return section;
};


export default infoPage;