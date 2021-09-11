const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']
const btn = document.querySelector('.btn')
const color = document.querySelector('.color')
const main = document.querySelector('.main')

btn.addEventListener('click', () => {
  let randomColor = '#'
  for (let i = 0; i < 6; i++) {
    randomColor += hex[getRandomStr()]
  }
  // console.log(randomColor)

  color.textcontent = randomColor
  main.style.backgroundColor = randomColor
})

const getRandomStr = () => {
  return Math.floor(Math.random() * hex.length)
}
