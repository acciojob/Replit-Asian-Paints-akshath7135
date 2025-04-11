//your JS code here. If required.
// Get references to the input fields and buttons
const blockIdInput = document.getElementById('block_id');
const colorInput = document.getElementById('colour_id');
const changeButton = document.getElementById('change_button');
const resetButton = document.getElementById('reset');

// Function to change the color of the specified grid item
function changeColor() {
    // Get the block ID and color from the inputs
    const blockId = blockIdInput.value;
    const color = colorInput.value;

    // Validate the block ID
    if (blockId < 1 || blockId > 9 || isNaN(blockId)) {
        alert('Please enter a valid block ID (1-9).');
        return;
    }

    // Reset all grid items to transparent
    const gridItems = document.querySelectorAll('.grid-item');
    gridItems.forEach(item => {
        item.style.backgroundColor = 'transparent';
    });

    // Change the background color of the specified grid item
    const selectedItem = document.getElementById(blockId);
    selectedItem.style.backgroundColor = color;
}

// Function to reset the grid colors
function resetColors() {
    const gridItems = document.querySelectorAll('.grid-item');
    gridItems.forEach(item => {
        item.style.backgroundColor = 'transparent';
    });
}

// Add event listeners to the buttons
changeButton.addEventListener('click', changeColor);
resetButton.addEventListener('click', resetColors);