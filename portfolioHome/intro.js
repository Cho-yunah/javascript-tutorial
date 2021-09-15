const portfolioItems = [
  {
    id: 1,
    name: 'Yuna Cho',
    job: 'Developer',
    img: './Yuna.jpeg',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quas quaerat ipsum aperiam officia. Nesciunt dolor consectetur assumenda tempore ducimus vel eos labore, pariatur, rem consequatur facilis nihil? Numquam, maxime?',
  },
  {
    id: 2,
    name: 'Pungdung application',
    job: 'react native',
    img: './Yuna.jpeg',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum quibusdam nihil temporibus a, minus hic rem quis, qui, corrupti quos repellat magni ex dolorum repellendus.',
  },
]

const img = document.getElementById('person-img')
const writer = document.getElementById('writer')
const job = document.getElementById('job')
const info = document.getElementById('info')

const prevBtn = document.querySelector('.prev-btn')
const nextBtn = document.querySelector('.next-btn')
const randomBtn = document.querySelector('.random-btn')

let currentItem = 0

window.addEventListener('DOMContentLoaded', function () {
  showPortfolio(currentItem)
})

function showPortfolio() {
  let item = portfolioItems[currentItem]
  // img.src = item.img
  writer.textContent = item.name
  job.textContent = item.job
  info.textContent = item.text
}

nextBtn.addEventListener('click', function () {
  currentItem++
  if (currentItem > portfolioItems.length - 1) currentItem = 0
  showPortfolio()
})
prevBtn.addEventListener('click', function () {
  currentItem--
  if (currentItem < 0) {
    currentItem = portfolioItems.length - 1
  }
  showPortfolio()
})

randomBtn.addEventListener('click', function () {
  currentItem = Math.floor(Math.random() * portfolioItems.length)
  console.log(currentItem)
  showPortfolio()
})
