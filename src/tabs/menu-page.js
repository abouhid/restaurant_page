import menuImage from '../images/menu.jpg';


const menuPage = () => {
    const section = document.createElement('section');
    const menuTitle = document.createElement('h1');
    const container = document.createElement('div')
    const menuImg = new Image();
    const menuList = document.createElement('ul');
    let menu_arr = ["Sandwich", "$8", "Tacos", "$15", "Hot-dog","4$","Fries","7$"];

  
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


export default menuPage;