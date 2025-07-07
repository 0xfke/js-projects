// DOM Elements
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const categoryText = document.getElementById('category');
const newQuoteBtn = document.getElementById('new-quote');
const twitterBtn = document.getElementById('twitter');


const API_URL = 'https://api.api-ninjas.com/v1/quotes';
const API_KEY = '';

// Fetch a quote from API
async function fetchQuote() {
  try {
    const response = await fetch(API_URL, {
      method: 'GET',
      headers: {
        'X-Api-Key': API_KEY,
        'Content-Type': 'application/json',
      }
    });

    if (!response.ok) {
      throw new Error('Network response was not OK');
    }

    const data = await response.json();

    if (Array.isArray(data) && data.length > 0) {
      const { quote, author, category } = data[0];
      quoteText.textContent = quote || 'No quote found.';
      authorText.textContent = author || 'Unknown';
      categoryText.textContent = category || '';
    } else {
      quoteText.textContent = 'No data found.';
      authorText.textContent = '';
    }

  } catch (error) {
    console.error('Error fetching quote:', error);
    quoteText.textContent = 'Something went wrong!';
    authorText.textContent = '';
  }
}
function tweetQuote() {
  const quote = quoteText.textContent;
  const author = authorText.textContent;

  const tweetText = `"${quote}" — ${author}`;
  const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(tweetText)}`;

  window.open(tweetUrl, '_blank');
}

// Initial quote load
window.addEventListener('DOMContentLoaded', fetchQuote);

// Button click
newQuoteBtn.addEventListener('click', fetchQuote);

twitterBtn.addEventListener('click', tweetQuote);
