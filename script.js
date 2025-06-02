document.querySelectorAll('.nav-links').forEach((link) => {
  link.addEventListener('click', function (e) {
    const href = this.getAttribute('href')

    // Ignore links without a proper target (like # or empty)
    if (href === '#' || !href.startsWith('#')) return

    e.preventDefault() // Prevent instant jump
    const targetId = href.substring(1)
    const target = document.getElementById(targetId)

    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
  })
})

const cardBox = document.getElementById('cardBox')
const sealButton = cardBox.querySelector('.seal')

// For mobile: toggle 'group' class on tap
sealButton.addEventListener('click', function () {
  cardBox.classList.add('force-hover')

  // Remove after some time if needed
  setTimeout(() => {
    cardBox.classList.remove('force-hover')
  }, 4000) // optional: remove after 4 seconds
})
