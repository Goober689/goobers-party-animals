// Smooth Scroll for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// Attach the event listener to the button
document.querySelector('.menu-button').addEventListener('click', toggleMenu);

function toggleMenu() {
  const menu = document.getElementById("menu");
  const isExpanded = menu.style.maxHeight && menu.style.maxHeight !== "0px";

  // Toggle menu visibility
  if (isExpanded) {
    menu.style.maxHeight = "0px"; // Collapse menu
  } else {
    menu.style.maxHeight = menu.scrollHeight + "px"; // Expand menu smoothly
  }
}


// Carousel Navigation (Next and Previous Buttons)
const images = [
  "assets/images/sample1.jpg",
  "assets/images/sample2.jpg",
  "assets/images/sample3.jpg"
];
let currentIndex = 0;

document.getElementById("next").addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % images.length;
  document.getElementById("carousel-image").src = images[currentIndex];
});

document.getElementById("prev").addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  document.getElementById("carousel-image").src = images[currentIndex];
});





// Smooth Scroll to Booking Section
document.querySelectorAll('.book-now').forEach(button => {
  button.addEventListener('click', () => {
    // Replace '#booking-section' with your booking form ID
    document.querySelector('#booking-section').scrollIntoView({ behavior: 'smooth' });
  });
});

// Flip Companion Cards
document.querySelectorAll('.companion-card').forEach(card => {
  card.addEventListener('click', () => {
    card.querySelector('.card-inner').classList.toggle('flipped');
  });
});


/*const bannerSlider = document.querySelector('.banner-slider');
let currentSlide = 0;

function showNextSlide() {
  const totalSlides = document.querySelectorAll('.slide').length;
  currentSlide = (currentSlide + 1) % totalSlides;
  bannerSlider.style.transform = `translateX(-${currentSlide * 100}%)`;
}

// Change slides every 5 seconds
setInterval(showNextSlide, 5000);