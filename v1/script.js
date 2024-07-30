// script.js
document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('aiButton');
    const buttonText = document.getElementById('buttonText');
    let state = 'idle';

    button.addEventListener('click', () => {
        if (state === 'idle') {
            state = 'recording';
            button.classList.add('recording');
            buttonText.textContent = 'Recording...';
        } else if (state === 'recording') {
            state = 'processing';
            button.classList.remove('recording');
            button.classList.add('processing');
            buttonText.textContent = 'Processing...';

            // Simulate processing delay
            setTimeout(() => {
                state = 'done';
                button.classList.remove('processing');
                button.classList.add('done');
                buttonText.textContent = 'Done';
            }, 3000); // Adjust the delay as needed
        } else if (state === 'done') {
            state = 'idle';
            button.classList.remove('done');
            buttonText.textContent = 'AI Assistant';
        }
    });
});
