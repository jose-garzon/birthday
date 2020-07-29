const present = document.querySelector('.present-container')
const planeImg = document.querySelector('.plane-img')
const mainParragraph = document.querySelector('.main-paragraph')
const corea = document.querySelector('.corea')
const button = document.querySelector('.button')

present.addEventListener('click', () => {
  present.classList.add('hide-present')
  planeImg.classList.add('show-img')
  mainParragraph.innerHTML = 'Te has ganado un fabuloso viaje al lugar de tus sueños'
  corea.classList.add('show-item')
  button.classList.add('show-item')
})