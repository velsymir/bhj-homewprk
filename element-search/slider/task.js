let arrows = [...document.querySelectorAll('.slider__arrow')];
let slides = [...document.querySelectorAll('.slider__item')];
let dots = [...document.querySelectorAll('.slider__dot')];
let num = 0;
for (let arrow in arrows) {
  arrows[arrow].onclick = () => {
    let arr1 = +arrow || +0;

    actionSlide(slides)
    slides[num].classList.remove('slider__item_active')
    dots[num].classList.remove('slider__dot_active')
    numActive(arr1)
    slides[num].classList.add('slider__item_active')
    dots[num].classList.add('slider__dot_active')
  }
}

for(let dot in dots) {
  dots[dot].onclick = () => {
    actionSlide(dots)
    slides[num].classList.remove('slider__item_active')
    dots[num].classList.remove('slider__dot_active')
    num = dot
    slides[num].classList.add('slider__item_active')
    dots[num].classList.add('slider__dot_active')
  }
}

function actionSlide(arr) {
  for(let i = 0 ; i < arr.length ; i++) {
    if(arr[i].className.includes('slider__item_active')) {
      num = i
    }
  }
  return num
}

function numActive(dir) {
    if(dir) {
      if(num === slides.length - 1) {
        num = 0
      } else {
        num++
      }
  } else {
    if(!num) {
      num = slides.length - 1
    } else {
      num--
    }
  }
  return num
}
