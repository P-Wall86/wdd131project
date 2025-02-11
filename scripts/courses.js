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