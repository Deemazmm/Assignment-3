// script.js
// greeting + state management (Visitor name saved)
const greeting = document.getElementById("greeting");
let visitorName = localStorage.getItem("visitorName");

if (!visitorName) {
  visitorName = prompt("Welcome! What's your name?");
  if (visitorName) {
    localStorage.setItem("visitorName", visitorName);
  } 
}

const hour = new Date().getHours();
let timeGreeting = "";
if (hour < 12) {
  timeGreeting = "Good Morning ☀️";
} else if (hour < 18) {
  timeGreeting = "Good Afternoon 🌤️";
} else {
  timeGreeting = "Good Evening 🌙";
}
greeting.textContent = `${timeGreeting}, ${visitorName}!`;



// project title clicks 
const projectTitles = document.querySelectorAll(".project-title");
projectTitles.forEach(title => {
  title.addEventListener("click", () => {
    const project = title.parentElement;
    project.classList.toggle("active"); 
  });
});


// Creating a contact form that validates inputs and shows a confirmation message.
const form = document.querySelector("form");
form.addEventListener("submit", function (event) {
  event.preventDefault(); 
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim()
  if (name === "" || email === "" || message === "") {
    alert("Please fill in all fields before submitting.");
  } else {
    alert(`Your message has been sent successfully.`);
    form.reset();
  }
});

// Random Quote 
const quoteText = document.getElementById("quote-text");
const quoteAuthor = document.getElementById("quote-author");
const newQuoteBtn = document.getElementById("new-quote");
async function getQuote() {
  try {
    const response = await fetch("https://dummyjson.com/quotes/random");
    const data = await response.json();
    if (data.quote.toLowerCase().includes("undefined")) {
      return getQuote(); 
    }
        quoteText.textContent = `"${data.quote}"`;
        quoteAuthor.textContent = `— ${data.author}`;
      } catch (error) {
    quoteText.textContent = "Could not fetch a quote.";
  }
}
getQuote();

// filtering projects logic
const levelSelect = document.getElementById("level");
const projects = document.querySelectorAll(".project");
levelSelect.addEventListener("change", () => {
  const selectedLevel = levelSelect.value;
  projects.forEach(project => {
    const projectLevel = project.dataset.level; 
    if (selectedLevel === "all" || projectLevel === selectedLevel) {
      project.style.display = "block";
    } else {
      project.style.display = "none";
    }
  });
});