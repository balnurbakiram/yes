document.addEventListener("DOMContentLoaded", function () {
  const acceptBtn = document.querySelector(".accept");
  const rejectBtn = document.querySelector(".reject");
  const cookieBanner = document.querySelector(".cookie-banner");

  acceptBtn.addEventListener("click", () => {
      cookieBanner.style.display = "none";
      localStorage.setItem("cookiesAccepted", "true");
  });

  rejectBtn.addEventListener("click", () => {
      cookieBanner.style.display = "none";
  });

  if (localStorage.getItem("cookiesAccepted")) {
      cookieBanner.style.display = "none";
  }
});

// baar

const images = [
    "https://i.pinimg.com/736x/90/49/46/90494614fd1e45c48a7470cb9b92870f.jpg",
    "https://i.pinimg.com/736x/d9/a5/fd/d9a5fd2f2c72d2fa9bc655c96ac50588.jpg",
    "https://i.pinimg.com/736x/41/cd/fd/41cdfd3ac25669271627a3352c0fb205.jpg"
  ];
  
  let index = 0;
  const loungeImg = document.getElementById("loungeImg");
  
  function changeImage() {
    loungeImg.style.opacity = 0;
    setTimeout(() => {
      index = (index + 1) % images.length;
      loungeImg.src = images[index];
      loungeImg.onload = () => {
        loungeImg.style.opacity = 1;
      };
    }, 500);
  }
  
  setInterval(changeImage, 3000);
// forma

const form = document.getElementById('contact-form');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const data = {
        name: document.getElementById('name').value,
        surname: document.getElementById('surname').value,
        email: document.getElementById('email').value,
        service: document.getElementById('service').value,
        location: document.getElementById('location').value
    };

    fetch('https://script.google.com/macros/s/AKfycbx04k2tlyvmYvvlqGL6nUxv8yci8b6IIaLZ9Q8Xw0_QMWwVJkjQbTwSpp4OldZMW8I/exec', {
    method: 'POST',
    mode: 'no-cors',
    body: JSON.stringify(data),
    headers: {
        'Content-Type': 'application/json'
    }
})
.then(response => response.text())
.then(result => {
    alert('Message sent successfully!');
    form.reset();
})
.catch(error => {
    alert('Error sending message. Please try again.');
    console.error('Error:', error);
});

});


