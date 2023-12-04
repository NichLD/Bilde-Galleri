document.addEventListener("DOMContentLoaded", function () {
    const fullImage = document.getElementById('fullImage');
    const imageName = document.querySelector('.ImageName');
    const BackButton = document.querySelector('.Back')

    const urlParams = new URLSearchParams(window.location.search);
    const imageUrl = urlParams.get('imageUrl');
    fullImage.src = imageUrl;

    function generateRandomName() {
        const names = ['Ape', 'LOL', 'Blomst', 'Solen', 'AHHH', 'Hakke ett navn', 'Misslykke', 'LLL'];
        const randomIndex = Math.floor(Math.random() * names.length);
        return names[randomIndex];
    }

    imageName.textContent = generateRandomName();

    BackButton.addEventListener('click', function () {
        window.location.href = `index.html`;
      });
  });
  