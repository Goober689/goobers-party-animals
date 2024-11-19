.hover-effect {
  transition: transform 0.2s ease;
}
.hover-effect:hover {
  transform: scale(1.1);
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

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
  const isExpanded = menu.style.display === "block";

  // Toggle the display of the menu
  if (isExpanded) {
    menu.style.display = "none";
    menu.style.maxHeight = "0"; // Collapse menu
  } else {
    menu.style.display = "block";
    menu.style.maxHeight = menu.scrollHeight + "px"; // Smooth expand
  }
}




document.querySelectorAll('.book-now').forEach(button => {
  button.addEventListener('click', () => {
    // Replace '#booking-section' with your booking form ID
    document.querySelector('#booking-section').scrollIntoView({ behavior: 'smooth' });
  });
});







document.querySelectorAll('.companion-card').forEach(card => {
  card.addEventListener('click', () => {
    card.querySelector('.card-inner').classList.toggle('flipped');
  });
});