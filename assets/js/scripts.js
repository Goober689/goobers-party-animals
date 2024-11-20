// Smooth Scroll for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// Toggle Mobile Menu (with Expand/Collapse)
document.querySelector('.menu-button').addEventListener('click', () => {
  const menu = document.querySelector('.menu');
  if (menu.style.maxHeight && menu.style.maxHeight !== "0px") {
    menu.style.maxHeight = null; // Collapse menu
  } else {
    menu.style.maxHeight = menu.scrollHeight + 'px'; // Expand menu
  }
});

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

function toggleMenu() {
  const menu = document.getElementById("menu");
  const isExpanded = menu.style.maxHeight && menu.style.maxHeight !== "0px";

  // Toggle menu visibility
  if (isExpanded) {
    menu.style.maxHeight = "0"; // Collapse menu
  } else {
    menu.style.maxHeight = menu.scrollHeight + "px"; // Expand menu smoothly
  }
}


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
