const slidesEl = document.querySelector('#slides');
const navEl = document.querySelector('#nav');
const allImages = document.querySelectorAll('#slides img');
let moveWidth = 0;
const slideWidth = 500;

const updateSlider = () => {
  slidesEl.style.transform = `translateX(-${moveWidth}px)`;
  document.querySelectorAll('.nav button').forEach((btn, idx) =>
    btn.classList.toggle('active', idx === moveWidth / slideWidth)
  );
};

const moveToSlide = (direction) => {
  moveWidth = (moveWidth + direction * slideWidth + allImages.length * slideWidth) % (allImages.length * slideWidth);
  updateSlider();
};

const createNavDots = () => {
  allImages.forEach((_, idx) => {
    const button = document.createElement('button');
    button.addEventListener('click', () => {
      moveWidth = idx * slideWidth;
      updateSlider();
    });
    navEl.appendChild(button);
  });
};

document.querySelector('#next').addEventListener('click', () => moveToSlide(1));
document.querySelector('#prev').addEventListener('click', () => moveToSlide(-1));

createNavDots();
setInterval(() => moveToSlide(1), 3000); // Auto slide every 5 seconds
updateSlider();
