import menuImage from '../images/image.jpg';


const mainPage = () => {
    const section = document.createElement('section');
    const menuTitle = document.createElement('h1');
    const container = document.createElement('div')
    const menuImg = new Image();
    const menuList = document.createElement('ul');
    let menu_arr = ["Soup", "Broccoli", "Lasagna", "Hot Chocolate"];

  
    menuImg.src = menuImage;
    section.appendChild(menuImg);
    menuTitle.textContent="Menu:"
    container.appendChild(menuTitle);

    const appendList = () => {
        for (let i = 0; i < menu_arr.length; i += 1) {
            const listItem = document.createElement('li');
            listItem.textContent = menu_arr[i];
            menuList.appendChild(listItem);
        }
    };

    appendList();
    container.appendChild(menuList)
    section.appendChild(container)

    container.classList.add('menuContainer');


    return section;
};


export default mainPage;