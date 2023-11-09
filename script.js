const link = document.querySelector(".link");
const nav = document.querySelector(".header-nav");
const button = document.querySelector(".blog button");
// const icon = document.querySelector("");
button.innerHTML = `<ion-icon name="menu-outline"></ion-icon>`;


button.addEventListener("click", () => {
  check();
});

function check() {
  if (nav.style.display === "none" || nav.style.display === "") {
    button.style.animation = "none";
    setTimeout(() => {
      button.style.animation = "icon 0.3s ease";
    }, 1);
    nav.style.display = "block";
  } else if (nav.style.display === "block") {
    nav.style.display = "none";
    // button.innerHTML = "";
    button.innerHTML = `<ion-icon name="arrow-back-outline"></ion-icon>`;
  }
}
button.addEventListener("animationend", () => {
    if (nav.style.display === "none" || nav.style.display === "") {
      button.innerHTML = "";
      console.log(button.innerHTML);
    } else if (nav.style.display === "block") {
      button.innerHTML = `<ion-icon name="menu-outline"></ion-icon>`;
    }
  });
// check()
