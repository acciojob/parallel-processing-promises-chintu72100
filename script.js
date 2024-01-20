const output = document.getElementById("output");
const btn = document.getElementById("download-images-button");

const images = [
  { url: "https://picsum.photos/id/237/200/300" },
  { url: "https://picsum.photos/id/238/200/300" },
  { url: "https://picsum.photos/id/239/200/300" },
];

function loadImage(url) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = () => reject(new Error(`Failed to load image's URL: ${url}`));
    img.src = url;
  });
}

btn.addEventListener("click", () => {
  // Use Promise.all to download all images in parallel
  Promise.all(images.map((image) => loadImage(image.url)))
    .then((loadedImages) => {
      // Display the loaded images on the webpage
      output.innerHTML = "";
      loadedImages.forEach((img) => {
        output.appendChild(img);
      });
    })
    .catch((error) => {
      console.error(error.message);
    });
});
