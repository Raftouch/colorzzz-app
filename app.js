const cols = document.querySelectorAll('.col')

document.addEventListener('keydown', event => {
    if (event.code === 'Space') {
        setRandomColor()
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

const setTextColor = (text, color) => {
  const luminance = chroma(color).luminance()
  // 0 < luminance < 1
  text.style.color = luminance > 0.5 ? 'black' : 'white'
}

const setRandomColor = () => {
  cols.forEach((col) => {
    const header = col.querySelector('h2')
    const lock = col.querySelector('button')
    const color = generateRandomColor()
    // generateRandomColor() = chroma.random()

    header.textContent = color
    col.style.background = color

    setTextColor(header, color)
    setTextColor(lock, color)
  })
}

setRandomColor()
