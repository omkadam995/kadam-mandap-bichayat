// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Contact form handling
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();
    
    // Get form data
    const name = this.querySelector('input[type="text"]').value;
    const email = this.querySelector('input[type="email"]').value;
    const message = this.querySelector('textarea').value;
    
    // Validate form
    if (!name || !email || !message) {
      alert('Please fill in all fields');
      return;
    }
    
    // Show success message
    alert(`Thank you ${name}! Your message has been received. We will contact you at ${email} soon.`);
    
    // Reset form
    this.reset();
  });
}

// Add scroll effect to navbar
window.addEventListener('scroll', function() {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 100) {
    navbar.style.boxShadow = '0 5px 20px rgba(0,0,0,0.2)';
  } else {
    navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
  }
});

// Add animation to service cards on scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.animation = 'slideInUp 0.6s ease forwards';
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

const serviceCards = document.querySelectorAll('.service-card');
serviceCards.forEach((card, index) => {
  card.style.opacity = '0';
  card.style.animationDelay = `${index * 0.1}s`;
  observer.observe(card);
});

console.log('Website initialized successfully!');
