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

// lang change feature

// window.addEventListener("load", () => {
//   setTimeout(() => {
//     let langOption = document.querySelector(".goog-te-combo");
//     console.log(langOption);
//     let options = langOption.children;
//     let opArr = Array(...options);
//     for (let i = 0; i < opArr.length; i++) {
//       if (opArr[i].value != "ar" && opArr[i].value != "en") {
//         opArr[i].remove();
//       }
//       if (document.documentElement.lang == "en") {
//         if (opArr[i].value == "en") opArr[i].setAttribute("selected", true);
//       }
//     }
//   }, 1000);
// });
