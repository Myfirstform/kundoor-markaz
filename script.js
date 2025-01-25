document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector("#check");
    const body = document.body;

    menuToggle.addEventListener("change", function () {
        if (menuToggle.checked) {
            body.classList.add("no-scroll"); // Disable scrolling when menu is open
        } else {
            body.classList.remove("no-scroll"); // Re-enable scrolling when menu is closed
        }
    });
});









        window.onscroll = function() {scrollFunction()};

        function scrollFunction() {
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                document.getElementsByClassName("up-btn").style.display = "block";
            } else {
                document.getElementsByClassName("up-btn").style.display = "none";
            }
        }

        // Scroll to the top when the button is clicked
        function scrollToTop() {
            document.body.scrollTop = 0; // For Safari
            document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
        }


        

        function toggleImages() {
    const imageContainer = document.getElementById('imageContainer50');
    const button = document.getElementById('toggleButton');

    // Toggle visibility
    if (imageContainer.style.display === "none" || imageContainer.style.display === "") {
        imageContainer.style.display = "flex"; // Show the images
        button.imgContent = "linkbtn"; // Change button text
    } else {
        imageContainer.style.display = "none"; // Hide the images
        button.imgContent = "linkbtn"; // Change button text back
    }
}




//animated section


    document.addEventListener("DOMContentLoaded", () => {
        const animatedElements = document.querySelectorAll(".animated-text");

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                }
            });
        });

        animatedElements.forEach((el) => observer.observe(el));
    });



    
// Apply the animation to all text elements
window.addEventListener('scroll', () => {
    const textElements = document.querySelectorAll('.text-animate');
    textElements.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 50) {
        el.classList.add('active');
      }
    });
  });
  
  // Automatically add the class to every text element
  document.querySelectorAll('h1, h2, h3, h4, h5, h6, p, span').forEach(el => {
    el.classList.add('text-animate');
  });
  


  // Select the main section
const mainSection = document.querySelector(".main");

let lastScrollPosition = 0;

// Function to update background size and gradient
function updateBackground() {
    // Calculate scroll position
    const scrollPosition = window.scrollY;

    // Get the current viewport width
    const viewportWidth = window.innerWidth;

    // Adjust zoom rate based on screen width
    const zoomRate = viewportWidth <= 480 ? 50 : (viewportWidth <= 768 ? 20 : 10);
    const newSize = 100 + scrollPosition / zoomRate; // Adjust zoom speed based on screen size
    const maxSize = 200; // Limit to 200%
    const adjustedSize = Math.min(newSize, maxSize);

    // Calculate gradient opacity
    const gradientOpacity = Math.min(0.5 + scrollPosition / 2000, 0.8);

    // Apply new styles
    mainSection.style.backgroundSize = `${adjustedSize}%`;
    mainSection.style.background = `
        linear-gradient(to top, rgba(0, 0, 0, ${gradientOpacity}) 50%, rgba(0, 0, 0, ${gradientOpacity - 0.1}) 50%),
        url('pics/valyasthad podium.jpg') no-repeat center center
    `;
}

// Throttle or debounce scroll event for better performance
window.addEventListener("scroll", () => {
    // Use requestAnimationFrame for smoother updates
    if (Math.abs(window.scrollY - lastScrollPosition) > 5) {
        lastScrollPosition = window.scrollY;
        requestAnimationFrame(updateBackground);
    }
});





//hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh

let slideIndex = 0;
let timer;

// Function to show slides
function showSlides() {
  const slides = document.getElementsByClassName("mySlides");
  const dots = document.getElementsByClassName("dot");

  // Hide all slides
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // Remove active class from dots
  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1; } // Loop back to the first slide

  // Display the current slide
  slides[slideIndex - 1].style.display = "flex"; // Flex layout for three images
  dots[slideIndex - 1].className += " active";

  timer = setTimeout(showSlides, 3000); // Change slide every 3 seconds
}

// Manual controls
function plusSlides(n) {
  clearTimeout(timer); // Stop the auto slideshow
  slideIndex += n - 1; // Adjust index
  showSlides();        // Show next or previous slide
}

function currentSlide(n) {
  clearTimeout(timer); // Stop the auto slideshow
  slideIndex = n - 1;  // Set the specific slide
  showSlides();
}

// Start the slideshow on page load
document.addEventListener("DOMContentLoaded", () => {
  showSlides();
});









