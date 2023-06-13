function getHole(index) {
  return document.getElementById(`hole${index}`)
}
let count=0,
    missCount=0;

for(let i = 1; i < 10; i++) {
  getHole(i).addEventListener('click', ()=>{
    if (getHole(i).className.includes('hole_has-mole')) {
      count++
      document.getElementById('dead').textContent = count
      if(count === 5) {
        alert('win')
        count = 0;
        missCount = 0;
        document.getElementById('dead').textContent = 0
        document.getElementById('lost').textContent = 0
      }
    } else {
      missCount++

      document.getElementById('lost').textContent = missCount
      if(missCount === 5) {
        alert('loose')
        count = 0;
        missCount = 0;
        document.getElementById('dead').textContent = 0
        document.getElementById('lost').textContent = 0
      }
    }
  })
}
