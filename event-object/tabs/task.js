const tabs = document.getElementById('tabs1');
const tab = [...tabs.querySelectorAll('.tab')];
const tabContent = [...tabs.querySelectorAll('.tab__content')];

let ind = 0;
function findIndex() {
  tab.forEach((item, i) => {
    if([...item.classList].indexOf('tab_active') > 0) {
      ind = i
    }
  });
}

for(let item in tab) {
  tab[item].addEventListener('click', (e) => {
    findIndex()
    if(ind === item) {
      return
    }
    tabContent[ind].classList.remove('tab__content_active')
    tab[ind].classList.remove('tab_active')
    tabContent[item].classList.add('tab__content_active')
    tab[item].classList.add('tab_active')
  })
}



// console.log(ind)

// let n = tab.map(i => [...i.classList])
// for(let a in n) {
//   if(n[a].indexOf('tab_active') > 0) {
//     console.log(a)
//   }
// }
//
// for(let item in tab) {
//   tab[item].addEventListener('click', (e) => {
//     console.log(e.target.classList)
//   })
// }
