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
  const menu = document.getElementById("mobileMenu");
  if (menu.style.display === "none" || menu.style.display === "") {
    menu.style.display = "block"; // Show the menu
  } else {
    menu.style.display = "none"; // Hide the menu
  }
}

