let cookie = document.getElementById('cookie');
let count = document.getElementById('clicker__counter');

cookie.addEventListener('click', () => {
  if(cookie.width === 300) {
    cookie.width = 200
  } else {
    cookie.width = 300
  }
  ++count.textContent
})
