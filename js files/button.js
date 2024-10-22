// Get all buttons with the class 'btn'
const buttons = document.querySelectorAll('.button');

// Function to remove 'active' class from all buttons and add it to the clicked button
function handleButtonClick(event) {
    // Remove 'active' class from all buttons
    buttons.forEach(button => {
        button.classList.remove('active');
    });

    // Add 'active' class to the clicked button
    event.target.classList.add('active');
}

// Add click event listener to all buttons
buttons.forEach(button => {
    button.addEventListener('click', handleButtonClick);
});
