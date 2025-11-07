// KUNDOOR MARKAZ - MODERN WEBSITE INTERACTIONS

// ============================================
// 1. HEADER SCROLL BEHAVIOR
// ============================================
const header = document.querySelector('.header');
const scrollToTopBtn = document.querySelector('.scroll-to-top');

window.addEventListener('scroll', () => {
  // Add scrolled class to header
  if (window.scrollY > 50) {
    header?.classList.add('scrolled');
  } else {
    header?.classList.remove('scrolled');
  }
  
  // Show/hide scroll to top button
  if (window.scrollY > 300) {
    scrollToTopBtn?.classList.add('visible');
  } else {
    scrollToTopBtn?.classList.remove('visible');
  }
});

// ============================================
// 2. MOBILE MENU TOGGLE
// ============================================
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');
const body = document.body;

menuToggle?.addEventListener('click', () => {
  menuToggle.classList.toggle('active');
  navMenu?.classList.toggle('active');
  body.classList.toggle('no-scroll');
});

// Close menu when clicking on a link
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    menuToggle?.classList.remove('active');
    navMenu?.classList.remove('active');
    body.classList.remove('no-scroll');
  });
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
  if (!menuToggle?.contains(e.target) && !navMenu?.contains(e.target)) {
    menuToggle?.classList.remove('active');
    navMenu?.classList.remove('active');
    body.classList.remove('no-scroll');
  }
});

// ============================================
// 3. SMOOTH SCROLL TO TOP
// ============================================
scrollToTopBtn?.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// ============================================
// 4. ACTIVE NAV LINK HIGHLIGHTING
// ============================================
function setActiveNavLink() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');
  
  let currentSection = '';
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    
    if (window.scrollY >= sectionTop - 100) {
      currentSection = section.getAttribute('id');
    }
  });
  
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href')?.includes(currentSection)) {
      link.classList.add('active');
    }
  });
}

window.addEventListener('scroll', setActiveNavLink);

// ============================================
// 5. INTERSECTION OBSERVER FOR ANIMATIONS
// ============================================
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in-up');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe all elements with animation class
document.addEventListener('DOMContentLoaded', () => {
  const animatedElements = document.querySelectorAll('.animate-on-scroll');
  animatedElements.forEach(el => observer.observe(el));
});

// ============================================
// 6. FORM VALIDATION & SUBMISSION
// ============================================
const contactForm = document.querySelector('.contact-form');

contactForm?.addEventListener('submit', async (e) => {
  e.preventDefault();
  
  const formData = new FormData(contactForm);
  const data = Object.fromEntries(formData);
  
  // Basic validation
  if (!data.name || !data.email || !data.message) {
    showNotification('Please fill in all fields', 'error');
    return;
  }
  
  if (!isValidEmail(data.email)) {
    showNotification('Please enter a valid email address', 'error');
    return;
  }
  
  // Show loading state
  const submitBtn = contactForm.querySelector('button[type="submit"]');
  const originalText = submitBtn.textContent;
  submitBtn.textContent = 'Sending...';
  submitBtn.disabled = true;
  
  try {
    // Simulate form submission (replace with actual endpoint)
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    showNotification('Message sent successfully!', 'success');
    contactForm.reset();
  } catch (error) {
    showNotification('Failed to send message. Please try again.', 'error');
  } finally {
    submitBtn.textContent = originalText;
    submitBtn.disabled = false;
  }
});

// ============================================
// 7. UTILITY FUNCTIONS
// ============================================
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function showNotification(message, type = 'info') {
  const notification = document.createElement('div');
  notification.className = `notification notification-${type}`;
  notification.textContent = message;
  notification.style.cssText = `
    position: fixed;
    top: 100px;
    right: 20px;
    padding: 1rem 1.5rem;
    background-color: ${type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#3b82f6'};
    color: white;
    border-radius: 8px;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
    z-index: 9999;
    animation: slideIn 0.3s ease-out;
  `;
  
  document.body.appendChild(notification);
  
  setTimeout(() => {
    notification.style.animation = 'slideOut 0.3s ease-out';
    setTimeout(() => notification.remove(), 300);
  }, 3000);
}

// ============================================
// 8. LAZY LOADING IMAGES
// ============================================
if ('IntersectionObserver' in window) {
  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.classList.add('loaded');
        imageObserver.unobserve(img);
      }
    });
  });
  
  document.querySelectorAll('img[data-src]').forEach(img => {
    imageObserver.observe(img);
  });
}

// ============================================
// 9. GALLERY LIGHTBOX
// ============================================
const galleryItems = document.querySelectorAll('.gallery-item');

galleryItems.forEach(item => {
  item.addEventListener('click', () => {
    const imgSrc = item.querySelector('img')?.src;
    if (imgSrc) {
      openLightbox(imgSrc);
    }
  });
});

function openLightbox(imageSrc) {
  const lightbox = document.createElement('div');
  lightbox.className = 'lightbox';
  lightbox.innerHTML = `
    <div class="lightbox-content">
      <button class="lightbox-close">&times;</button>
      <img src="${imageSrc}" alt="Gallery Image">
    </div>
  `;
  
  lightbox.style.cssText = `
    position: fixed;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.9);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10000;
    animation: fadeIn 0.3s ease-out;
  `;
  
  const content = lightbox.querySelector('.lightbox-content');
  content.style.cssText = `
    position: relative;
    max-width: 90%;
    max-height: 90%;
  `;
  
  const closeBtn = lightbox.querySelector('.lightbox-close');
  closeBtn.style.cssText = `
    position: absolute;
    top: -40px;
    right: 0;
    font-size: 2rem;
    color: white;
    background: none;
    border: none;
    cursor: pointer;
    padding: 0.5rem;
  `;
  
  const img = lightbox.querySelector('img');
  img.style.cssText = `
    max-width: 100%;
    max-height: 90vh;
    border-radius: 8px;
  `;
  
  document.body.appendChild(lightbox);
  document.body.style.overflow = 'hidden';
  
  closeBtn.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
  });
  
  document.addEventListener('keydown', function escHandler(e) {
    if (e.key === 'Escape') {
      closeLightbox();
      document.removeEventListener('keydown', escHandler);
    }
  });
  
  function closeLightbox() {
    lightbox.style.animation = 'fadeOut 0.3s ease-out';
    setTimeout(() => {
      lightbox.remove();
      document.body.style.overflow = '';
    }, 300);
  }
}

// ============================================
// 10. PERFORMANCE OPTIMIZATION
// ============================================
// Debounce function for scroll events
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Apply debounce to scroll-heavy functions
window.addEventListener('scroll', debounce(setActiveNavLink, 100));

// ============================================
// 11. ADD CSS ANIMATIONS
// ============================================
const style = document.createElement('style');
style.textContent = `
  @keyframes slideIn {
    from {
      transform: translateX(100%);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
  
  @keyframes slideOut {
    from {
      transform: translateX(0);
      opacity: 1;
    }
    to {
      transform: translateX(100%);
      opacity: 0;
    }
  }
  
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  
  @keyframes fadeOut {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
  
  .no-scroll {
    overflow: hidden;
  }
`;
document.head.appendChild(style);

// ============================================
// 12. INITIALIZE ON DOM LOAD
// ============================================
document.addEventListener('DOMContentLoaded', () => {
  console.log('Kundoor Markaz Website Loaded Successfully');
  
  // Add animation classes to elements
  const sections = document.querySelectorAll('section');
  sections.forEach(section => {
    section.classList.add('animate-on-scroll');
  });
  
  // Set initial active nav link
  setActiveNavLink();
});
