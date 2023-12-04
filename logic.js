document.addEventListener("DOMContentLoaded", function () {
    const imageBoxes = document.querySelectorAll('.ImageBox');
  
    imageBoxes.forEach(function (box) {
      fetch('https://picsum.photos/200/300')
        .then(response => response.url)
        .then(imageUrl => {
          box.style.backgroundImage = `url(${imageUrl})`;
            box.addEventListener('click', function () {
            window.location.href = `showroom.html?imageUrl=${imageUrl}`;
          });
        })
        .catch(error => console.error('Oh oh AHH AHH Feil i KODEN:', error));
    });
  });
  