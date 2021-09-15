const navToggle = document.querySelector('.nav-toggle')
const links = document.querySelector('.links')

navToggle.addEventListener('click', () => {
  console.log('click')
  links.classList.toggle('show-links')
})
