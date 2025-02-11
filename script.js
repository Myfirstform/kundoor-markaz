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





document.addEventListener("DOMContentLoaded", function () {
  const images = ['pics/valyasthad-podium.jpg', 'pics/img1.jpeg','pics/img3.jpeg']; // Add your image URLs here
  let index = 0;
  const bgChanger = document.getElementById('main');

  function changeBackground() {
        bgChanger.style.setProperty("--bg-image", `linear-gradient(to top, rgba(0, 0, 0, 0.705) 50%, rgba(0, 0, 0, 0.705) 50%),url(${images[index]})`);
        bgChanger.classList.remove("active"); // Reset animation
        void bgChanger.offsetWidth; // Force reflow to restart animation
        bgChanger.classList.add("active"); // Reapply animation

        bgChanger.style.setProperty("--bg-image", `url(${images[index]})`);
        bgChanger.style.setProperty("background-image", `linear-gradient(to top, rgba(0, 0, 0, 0.705) 50%, rgba(0, 0, 0, 0.705) 50%),url(${images[index]})`);

        index = (index + 1) % images.length; // Loop images
    }

    setInterval(changeBackground, 5000); // Change every 4 seconds
    changeBackground(); // Initial call
});









