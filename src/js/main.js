const footerMailBorder = document.querySelector('[for="email"]')
const footerMobilBorder = document.querySelector('[for="phone"]')
const footerAdressBorder = document.querySelector('[for="adress"]')

function footerMailClick() {
  footerMobilBorder.classList.add('border')
  footerAdressBorder.classList.add('border')
}

function footerMobilClick() {
  footerMailBorder.classList.add('border')
  footerAdressBorder.classList.add('border')
}

function footerAdressClick() {
  footerMailBorder.classList.add('border')
  footerMobilBorder.classList.add('border')
}

document.addEventListener('DOMContentLoaded', () => {
  footerMailClick()
})

footerMailBorder.addEventListener('click', () => {
  footerMailClick()
})

footerMobilBorder.addEventListener('click', () => {
  footerMobilClick()
})

footerAdressBorder.addEventListener('click', () => {
  footerAdressClick()
})
