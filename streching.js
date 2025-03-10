document.addEventListener("DOMContentLoaded", function() {
  let images = document.querySelectorAll(".image-column img");
  let index = 0;
  
  setInterval(() => {
      images.forEach(img => img.style.opacity = "0");
      images[index].style.opacity = "1";
      index = (index + 1) % images.length;
  }, 3000); // Rotates images every 3 seconds
});






// colapse
function expandImage(img) {
  img.classList.add("expanded");
}

function shrinkImage(img) {
  img.classList.remove("expanded");
}

// slider activite
let image = document.querySelectorAll('.carousel-wrapper img');
let currentIndex = 0;

function changeImage() {
    image[currentIndex].classList.remove('current');
    currentIndex = (currentIndex + 1) % image.length;
    image[currentIndex].classList.add('current');
}

setInterval(changeImage, 3000);
// navbar
function toggleMenu() {
  document.getElementById("sidebar").classList.toggle("active");
}
