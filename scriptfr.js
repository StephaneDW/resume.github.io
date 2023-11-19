var currentHour = new Date().getHours();

var greetingSpan = document.getElementById("begroeting");
if (currentHour >= 0 && currentHour < 12) {
  greetingSpan.textContent = "Bonjour";
} else if (currentHour >= 12 && currentHour < 18) {
  greetingSpan.textContent = "Bonne après-midi";
} else {
  greetingSpan.textContent = "Bon soire";
}
