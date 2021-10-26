const nav = document.querySelector('.nav')

const closeNav = document.querySelector('.closeNav')

const showNav = document.querySelector('.menu-mobile')

const arrowToUp = document.querySelector('.up-arrow')

const toggleNav = {
  execute() {
    this.moveToUp()

    showNav.addEventListener('click', () => {
      this.scrollNav()
      this.show()
    })

    closeNav.addEventListener('click', () => {
      this.close()
    })
  },
  show() {
    nav.classList.add('show')
    document.querySelector('body').style.overflow = 'hidden'
  },
  close() {
    nav.classList.remove('show')
    document.querySelector('.header').style.display = 'flex'
    document.querySelector('body').style.overflow = 'visible'
  },
  navLink() {
    this.close()
  },
  scrollNav() {
    const navs = document.querySelectorAll('.navegation')

    navs.forEach(nav =>
      nav.addEventListener('click', () => {
        toggleNav.close()
      })
    )
  },
  moveToUp() {
    window.addEventListener('scroll', () => {
      window.scrollY >= 560
        ? arrowToUp.classList.add('show')
        : arrowToUp.classList.remove('show')
    })
  }
}

toggleNav.execute()
