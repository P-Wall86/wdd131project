console.log('Scripts loaded');

var currentYear = new Date().getFullYear();
var lastModified = document.lastModified;

console.log("Current Year:", currentYear);
console.log("Last Modified:", lastModified);

document.querySelector("footer p:first-child").innerHTML = "&copy" + currentYear + " - Pamela Pared - Argentina ";
document.querySelector("footer p:nth-child(2)").innerHTML = "Last modified: " + lastModified;

const navLinks = document.querySelectorAll('.nav a');
const currentPage = window.location.pathname.split('/').pop();

navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === currentPage) {
        link.classList.add('active');
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('.nav');
  
    hamburger.addEventListener('click', () => {
      console.log('Hamburger clicked');
      nav.classList.toggle('active');
    });
  });

  document.addEventListener("DOMContentLoaded", () => {
    // Data: CEFR Levels
    const cefrLevels = [
        { title: "A1", description: "Basic user of English", ageRange: "7–10 years old" },
        { title: "A2", description: "Elementary user of English", ageRange: "10–12 years old" },
        { title: "B1", description: "Intermediate user of English", ageRange: "12–15 years old" },
        { title: "B2", description: "Upper-intermediate user of English", ageRange: "15–18 years old" },
        { title: "C1", description: "Advanced user of English", ageRange: "18+ years old" },
        { title: "C2", description: "Proficient user of English", ageRange: "Adults" }
    ];

    let currentIndex = 0; // Start at A1

    // Select the card container and arrow buttons
    const cardContainer = document.getElementById("card-container");

    // Function to create the card
    function createCard(index) {
        const level = cefrLevels[index]; // Get current level

        // Create the card content dynamically
        cardContainer.innerHTML = `
            <button id="prev-card" style="display: ${index === 0 ? 'none' : 'inline-block'}">&lt;</button>
            <div class="card">
                <h2>${level.title}</h2>
                <p>${level.description}</p>
                <p class="age-range">${level.ageRange}</p>
            </div>
            <button id="next-card" style="display: ${index === cefrLevels.length - 1 ? 'none' : 'inline-block'}">&gt;</button>
        `;

        // Attach event listeners after HTML is updated
        const prevButton = document.getElementById("prev-card");
        const nextButton = document.getElementById("next-card");

        // Handle next button click
        nextButton.addEventListener("click", () => {
            if (currentIndex < cefrLevels.length - 1) {
                currentIndex++;
                createCard(currentIndex);
            }
        });

        // Handle prev button click
        prevButton.addEventListener("click", () => {
            if (currentIndex > 0) {
                currentIndex--;
                createCard(currentIndex);
            }
        });
    }

    // Display the first card
    createCard(currentIndex);
});
