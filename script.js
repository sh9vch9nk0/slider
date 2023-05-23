(function () {
  let images = [
    "/images/cat_1.jpg",
    "/images/cat_2.jpg",
    "/images/cat_3.jpg",
    "/images/cat_4.jpg",
  ];
  let currentImage = 0;

  document.getElementById("next").onclick = nextImage;
  document.getElementById("back").onclick = backImage;

  function nextImage() {
    if (currentImage < images.length - 1) {
      currentImage += 1;
      document.getElementById("img").src = images[currentImage];
    } else {
      currentImage = 0;
      document.getElementById("img").src = images[currentImage];
    }
  }

  function backImage() {
    if (currentImage > 0) {
      currentImage -= 1;
      document.getElementById("img").src = images[currentImage];
    } else {
      currentImage = images.length - 1;
      document.getElementById("img").src = images[currentImage];
    }
  }
})();
