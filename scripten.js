var currentHour = new Date().getHours();

var greetingSpan = document.getElementById("begroeting");
if (currentHour >= 0 && currentHour < 12) {
  greetingSpan.textContent = "Good morning";
} else if (currentHour >= 12 && currentHour < 18) {
  greetingSpan.textContent = "Good afternoon";
} else {
  greetingSpan.textContent = "Good evening";
}
