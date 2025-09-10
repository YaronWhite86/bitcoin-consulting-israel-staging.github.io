// Wait for the page to be fully loaded
document.addEventListener('DOMContentLoaded', () => {

  // Find the hamburger menu button and the navigation links
  const hamburger = document.querySelector('.hamburger-menu');
  const navLinks = document.querySelector('.nav-links');

  // Add a click event listener to the hamburger button
  hamburger.addEventListener('click', () => {
    // When clicked, add or remove the 'is-active' class on the nav links
    navLinks.classList.toggle('is-active');
  });

});
