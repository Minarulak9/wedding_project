const bgContainer = document.querySelector(".header-img");
const leftArrow = document.querySelector(".left_arrow");
const rightArrow = document.querySelector(".right_arrow");
const menuBtn = document.querySelector(".menu_btn");
const sidebar = document.querySelector(".sidebar");
const sidebarCloseBtn = document.querySelector(".close_sidebar");
const bgCount = bgContainer.childElementCount;
const bgImgs = [...bgContainer.children];
let accumulator = 1;
let autoChange;
const bgChange = () => {
  autoChange = setInterval(() => {
    bgImgs.forEach((el) => {
      el.classList.remove("active");
    });
    bgImgs[accumulator].classList.add("active");
    accumulator < bgCount - 1 ? accumulator++ : (accumulator = 0);
  }, 6000);
};
bgChange();
rightArrow.addEventListener("click", () => {
  clearInterval(autoChange);
  accumulator < bgCount - 1 ? accumulator++ : (accumulator = 0);
  bgImgs.forEach((el) => {
    el.classList.remove("active");
  });
  bgImgs[accumulator].classList.add("active");
  bgChange();
});
leftArrow.addEventListener("click", () => {
  clearInterval(autoChange);
  accumulator > 0 ? accumulator-- : (accumulator = bgCount - 1);
  bgImgs.forEach((el) => {
    el.classList.remove("active");
  });
  bgImgs[accumulator].classList.add("active");
  bgChange();
});
// sldebar toggle
menuBtn.addEventListener("click", () => {
  sidebar.classList.add("active");
});
sidebarCloseBtn.addEventListener("click", () => {
  sidebar.classList.remove("active");
});
