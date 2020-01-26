const footerMailBorder = document.querySelector('[for="email"]')
const footerMobilBorder = document.querySelector('[for="phone"]')
const footerAdressBorder = document.querySelector('[for="adress"]')

function footerBorderAdd(borderone, bordertwo) {
  borderone.classList.add('border')
  bordertwo.classList.add('border')
}

document.addEventListener('DOMContentLoaded', () => {
  footerBorderAdd(footerMobilBorder, footerAdressBorder)
})

footerMailBorder.addEventListener('click', () => {
  footerBorderAdd(footerMobilBorder, footerAdressBorder)
})

footerMobilBorder.addEventListener('click', () => {
  footerBorderAdd(footerMailBorder, footerAdressBorder)
})

footerAdressBorder.addEventListener('click', () => {
  footerBorderAdd(footerMobilBorder, footerMailBorder)
})
