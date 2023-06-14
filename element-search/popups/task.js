let modalBtn = document.querySelectorAll('.btn');
let modal = modalBtn[0].closest('.modal')
let modalS = modalBtn[1].closest('.modal')
let modalX = document.querySelectorAll('.modal__content > div')
let setTime = setTimeout(()=>{modal.classList.add('modal_active')}, 5000)


modalBtn.item(0).onclick = () => {
   modalS.classList.add('modal_active')
}

for (let i = 0 ; i < modalX.length ; i++ ) {
  modalX.item(i).onclick = () => {
    modal.classList.remove('modal_active')
    modalS.classList.remove('modal_active')
  }
}
