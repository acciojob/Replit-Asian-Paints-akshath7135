document.addEventListener("DOMContentLoaded", () => {
    const blockIdInput = document.getElementById("block_id");
    const colorInput = document.getElementById("colour_id");
    const changeButton = document.getElementById("change_button");
    const resetButton = document.getElementById("reset_button");

    // Function to change the color of the specified grid item
    function changeColor() {
        const blockId = parseInt(blockIdInput.value);
        const color = colorInput.value.trim();

        if (isNaN(blockId) || blockId < 1 || blockId > 9) {
            alert("Please enter a valid block number (1-9).");
            return;
        }

        // Change the background color of the specified grid item
        const block = document.getElementById(blockId);
        if (block) {
            block.style.backgroundColor = color;
        }
    }

    // Function to reset all grid colors
    function resetColors() {
        document.querySelectorAll(".grid-item").forEach(item => {
            item.style.backgroundColor = "transparent";
        });
    }

    // Event Listeners
    changeButton.addEventListener("click", changeColor);
    resetButton.addEventListener("click", resetColors);
});
