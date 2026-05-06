const API_URL = 'https://api.api-ninjas.com/v1/jokes?limit=1';
const jokeText = document.getElementById('joke-text');
const getJokeBtn = document.getElementById('get-joke-btn');
const copyBtn = document.getElementById('copy-btn');
const messageDiv = document.getElementById('message');

let currentJoke = '';

// Fetch joke from API
async function fetchJoke() {
    getJokeBtn.disabled = true;
    jokeText.textContent = 'Loading a joke for you...';
    messageDiv.textContent = '';
    
    try {
        const response = await fetch(API_URL);
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        
        if (data && data.length > 0) {
            currentJoke = data[0].joke;
            jokeText.textContent = currentJoke;
        } else {
            jokeText.textContent = 'No joke found. Please try again!';
        }
    } catch (error) {
        console.error('Error fetching joke:', error);
        jokeText.textContent = '❌ Oops! Could not fetch a joke. Please check your internet connection and try again.';
        messageDiv.textContent = '';
    } finally {
        getJokeBtn.disabled = false;
    }
}

// Copy joke to clipboard
async function copyJoke() {
    if (!currentJoke) {
        showMessage('No joke to copy yet!', 'error');
        return;
    }
    
    try {
        await navigator.clipboard.writeText(currentJoke);
        showMessage('✅ Joke copied to clipboard!', 'success');
    } catch (error) {
        console.error('Error copying to clipboard:', error);
        showMessage('❌ Could not copy to clipboard', 'error');
    }
}

// Show temporary message
function showMessage(text, type) {
    messageDiv.textContent = text;
    messageDiv.className = `message ${type}`;
    
    setTimeout(() => {
        messageDiv.textContent = '';
        messageDiv.className = 'message';
    }, 3000);
}

// Event listeners
getJokeBtn.addEventListener('click', fetchJoke);
copyBtn.addEventListener('click', copyJoke);

// Load a joke when page loads
document.addEventListener('DOMContentLoaded', fetchJoke);
