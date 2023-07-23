let contr = [...document.querySelectorAll('.book__control')];
let book = document.getElementById('book');
const obj = {
  'textColor': 'book_color',
  'bgColor': 'book_bg',
  'size': 'book_fs'
};

contr.forEach((item, i) => {                          // вешаем слеж на дивы в которых кнопки
  item.addEventListener('click', function (e) {
    e.preventDefault()                                // отмена срабатывания на ссылку
    let butList = [...this.querySelectorAll('a')];    // получаем массив тегов, по одному из которых кликнули
    let actStatus = butList[0].classList[0];          // получаем первый класс первого эл
    if(e.target.tagName !== 'A') {                    // проверяем, что нажали точно на тег а
      return
    }
    butList.forEach((item, i) => {                    //перебираем ссылки а среди нажатых
      if(item.className.indexOf('active') > 0) {      // если среди классов есть класс эктив
        item.classList.remove(`${actStatus}_active`)   // убираем этот статус
      }
    });
    e.target.classList.add(`${actStatus}_active`)      // добавляем статус актив на наж тег а
    if(!e.target.getAttribute('data-size') && e.target.classList.contains('font-size')) {
      book.classList.forEach((item, i) => {            // проверяем, что нажата кнопка фонт средний, у него нет датасета
        if(item.startsWith('book_fs')) {
          book.classList.remove(`${book.classList[i]}`)  // если нажат средний шрифт, просто убираем класс шрифта
        }
      });
    }
    for(i in e.target.dataset) {                     // перебираем датасеты в нажатом теге
      let data = e.target.dataset[i]                 // сохраняем значение датасета
      book.classList.forEach((item, ind) => {        // перебираем классы главного дива с ид бук
        if(item.startsWith(`${obj[i]}`)) {           // если класс начинается с соотв датасета(через объект)
          book.classList.remove(`${book.classList[ind]}`)  // убираем этот класс
        }
        book.classList.add(`${obj[i]}-${data}`)       // и добавляем новый класс из датасета
      });
    }
  })
});


// for delete
