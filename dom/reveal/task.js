const div = document.querySelector('.reveal')
const reklama = document.querySelectorAll('.reveal');
console.log(reklama)


window.addEventListener('scroll', () => {
  reklama.forEach((item, i) => {
    let c = Math.floor(item.getBoundingClientRect().top - window.innerHeight);
    let b = Math.floor(item.getBoundingClientRect().bottom);
    if(c < 0) {
      item.classList.add('reveal_active')
    } else {
      item.classList.remove('reveal_active')
    }
    if(b < 0) {
      item.classList.remove('reveal_active')
    }
  });
})
