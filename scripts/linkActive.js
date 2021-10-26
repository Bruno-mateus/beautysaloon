const sections = document.querySelectorAll(' main .section[id]')

function activeMenu() {
  const limitSection = window.pageYOffset + (window.innerHeight / 8) * 4

  for (const section of sections) {
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionId = section.getAttribute('id')

    const sectionStart = limitSection >= sectionTop

    const sectionEnd = limitSection <= sectionTop + sectionHeight

    if (sectionStart && sectionEnd) {
      document
        .querySelector(`nav ul li a[href*=${sectionId}]`)
        .classList.add('active')
    } else {
      document
        .querySelector(`nav ul li a[href*=${sectionId}]`)
        .classList.remove('active')
    }
  }
}

window.addEventListener('scroll', function () {
  activeMenu()
})
