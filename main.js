const nav = document.querySelector('#header nav')

/*Open and close menu*/
const toggle = document.querySelectorAll('nav .toggle')
for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

/*Close menu click */
const links = document.querySelectorAll('nav ul li a')
for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

/*Scroll */
const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
})

scrollReveal.reveal(
  `
#home .text, #home .image, 
#about .image, 
#services .header, #services .card,
#contact .text, #contact .links,
footer .brand, footer .social`,

  { interval: 100 }
)

/*Button to top*/
const backToTopButton = document.querySelector('.back-to-top')
function backToTop() {
  if (window.scrollY >= 500) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

/*Menu visible check*/
const sections = document.querySelectorAll('main section[id]')
function activateMenuAtCurrentSection() {
  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4

  for (const section of sections) {
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionId = section.getAttribute('id')

    const checkpointStart = checkpoint >= sectionTop
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight

    if (checkpointStart && checkpointEnd) {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.add('active')
    } else {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.remove('active')
    }
  }
}

window.addEventListener('scroll', function () {
  backToTop()
  activateMenuAtCurrentSection()
})
// Modal functionality
function initModals() {
  // Get all modal triggers
  const modalTriggers = document.querySelectorAll('[data-modal]');
  const modals = document.querySelectorAll('.modal');
  const closeButtons = document.querySelectorAll('.close-modal');
  
  // Open modal function
  function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.style.display = 'block';
      document.body.style.overflow = 'hidden'; // Prevent scrolling
    }
  }
  
  // Close modal function
  function closeModal(modal) {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto'; // Re-enable scrolling
  }
  
  // Add click event to modal triggers
  modalTriggers.forEach(trigger => {
    trigger.addEventListener('click', () => {
      const modalId = trigger.getAttribute('data-modal');
      openModal(modalId);
    });
  });
  
  // Add click event to close buttons
  closeButtons.forEach(button => {
    button.addEventListener('click', () => {
      const modal = button.closest('.modal');
      closeModal(modal);
    });
  });
  
  // Close modal when clicking outside
  modals.forEach(modal => {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeModal(modal);
      }
    });
  });
  
  // Close modal with Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      modals.forEach(modal => {
        if (modal.style.display === 'block') {
          closeModal(modal);
        }
      });
    }
  });
}

// Initialize modals when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  // ... existing code ...
  initModals();
  // ... existing code ...
});