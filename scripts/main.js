import hamburgerMenu from "./hamburguer.js";
import randomColors from "./random-colors.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
  hamburgerMenu(".nav-button", ".nav-container", ".menu-desktop a");
  randomColors(".rndm-color");
});
