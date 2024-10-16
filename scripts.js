const revealClueButton = document.querySelector('.reveal-clue-button');
const clue = document.querySelector('.clue');
const guessInput = document.querySelector('.guess-input');
const guessButton = document.querySelector('.guess-button');
const feedback = document.querySelector('.feedback');
const sender = document.querySelector('.sender');

let wrongAttempts = 0; // Track the number of wrong attempts

revealClueButton.addEventListener('click', function () {
    clue.classList.remove('hidden'); // Show the clue
    guessInput.classList.remove('hidden'); // Show the guess input
    guessButton.classList.remove('hidden'); // Show the guess button
    this.classList.add('hidden'); // Hide the reveal clue button after clicking
});

guessButton.addEventListener('click', function () {
    const guess = guessInput.value.trim().toLowerCase();

    if (guess === "daisy") {
        feedback.textContent = "🎉 Correct! It's me, Daisy! 🌼";
        sender.classList.remove('hidden'); // Show the sender's name
    } else {
        wrongAttempts++; // Increment wrong attempts
        feedback.textContent = `❌ Wrong! Try again! You have made ${wrongAttempts} wrong attempts.`;

        // Enable the sender reveal after 5 wrong attempts
        if (wrongAttempts > 5) {
            sender.classList.remove('hidden'); // Show sender's name
            feedback.textContent += " The sender's name has been revealed due to too many wrong attempts.";
        }
    }
    feedback.classList.remove('hidden');
});
