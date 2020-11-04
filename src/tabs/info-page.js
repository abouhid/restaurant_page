import menuImage from '../images/contact.jpg';


const infoPage = () => {
  const section = document.createElement('section');
  const mainTitle = document.createElement('h1');
  const container = document.createElement('div');
  const infoText = document.createElement('p');

  const menuImg = new Image();

  const addContent = () => {
    menuImg.src = menuImage;
    mainTitle.textContent = 'Contact:';
    infoText.innerHTML = 'Adress: Av. Getúlio Vargas, 353 -Juiz de Fora' + '.<br />';
    infoText.innerHTML += 'Phone number: (32) 99946-9825' + '.<br />';
    infoText.innerHTML += 'Email: cheiroverde@example.com' + '.<br />';
    infoText.innerHTML += 'Website: www.cheiroverde.com';
    container.classList.add('menuContainer');
    infoText.classList.add('info');
  };

  const appendElements = () => {
    section.appendChild(menuImg);
    container.appendChild(mainTitle);
    container.appendChild(infoText);

    section.appendChild(container);
  };


  addContent();
  appendElements();

  return section;
};


export default infoPage;