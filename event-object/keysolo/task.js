class Game {
  constructor(container) {
    this.container = container;
    this.wordElement = container.querySelector('.word');
    this.winsElement = container.querySelector('.status__wins');
    this.lossElement = container.querySelector('.status__loss');

    this.reset();

    this.registerEvents();
  }

  reset() {
    this.setNewWord();
    this.winsElement.textContent = 0;
    this.lossElement.textContent = 0;
  }


  registerEvents() {

    /*
      TODO:
      Написать обработчик события, который откликается
      на каждый введённый символ.
      В случае правильного ввода слова вызываем this.success()
      При неправильном вводе символа - this.fail();
     */
     document.addEventListener('keydown', (event) => {
       if(event.key.toLowerCase() === this.currentSymbol.innerHTML.toLowerCase()) {
         this.success()
       } else {
         this.fail()
       }
     })
  }


  success() {
    this.currentSymbol.classList.add('symbol_correct');
    this.currentSymbol = this.currentSymbol.nextElementSibling;
    if (this.currentSymbol !== null) {
      return;
    }

    if (++this.winsElement.textContent === 10) {
      alert('Победа!');
      this.reset();
    }
    this.setNewWord();
  }

  fail() {
    if (++this.lossElement.textContent === 5) {
      alert('Вы проиграли!');
      this.reset();
    }
    this.setNewWord();
  }

  setNewWord() {
    const word = this.getWord();

    this.renderWord(word);
  }

  getWord() {
    const words = [
        'bob',
        'awesome',
        'netology',
        'hello',
        'kitty',
        'rock',
        'youtube',
        'popcorn',
        'cinema',
        'love',
        'javascript'
      ],
      index = Math.floor(Math.random() * words.length);

    return words[index];
  }

  renderWord(word) {
    const html = [...word]
      .map(
        (s, i) =>
          `<span class="symbol ${i === 0 ? 'symbol_current': ''}">${s}</span>`
      )
      .join('');
    this.wordElement.innerHTML = html;

    this.currentSymbol = this.wordElement.querySelector('.symbol_current');
  }
}

new Game(document.getElementById('game'))
// let key = document.querySelector('.status__time')
//
// let b = 1;
// let c = prompt('Time')
// let timer = setTimeout(function delay() {
//   key.innerHTML = b;
//   b++;
//   if(b > c) {
//     clearTimeout(timer)
//     key.innerHTML = 'stop'
//   } else {
//     timer = setTimeout(delay, 1000)
//   }
// }, 1000);





// const time = document.querySelector('.status__time')
// console.log(time)
// let m = setTimeout(() => {
//   time.innerHTML = `<span>время вышло</span>`
// }, 2000)
//
// document.addEventListener('keydown', (e) => {
//   console.log(e)
// })
