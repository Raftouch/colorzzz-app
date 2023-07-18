const cols = document.querySelectorAll('.col')

document.addEventListener('keydown', (event) => {
  event.preventDefault()
  if (event.code === 'Space') {
    setRandomColor()
  }
})

document.addEventListener('click', (event) => {
  const type = event.target.dataset.type

  if (type === 'lock') {
    event.target.classList.toggle('fa-lock-open')
    event.target.classList.toggle('fa-lock')
  } else if (type === 'copy') {
    copyColorCodeToClickboard(event.target.textContent)
  }
})

const generateRandomColor = () => {
  const colorCode = '0123456789ABCDEF'
  let bgcolor = ''

  for (let i = 0; i < 6; i++) {
    bgcolor += colorCode[Math.floor(Math.random() * colorCode.length)]
  }
  return '#' + bgcolor
}

const copyColorCodeToClickboard = (text) => {
  return navigator.clipboard.writeText(text)
}

const setTextColor = (text, color) => {
  const luminance = chroma(color).luminance()
  // 0 < luminance < 1
  text.style.color = luminance > 0.5 ? 'black' : 'white'
}

const setRandomColor = () => {
  cols.forEach((col) => {
    const isLocked = col.querySelector('i').classList.contains('fa-lock')

    const header = col.querySelector('h2')
    const lock = col.querySelector('button')
    const color = generateRandomColor()
    // generateRandomColor() = chroma.random()

    if (isLocked) {
      return
    }

    header.textContent = color
    col.style.background = color

    setTextColor(header, color)
    setTextColor(lock, color)
  })
}

setRandomColor()
