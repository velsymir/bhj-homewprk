const rotator = [...document.querySelectorAll('.rotator')]
rotator.forEach((item) => {
  let adv = item.querySelectorAll('.rotator__case')
  let index = 0;
  let b = 1000;
  let interval = setTimeout(function timer() {
    adv[index].classList.remove('rotator__case_active')
    if(index === adv.length - 1) {
      index = 0;
    } else {
      index++;
    }
    console.log(index)
    b = adv[index].dataset.speed;
    adv[index].classList.add('rotator__case_active');
    adv[index].style.color = adv[index].dataset.color;
    interval = setTimeout(timer, +b)
  }, 1000)
});


// let index = 0;
// let b = 1000;
// let interval = setTimeout(function bbb() {
//   rotator[index].classList.remove('rotator__case_active')
//   if(index === rotator.length - 1) {
//     index = 0
//   } else {
//     index++
//   }
//   b = rotator[index].dataset.speed
//   rotator[index].classList.add('rotator__case_active')
//   rotator[index].style.color = rotator[index].dataset.color
//   interval = setTimeout(bbb, +b)
// }, b)
