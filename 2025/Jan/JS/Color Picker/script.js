let place = document.querySelector('#place')
let button = document.querySelector('#changeColor')
let body = document.querySelector('#body')

function render(color){
 return place.innerHTML = `#${color}`
}

button.onclick = function () {
  console.log('click')
  let color = Math.floor(Math.random()*16777215).toString(16).padStart(6,'0')
  console.log(color)
  body.style.backgroundColor = '#'+color
  render(color)
  console.log(body.style.backgroundColor)
}
