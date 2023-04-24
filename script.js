function goBack() {
  window.history.back();
}
function goForward() {
  window.history.forward();
}

// Get the flag from the sessionStorage object
const hasVisitedHomePage = sessionStorage.getItem("hasVisitedHomePage");

// Check if the flag is null or undefined
if (!hasVisitedHomePage) {
  // Set the flag to true and store it in the sessionStorage object
  sessionStorage.setItem("hasVisitedHomePage", true);
  // Add your code for when the user is just entering the home page here
  console.log("User is just entering the home page");
} else {
  // Add your code for when the user is returning to the home page from other pages here
  console.log("User is returning to the home page from other pages");
}

// Add an event listener for the 'beforeunload' event to update the flag when the user leaves the page
window.addEventListener("beforeunload", function() {
  sessionStorage.removeItem("hasVisitedHomePage");
});