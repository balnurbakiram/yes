
    document.querySelectorAll('.main-image, .side-image, .side-image-2').forEach(img => {
        img.addEventListener('mouseover', () => {
            img.style.transform = 'scale(1.1) translateY(240px)';
            if (img.classList.contains('side-image')) img.style.transform = 'scale(1.1) translateY(30px)';
            if (img.classList.contains('side-image-2')) img.style.transform = 'scale(1.1)';
        });
        img.addEventListener('mouseleave', () => {
            img.style.transform = 'scale(1) translateY(240px)';
            if (img.classList.contains('side-image')) img.style.transform = 'scale(1) translateY(30px)';
            if (img.classList.contains('side-image-2')) img.style.transform = 'scale(1)';
        });
    });


  