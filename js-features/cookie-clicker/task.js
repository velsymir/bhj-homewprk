let cookie = document.getElementById('cookie');
let count = document.getElementById('clicker__counter');
let countTime = document.getElementById('clicker_time');
let timer = Date.now();

cookie.addEventListener('click', () => {

  if(cookie.width === 300) {
    cookie.width = 200
  } else {
    cookie.width = 300
  }

  ++count.textContent
  countTime.textContent =(1/((Date.now()- timer)/1000)).toFixed(2)
  timer = Date.now()
})
