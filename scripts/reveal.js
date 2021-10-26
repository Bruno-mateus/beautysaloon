const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
})

scrollReveal.reveal(
  `
  #home .img-home, #home .content,
  #about .img-about, #about .content-about, 
  #services .presentation, #services .card,
  #testimonials h2,
 #info a, .info-2 .list-info




`,
  { interval: 100 }
)
