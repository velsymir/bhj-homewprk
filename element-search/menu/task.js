const mainMenu = [...document.querySelectorAll('.menu__link')];
const subMenues = [...document.querySelectorAll('.menu_sub')]
for(let item in mainMenu) {
  let subMenu = mainMenu[item].closest('li').querySelector('ul');
  if(subMenu) {
    mainMenu[item].onclick = () => {
      for(let item in subMenues) {
        subMenues[item].classList.remove('menu_active')
      }
      subMenu.classList.toggle('menu_active')
      return false
    }

  }
}
