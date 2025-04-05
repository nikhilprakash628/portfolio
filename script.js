document.getElementById("contact-form").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Thank you for reaching out! I will get back to you soon.");
  this.reset();
});



const headingText = "Hello, I'm Nikhil Prakash";
const subheadingText = " A passionate Web Developer and Data Analyst"; // Added a leading space

const headingEl = document.getElementById("typing-heading");
const subheadingEl = document.getElementById("typing-subheading");

let hIndex = 0;
let pIndex = 0;

function typeHeading() {
  if (hIndex < headingText.length) {
    headingEl.textContent += headingText.charAt(hIndex);
    hIndex++;
    setTimeout(typeHeading, 50); // Faster typing speed
  } else {
    setTimeout(typeSubheading, 100); // Shorter delay before subheading starts
  }
}

function typeSubheading() {
  if (pIndex < subheadingText.length) {
    subheadingEl.textContent += subheadingText.charAt(pIndex);
    pIndex++;
    setTimeout(typeSubheading, 50);
  } else {
    setTimeout(() => {
      headingEl.textContent = "";
      subheadingEl.textContent = "";
      hIndex = 0;
      pIndex = 0;
      typeHeading();
    }, 2000); // Restart delay
  }
}

window.addEventListener("DOMContentLoaded", () => {
  headingEl.textContent = ""; // Ensures no empty space initially
  subheadingEl.textContent = ""; 
  typeHeading();
});




function toggleMenu() {
  const nav = document.getElementById('navLinks');
  nav.classList.toggle('active');
}