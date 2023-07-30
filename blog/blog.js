// Get the search button and input elements
const searchBtn = document.querySelector('.search-btn');
const searchInput = document.querySelector('.search-input');

// Add an event listener to the search button
searchBtn.addEventListener('click', (event) => {
  event.preventDefault();
  // Get the search query from the input element
  const searchQuery = searchInput.value;
  // Do something with the search query
  console.log(`Search query: ${searchQuery}`);
});