document.addEventListener("DOMContentLoaded", function () {
  const gallery = document.querySelector(".thumbnail-container");
  const prevButton = document.querySelector(".prev");
  const nextButton = document.querySelector(".next");
  const lightbox = document.getElementById("lightbox");
  const lightboxContent = document.getElementById("lightbox-content");
  const closeBtns = document.querySelectorAll(".close-btn");

  let currentIndex = 0;

  function updateGallery() {
    gallery.style.transform = `translateX(${-currentIndex * 70}px)`; // Ajusta el valor según tus necesidades
  }

  function showPrev() {
    if (currentIndex > 0) {
      currentIndex--;
      updateGallery();
    }
  }

  function showNext() {
    if (currentIndex < gallery.children.length - 1) {
      currentIndex++;
      updateGallery();
    }
  }

  function openImage(imageSrc) {
    lightboxContent.src = imageSrc;
    lightbox.style.display = "flex";
    prevButton.style.display = "block";
    nextButton.style.display = "block";
    document.addEventListener("keydown", handleKeydown);
  }

  function closeImage() {
    lightbox.style.display = "none";
    prevButton.style.display = "none";
    nextButton.style.display = "none";
    document.removeEventListener("keydown", handleKeydown);
  }

  function handleKeydown(event) {
    if (event.key === "ArrowLeft") {
      showPrev();
    } else if (event.key === "ArrowRight") {
      showNext();
    } else if (event.key === "Escape") {
      closeImage();
    }
  }

  function init() {
    const thumbnails = document.querySelectorAll(".thumbnail img");
    thumbnails.forEach((thumbnail, index) => {
      thumbnail.addEventListener("click", () => {
        currentIndex = index;
        openImage(thumbnail.src);
      });
    });

    document.querySelector(".main-image").addEventListener("click", () => {
      openImage(document.querySelector(".main-image").src);
    });

    prevButton.addEventListener("click", showPrev);
    nextButton.addEventListener("click", showNext);

    closeBtns.forEach((btn) => {
      btn.addEventListener("click", closeImage);
    });
  }

  init();
});

