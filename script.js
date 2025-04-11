// Get references to the input fields and buttons
const blockIdInput = document.getElementById('block_id');
const colorInput = document.getElementById('colour_id');
const changeButton = document.getElementById('change_button');
const resetButton = document.getElementById('reset_button'); // Fix: Updated ID to match Cypress test

// Function to change the color of the specified grid item
function changeColor() {
    const blockId = blockIdInput.value;
    const color = colorInput.value;

    if (blockId < 1 || blockId > 9 || isNaN(blockId)) {
        alert('Please enter a valid block ID (1-9).');
        return;
    }

    // Reset all grid items to transparent
    document.querySelectorAll('.grid-item').forEach(item => {
        item.style.backgroundColor = 'transparent';
    });

    // Change the background color of the specified grid item
    document.getElementById(blockId).style.backgroundColor = color;
}

// Function to reset the grid colors
function resetColors() {
    document.querySelectorAll('.grid-item').forEach(item => {
        item.style.backgroundColor = 'transparent';
    });
}

// Add event listeners to the buttons
changeButton.addEventListener('click', changeColor);
resetButton.addEventListener('click', resetColors);
