const dropBut = [...document.querySelectorAll('.dropdown__value')];
const menu = [...document.querySelectorAll('.dropdown__list')];
const menuItem = [...document.querySelectorAll('.dropdown__item')];
for(let k in dropBut) {
  dropBut[k].onclick = () => {
      menu[k].classList.toggle('dropdown__list_active')
      for(let key in menuItem) {
        menuItem[key].onclick = (e) => {
          let even = menuItem[key].closest('.dropdown__list')
          dropBut[k].textContent = e.target.textContent
          even.classList.toggle('dropdown__list_active')
          return false
        }
      }

  }
}
