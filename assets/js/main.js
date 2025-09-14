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

  // --- FAQ Toggle Logic ---
  const faqToggles = document.querySelectorAll('.faq-button');
  const faqSections = document.querySelectorAll('.faq-section');

  // By default, show all sections
  faqSections.forEach(section => {
    section.classList.add('is-active');
  });

  faqToggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
      const filter = toggle.dataset.filter;

      // Update button active state
      faqToggles.forEach(btn => btn.classList.remove('is-active'));
      toggle.classList.add('is-active');

      // Show/hide sections based on filter
      faqSections.forEach(section => {
        section.classList.remove('is-active');
        if (filter === 'all' || section.id === filter) {
          section.classList.add('is-active');
        }
      });
    });
  });
});
