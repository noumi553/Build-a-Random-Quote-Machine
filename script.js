// Elements
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const newQuoteBtn = document.getElementById("new-quote");
const tweetBtn = document.getElementById("tweet-quote");

// Fetch a quote from the API
async function getQuote() {
  try {
    quoteText.textContent = '"Loading quote..."';
    authorText.textContent = "-";

    const response = await fetch("https://api.quotable.io/random");
    const data = await response.json();

    // Update quote and author
    quoteText.textContent = `"${data.content}"`;
    authorText.textContent = `- ${data.author}`;

    // Update tweet link
    const tweet = `"${data.content}" - ${data.author}`;
    tweetBtn.href = `https://twitter.com/intent/tweet?text=${encodeURIComponent(tweet)}`;
  } catch (error) {
    quoteText.textContent = "Oops! Could not load a quote.";
    authorText.textContent = "";
    tweetBtn.href = "#";
    console.error("Error fetching quote:", error);
  }
}

// Event listener
newQuoteBtn.addEventListener("click", getQuote);

// Load a quote when the page first loads
getQuote();
