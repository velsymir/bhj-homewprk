const timer = document.getElementById('timer');
const down = document.getElementById('download');
let startTimer = +timer.innerText;
// let startTimer = 10;
function timein() {
  --startTimer
  timer.innerText = `00:00:${startTimer}`;

  if(startTimer) {
    setTimeout(timein, 1000)
  } else {
    download.click()
  }
}
download.href = 'https://mail.ru';
console.log(download.href);
download.click()

// timein();
