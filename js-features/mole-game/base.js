let playing = true,
  activeHole = 1;

let start = () => {

  const stop = () => playing = true,
        time = prompt('сложность игры', 1000)
        getHole = index => document.getElementById(`hole${index}`),
        deactivateHole = index => getHole( index ).className = 'hole',
        activateHole = index => getHole( index ).className = 'hole hole_has-mole',
        next = () => setTimeout(() => {
          if ( !playing ) {
            return;
            }
          deactivateHole( activeHole );
          activeHole = Math.floor( 1 + Math.random() * 9 );
          activateHole( activeHole );
          next();
        }, time );

  next();
}

start()

function getHole(index) {
  return document.getElementById(`hole${index}`)
}
let count=0,
    missCount=0;

for(let i = 1; i < 10; i++) {
  getHole(i).addEventListener('click', ()=>{
    if (getHole(i).className.includes('hole_has-mole')) {
      count++
    } else {
      missCount++
    }
    document.getElementById('dead').textContent = count
    document.getElementById('lost').textContent = missCount
    if(count > 3) {
      document.getElementById('dead').textContent = 0;
      document.getElementById('lost').textContent = 0;
      alert('win');
      missCount = 0;
      count = 0;
      start()
    }
    if(missCount > 5) {
      document.getElementById('dead').textContent = 0;
      document.getElementById('lost').textContent = 0;
      alert('game over');
      missCount = 0;
      count = 0;
      start()
    }
  })

}
