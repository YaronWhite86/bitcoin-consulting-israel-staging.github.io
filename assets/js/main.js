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

  // By default, show only the beginner section
  const beginnerSection = document.getElementById('beginner');
  if (beginnerSection) {
    beginnerSection.classList.add('is-active');
  }

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

  // --- Bitcoin Price Ticker Logic ---
  const btcPriceElement = document.getElementById('btc-price');

  // This function fetches the price from the CoinGecko API
  const fetchBtcPrice = () => {
    fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd')
      .then(response => response.json())
      .then(data => {
        // Get the price from the data
        const price = data.bitcoin.usd;
        // Format it with a dollar sign and commas
        const formattedPrice = price.toLocaleString('en-US', {
          style: 'currency',
          currency: 'USD',
          minimumFractionDigits: 0,
          maximumFractionDigits: 0
        });
        // Update the text on the page
        btcPriceElement.textContent = formattedPrice;
      })
      .catch(error => {
        // If the API fails, show an error message
        console.error('Error fetching Bitcoin price:', error);
        btcPriceElement.textContent = 'Error';
      });
  };

  // Fetch the price immediately when the page loads
  fetchBtcPrice();

  // Then, update the price every 60 seconds (60000 milliseconds)
  setInterval(fetchBtcPrice, 60000);
});
