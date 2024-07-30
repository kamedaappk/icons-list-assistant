// script.js
document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('aiButton');
    const aiIcon = document.getElementById('aiIcon');
    let state = 'idle';

    button.addEventListener('click', () => {
        if (state === 'idle') {
            state = 'recording';
            button.classList.add('recording');
            updateIcon('recording');
        } else if (state === 'recording') {
            state = 'processing';
            button.classList.remove('recording');
            button.classList.add('processing');
            updateIcon('processing');

            // Simulate processing delay
            setTimeout(() => {
                state = 'done';
                button.classList.remove('processing');
                button.classList.add('done');
                updateIcon('done');
            }, 3000); // Adjust the delay as needed
        } else if (state === 'done') {
            state = 'idle';
            button.classList.remove('done');
            updateIcon('idle');
        }
    });

    function updateIcon(state) {
        switch (state) {
            case 'recording':
                aiIcon.innerHTML = '<circle cx="12" cy="12" r="10" stroke="white" stroke-width="2" fill="none"/><path d="M9 9l6 6M15 9l-6 6" stroke="white" stroke-width="2"/>';
                break;
            case 'processing':
                aiIcon.innerHTML = '<circle cx="12" cy="12" r="10" stroke="white" stroke-width="2" fill="none"/><path d="M4 12a8 8 0 018-8m0 0a8 8 0 018 8m-8-8v16" stroke="white" stroke-width="2"/>';
                break;
            case 'done':
                aiIcon.innerHTML = '<circle cx="12" cy="12" r="10" stroke="white" stroke-width="2" fill="none"/><path d="M9 12l2 2l4-4" stroke="white" stroke-width="2"/>';
                break;
            case 'idle':
            default:
                aiIcon.innerHTML = '<circle cx="12" cy="12" r="10" stroke="white" stroke-width="2" fill="none"/><path d="M12 16v-4m0 0V8m0 4h4m-4 0H8" stroke="white" stroke-width="2"/>';
                break;
        }
    }
});
