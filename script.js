const link = document.querySelector(".link");
const nav = document.querySelector(".header-nav");
const button = document.querySelector(".blog button");
const icon = document.querySelector("ion-icon");

button.addEventListener("click", () => {
  check();
});

function check() {
  if (nav.style.display === "none" || nav.style.display === "") {
    icon.style.animation = "none";
    setTimeout(() => {
      icon.style.animation = "icon 0.3s ease-in-out";
    }, 1);
    nav.style.display = "block";
  } else if (nav.style.display === "block") {
    nav.style.display = "none";
    icon.innerHTML = `<ion-icon name="arrow-back-outline"></ion-icon>`;
  }
}
icon.addEventListener("animationend", () => {
    if (nav.style.display === "none" || nav.style.display === "") {
      // Иконка после завершения анимации отображения
      icon.innerHTML = `<ion-icon name="arrow-forward-outline"></ion-icon>`;
    } else if (nav.style.display === "block") {
      // Иконка после завершения анимации скрытия
      icon.innerHTML = `<ion-icon name="arrow-back-outline"></ion-icon>`;
    }
  });
// check()
