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

// Initialize Swiper for Hero Slider
const heroSwiper = new Swiper('.hero-slider', {
  loop: true, // Enables infinite loop
  autoplay: {
    delay: 5000, // Auto-slide interval in milliseconds
    disableOnInteraction: false, // Auto-slide will not disable after user interactions
  },
  navigation: {
    nextEl: '.hero-slider .swiper-button-next',
    prevEl: '.hero-slider .swiper-button-prev',
  },
  pagination: {
    el: '.hero-slider .swiper-pagination',
    clickable: true, // Makes pagination bullets clickable
  },
  effect: 'slide', // Transition effect between slides
  speed: 1000, // Transition speed in milliseconds
});

// Update Navigation Thumbnails for Hero Slider
function updateHeroNavigationThumbnails() {
  const totalSlides = heroSwiper.slides.length - heroSwiper.loopedSlides * 2;
  const currentIndex = heroSwiper.realIndex;

  const prevIndex = (currentIndex - 1 + totalSlides) % totalSlides;
  const nextIndex = (currentIndex + 1) % totalSlides;

  const slides = heroSwiper.slides;

  // Extract background images
  const prevSlideBg = slides[prevIndex + heroSwiper.loopedSlides].style.backgroundImage.slice(5, -2);
  const nextSlideBg = slides[nextIndex + heroSwiper.loopedSlides].style.backgroundImage.slice(5, -2);

  document.querySelector('.hero-slider .swiper-button-prev img').src = prevSlideBg;
  document.querySelector('.hero-slider .swiper-button-next img').src = nextSlideBg;
}

// Initial update of hero navigation thumbnails
updateHeroNavigationThumbnails();

// Update thumbnails on slide change for hero slider
heroSwiper.on('slideChange', updateHeroNavigationThumbnails);

// Initialize Swiper for Other Carousel
const otherSwiper = new Swiper('.other-carousel', {
  loop: true,
  navigation: {
    nextEl: '.other-carousel .swiper-button-next',
    prevEl: '.other-carousel .swiper-button-prev',
  },
  pagination: {
    el: '.other-carousel .swiper-pagination',
    clickable: true,
  },
  effect: 'slide',
  speed: 500,
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


// Example: If your images are named image1.jpg, image2.jpg, ... image322.jpg
// This generates an array of all those image paths.
const imageUrls = [];
for (let i = 1; i <= 322; i++) {
    imageUrls.push(`assets/images/gallery/image${i}.jpg`);
}

const imageGrid = document.getElementById('imageGrid');
let currentIndex = 0;
const batchSize = 20; // Number of images to load at a time

function loadMoreImages() {
    const endIndex = currentIndex + batchSize;
    const batch = imageUrls.slice(currentIndex, endIndex);

    batch.forEach((src) => {
        const img = document.createElement('img');
        img.src = src;
        img.alt = 'Image'; // Add alt text for accessibility
        imageGrid.appendChild(img);
    });

    currentIndex = endIndex;
}

// Infinite scroll listener
window.addEventListener('scroll', () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100) {
        // Load more images when user reaches the bottom, if available
        if (currentIndex < imageUrls.length) {
            loadMoreImages();
        }
    }
});

// Initial load
loadMoreImages();




// DONATIONS
const message = document.querySelector('.donations-message');
setInterval(() => {
  message.classList.toggle('highlight');
}, 3000);

