const imagePainting = document.querySelectorAll(".img-gallery");
const lightBox = document.querySelector(".light-box");
const lightBoxImg = document.querySelector(".light-box-img");
const closeBtn = document.getElementById("close-btn")


imagePainting.forEach((image) => {
    image.addEventListener("click", ()=> {
        lightBoxImg.src = image.src;
        lightBox.style.display = "flex";
    })
});

closeBtn.addEventListener("click", () => {
    lightBox.style.display = "none";
});