// Smooth scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Toggle an active class on navbar items
const navItems = document.querySelectorAll(".nav-item");
navItems.forEach((item) => {
  item.addEventListener("click", () => {
    navItems.forEach((el) => el.classList.remove("active"));
    item.classList.add("active");
  });
});

// Handle form submission for a contact form
const form = document.getElementById("contact-form");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  // Perform AJAX form submission here if needed
  console.log("Form submitted!");
});

// Simple image carousel logic
const carousel = document.getElementById("imageCarousel");
const images = carousel.querySelectorAll("img");
let currentImageIdx = 0;

function showCurrentImage() {
  images.forEach((img, idx) => {
    img.style.display = currentImageIdx === idx ? "block" : "none";
  });
}

document.getElementById("carousel-prev").addEventListener("click", () => {
  currentImageIdx =
    currentImageIdx > 0 ? currentImageIdx - 1 : images.length - 1;
  showCurrentImage();
});

document.getElementById("carousel-next").addEventListener("click", () => {
  currentImageIdx =
    currentImageIdx < images.length - 1 ? currentImageIdx + 1 : 0;
  showCurrentImage();
});

document.addEventListener("DOMContentLoaded", (event) => {
  let currentImageIndex = 0;
  const images = document.querySelectorAll(".reservation-images img");
  const totalImages = images.length;

  function changeImage() {
    images[currentImageIndex].classList.remove("active");
    currentImageIndex = (currentImageIndex + 1) % totalImages;
    images[currentImageIndex].classList.add("active");
  }

  // Set an interval for changing the image
  setInterval(changeImage, 3000); // Change every 3 seconds

  // Initially activate the first image
  images[currentImageIndex].classList.add("active");
});
