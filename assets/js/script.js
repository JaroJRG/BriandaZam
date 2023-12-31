let thumbnails = Array.from(document.querySelectorAll(".thumbnail"));
let mainImage = document.querySelector(".main-image");
let lightboxContent = document.querySelector("#lightbox-content");
let lightbox = document.querySelector("#lightbox");
let closeButton = document.querySelector(".close-btn");

let currentIndex = 0;

function openImage(src) {
  lightbox.style.display = 'block';
  lightboxContent.src = src;
  lightboxContent.style.width = '60%';
  document.querySelector(".prev").style.display = "block";
  document.querySelector(".next").style.display = "block";
  currentIndex = thumbnails.findIndex(thumbnail => thumbnail.getAttribute('data-src') == src);
}

function closeImage() {
  lightbox.style.display = 'none';
  document.querySelector(".prev").style.display = "none";
  document.querySelector(".next").style.display = "none";
}

function nextImage(){
    currentIndex = (currentIndex + 1) % thumbnails.length;
    let nextThumbnail = thumbnails[currentIndex];
    openImage(nextThumbnail.getAttribute('data-src'));
}

function prevImage(){
    currentIndex = (currentIndex - 1 + thumbnails.length) % thumbnails.length;
    let prevThumbnail = thumbnails[currentIndex];
    openImage(prevThumbnail.getAttribute('data-src'));
}

window.onload = function() {
    let firstThumbnail = thumbnails[0];
    mainImage.src = firstThumbnail.getAttribute('data-src');
    document.getElementById('mainImage').addEventListener('click', function() {
      openImage(this.src);
  });
}

document.getElementById('lightbox').addEventListener('click', function(event) {
  if(event.target == this || event.target == closeButton) closeImage();
});

document.addEventListener('keydown', function(event) {
  switch(event.keyCode) {
      case 37: // si se oprime flecha izquierda
          prevImage();
          break;
      case 39: // si se oprime flecha derecha
          nextImage();
          break;
      case 27: // si se oprime 'esc'
          closeImage();
          break;
  }
});
