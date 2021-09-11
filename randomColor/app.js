const colors = ['yellowgreen', 'skyblue', 'pink', 'orange', 'violet']
const btn = document.querySelector('.btn')
const color = document.querySelector('.color')
const main = document.querySelector('.main')

btn.addEventListener('click', () => {
  const randomNum = getRandomNum()
  main.style.backgroundColor = colors[randomNum]
  color.textContent = colors[randomNum]
})

const getRandomNum = () => {
  return Math.floor(Math.random() * colors.length)
}
