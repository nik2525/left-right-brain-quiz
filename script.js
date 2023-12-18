function calculateResult() {
    const form = document.getElementById('brainForm');
    const resultContainer = document.getElementById('result');

    // Check if any question is unanswered
    const unansweredQuestions = Array.from(form.elements).filter(e => e.tagName === 'SELECT' && e.value === "").length;

    if (unansweredQuestions > 0) {
        // Display a message if any question is unanswered
        resultContainer.innerHTML = "<p>Please answer all questions before submitting.</p>";
    } else {
        // Get the selected values from the form
        const answers = Array.from(form.elements).filter(e => e.tagName === 'SELECT').map(select => select.value);

        // Calculate the total points
        const totalPoints = answers.reduce((total, answer) => {
            return total + (answer === 'left' ? 1 : 0);
        }, 0);

        // Determine the brain dominance based on total points
        const result = totalPoints >= answers.length / 2 ? 'left-brained' : 'right-brained';

        // Display the result
        resultContainer.innerHTML = `<p>Your dominant brain hemisphere is: <strong>${result}</strong></p>`;
    }
}
