const link = document.querySelector(".link");
const nav = document.querySelector(".header-nav");
const button = document.querySelector(".blog button");
const header = document.querySelector("header");
const logo = document.querySelector(".logo");
const a = document.querySelectorAll(".header-nav a")
button.innerHTML = `<ion-icon name="menu-outline"></ion-icon>`;
// console.log(a);
button.addEventListener("click", () => {
  check();
});

function check() {
  const computedStyle = window.getComputedStyle(nav);

  if (computedStyle.display === "none" || computedStyle.display === "hidden") {
    button.style.animation = "none";
    setTimeout(() => {
      button.style.animation = "icon 0.3s ease";
    }, 1);
    nav.style.display = "block";
    // nav.style.marginRight = "200px"
    // console.log(a[0]);
    a.forEach((el)=>{
        el.style.marginRight = "220px"
        el.style.display = "flex"

console.log(el);
        el.style.marginTop = "20px"
    })
    // a.style.marginBottom = "20px"
header.style.paddingBottom = "100%"
logo.style.opacity = "0";
  } else if (computedStyle.display === "block") {
    nav.style.display = "none";
    header.style.paddingBottom = ""
logo.style.opacity = "1";
// logo.style.display = "block";

    button.innerHTML = `<ion-icon name="menu-outline"></ion-icon>`;
  }
}

button.addEventListener("animationend", () => {
  const computedStyle = window.getComputedStyle(nav);

  if (computedStyle.display === "none" || computedStyle.display === "hidden") {
    button.innerHTML = `<ion-icon name="menu-outline"></ion-icon>`;
  } else if (computedStyle.display === "block") {
    button.innerHTML = `<ion-icon name="arrow-back-outline"></ion-icon>`;
  }
});
// check()
