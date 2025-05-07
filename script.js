// Array of quotes with text, author, and category
const quotes = [
  {
    text: "Science is magic that works.",
    author: "Kurt Vonnegut",
    category: "science",
  },
  {
    text: "The important thing is not to stop questioning.",
    author: "Albert Einstein",
    category: "science",
  },
  {
    text: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt",
    category: "motivation",
  },
  {
    text: "Your time is limited, don't waste it living someone else's life.",
    author: "Steve Jobs",
    category: "motivation",
  },
];

// Initial state variables
let currentIndex = 0; // Tracks current quote index
let currentCategory = "all"; // Default category
let filteredQuotes = [...quotes]; // Filtered quotes based on selected category
let fontSize = 1.5; // Initial font size in rem

// DOM element references
const quoteText = document.getElementById("quoteText");
const quoteAuthor = document.getElementById("quoteAuthor");
const categorySelect = document.getElementById("categorySelect");
const themeSwitch = document.getElementById("themeSwitch");
const increaseFont = document.getElementById("increaseFont");
const decreaseFont = document.getElementById("decreaseFont");

/*
 * Displays the quote at the specified index
 */
function displayQuote(index) {
  const quote = filteredQuotes[index];
  quoteText.textContent = `"${quote.text}"`;
  quoteAuthor.textContent = `- ${quote.author}`;
}

/*
 * Filters quotes based on selected category and updates display
 */
function filterQuotes() {
  currentCategory = categorySelect.value;

  // Show all quotes or filter by selected category
  filteredQuotes =
    currentCategory === "all"
      ? [...quotes]
      : quotes.filter((q) => q.category === currentCategory);

  currentIndex = 0; // Reset index to show first in filtered list
  displayQuote(currentIndex);
}

// Listen for category change and filter quotes
categorySelect.addEventListener("change", filterQuotes);

/*
 * Navigate to next quote
 */
document.getElementById("nextBtn").addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % filteredQuotes.length; // Loop back to start
  displayQuote(currentIndex);
});

/*
 * Navigate to previous quote
 */
document.getElementById("prevBtn").addEventListener("click", () => {
  currentIndex =
    (currentIndex - 1 + filteredQuotes.length) % filteredQuotes.length; // Loop back to end if needed
  displayQuote(currentIndex);
});

/*
 * Show a random quote
 */
document.getElementById("randomBtn").addEventListener("click", () => {
  currentIndex = Math.floor(Math.random() * filteredQuotes.length);
  displayQuote(currentIndex);
});

/*
 * Toggle between light and dark theme
 */
themeSwitch.addEventListener("change", () => {
  document.body.classList.toggle("dark");
});

/*
 * Increase font size of quote text
 */
increaseFont.addEventListener("click", () => {
  fontSize += 0.1;
  quoteText.style.fontSize = fontSize + "rem";
});

/*
 * Decrease font size, but not below 1rem
 */
decreaseFont.addEventListener("click", () => {
  fontSize = Math.max(1, fontSize - 0.1);
  quoteText.style.fontSize = fontSize + "rem";
});

// Show first quote on page load
displayQuote(currentIndex);
