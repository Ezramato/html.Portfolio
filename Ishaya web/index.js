// Collect the information entered in a search input by a user
document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementsByClassName('.portfolio-search'); // Assuming the input has an id of 'search'
    const searchButton = document.getElementsByClassName('.portfolio-search'); // Assuming there's a button with id 'searchButton'

    searchButton.addEventListener('click', () => {
        const searchQuery = searchInput.value.trim(); // Get the value and remove extra spaces
        console.log('User searched for:', searchQuery);
        // You can now use the searchQuery variable for further processing
    });
});