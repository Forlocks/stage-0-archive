const urlRandom = `https://api.unsplash.com/photos/random?orientation=landscape&count=4&client_id=e8QZp6f2Lk9mOHncFAkhzRrOCZTXrA--tGDPONW-fe8`;
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const deleteButton = document.getElementById('delete-button');
const arrImages = document.querySelectorAll('.image');
const closeButton = document.getElementById('close-button');

async function getRandomImages() {
  try {
    const response = await fetch(urlRandom);
    const data = await response.json();

    for (let i = 0; i < arrImages.length; i++) {
      arrImages[i].src = data[i].urls.regular;
    }

    document.querySelector('.image-box').style.display = 'flex';
    document.getElementById('error-icon').style.display = 'none';
    document.querySelector('.error').style.display = 'none';

    console.log(response);
    console.log(data);
  } catch(error) {
    document.querySelector('.image-box').style.display = 'none';
    document.getElementById('error-icon').style.display = 'block';
    document.querySelector('.error').style.display = 'block';

    console.log(error);
  }
}

async function getQueryImages(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();

    for (let i = 0; i < arrImages.length; i++) {
      arrImages[i].src = data.results[i].urls.regular;
    }

    document.querySelector('.image-box').style.display = 'flex';
    document.getElementById('error-icon').style.display = 'none';
    document.querySelector('.error').style.display = 'none';

    console.log(response);
    console.log(data);
  } catch(error) {
    document.querySelector('.image-box').style.display = 'none';
    document.getElementById('error-icon').style.display = 'block';
    document.querySelector('.error').style.display = 'block';

    console.log(error);
  }
}

getRandomImages();

deleteButton.addEventListener('click', function() {
  searchInput.value = '';
  deleteButton.style.display = 'none';
});

searchButton.addEventListener('click', function() {
  getQueryImages(`https://api.unsplash.com/search/photos?orientation=landscape&query=${searchInput.value}&count=4&client_id=e8QZp6f2Lk9mOHncFAkhzRrOCZTXrA--tGDPONW-fe8`);
});

searchInput.addEventListener('keyup', function(event) {
  if (event.code == 'Enter') {
    getQueryImages(`https://api.unsplash.com/search/photos?orientation=landscape&query=${searchInput.value}&count=4&client_id=e8QZp6f2Lk9mOHncFAkhzRrOCZTXrA--tGDPONW-fe8`);
  }
});

searchInput.addEventListener('input', function() {
  if (searchInput.value == '') {
    deleteButton.style.display = 'none';
    return;
  } else {
    deleteButton.style.display = 'block';
  }
});

for (let i = 0; i < arrImages.length; i++) {
  arrImages[i].addEventListener('click', function() {
    let imageOpen = arrImages[i].cloneNode();

    document.querySelector('body').append( imageOpen );
    imageOpen.classList.remove('image');
    imageOpen.classList.add('image-open');

    document.querySelector('header').classList.add('black');
    document.querySelector('main').classList.add('black');
    document.querySelector('footer').classList.add('black');

    document.addEventListener('mouseup', function(event) {
      if (!imageOpen.contains(event.target)) {
        imageOpen.remove();

        document.querySelector('header').classList.remove('black');
        document.querySelector('main').classList.remove('black');
        document.querySelector('footer').classList.remove('black');
      }
    });
  });
}