let count = 0

const value = document.querySelector('.value')
const buttons = document.querySelectorAll('.btn')

const increase = document.querySelector('.increase')
const reset = document.querySelector('.reset')
const decrease = document.querySelector('.decrease')

buttons.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    console.log(e.currentTarget.classList)
    const values = e.currentTarget.classList

    if (values.contains('increase')) {
      count++
    } else if (values.contains('decrease')) {
      count--
    } else {
      count = 0
    }
    count > 0
      ? (value.style.color = 'pink')
      : count === 0
      ? (value.style.color = 'black')
      : (value.style.color = 'skyblue')
    value.textContent = count
  })
})

// increase.addEventListener('click', () => {
//   counter = counter + 1
//   value = counter
// })
