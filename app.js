// Sample data for auto-completion
const suggestions = [
    "Apple",
    "Banana",
    "Blueberry",
    "Cherry",
    "Grape",
    "Lemon",
    "Mango",
    "Orange",
    "Peach",
    "Pineapple",
    "Strawberry",
    "Watermelon"
  ];

  function autocomplete(input, suggestionsList) {
    const suggestionBox = document.getElementById("suggestionBox");
    const inputValue = input.value.toLowerCase();
    suggestionBox.innerHTML = ""; // Clear previous suggestions

    // Filter suggestions based on input value
    const filteredSuggestions = suggestionsList.filter(item => item.toLowerCase().includes(inputValue));

    // Show suggestions if there are any
    if (filteredSuggestions.length > 0) {
      suggestionBox.classList.remove("hidden");
      filteredSuggestions.forEach(suggestion => {
        const suggestionItem = document.createElement("div");
        suggestionItem.textContent = suggestion;
        suggestionItem.classList.add("cursor-pointer", "p-2", "hover:bg-blue-100", "rounded-md");
        
        // Add click event to select suggestion
        suggestionItem.addEventListener("click", () => {
          input.value = suggestion; // Set input value to clicked suggestion
          suggestionBox.innerHTML = ""; // Clear suggestions after selection
          suggestionBox.classList.add("hidden"); // Hide suggestion box
        });

        suggestionBox.appendChild(suggestionItem);
      });
    } else {
      suggestionBox.classList.add("hidden"); // Hide suggestion box if no results
    }
  }

  // Listen to input event for auto-completion
  window.onload = () => {
    const inputField = document.getElementById("autocompleteInput");
    inputField.addEventListener("input", () => autocomplete(inputField, suggestions));
  };