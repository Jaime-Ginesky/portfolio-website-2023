'use strict'

  

const toggleBtn = document.getElementById("toggle-btn");
const theme = document.getElementById("theme");
let darkMode = localStorage.getItem("dark-mode");
// const navLink = document.querySelector(".nav-link-active");
// const navItem = document.querySelector("nav-item");

// navLink.addEventListener('click', (e) => {
//     e.preventDefault();
//     navLink.classList.add("nav-link-active","nav-link-active:hover",
//     "nav-list", "nav-item", "button", "button:hover")
// })



//     let output ='<ul>'
//     for(let item of arr) {
//         output += `<li><a class="${item.class}" href="${item.href}">${item.text}</a>
//                     <button class="${item.class}" text="${item.text}"</button><li>`
//      }
// }

window.onload = () => {
    setTimeout(function() {
      document.getElementsByTagName("body");
    }, 200);
  }



// Function to create Dark/Light Mode button
const enableDarkMode = () => {
    theme.classList.add("dark-mode-theme");
    toggleBtn.classList.remove("dark-mode-toggle");
    localStorage.setItem("dark-mode", "enabled");
    toggleBtn.innerHTML = `LIGHT THEME`;
}
const disableDarkMode = () => {
    theme.classList.remove("dark-mode-theme");
    toggleBtn.classList.add("dark-mode-toggle");
    localStorage.setItem("dark-mode", "disabled");
    toggleBtn.innerHTML = `DARK THEME`;
}

if (darkMode === "enabled") {
    enableDarkMode();
}

toggleBtn.addEventListener("click", (e) => {
    e.preventDefault();
    darkMode = localStorage.getItem("dark-mode");
    if (darkMode === "disabled") {
        enableDarkMode();
    } else {
        disableDarkMode();
    }
});






