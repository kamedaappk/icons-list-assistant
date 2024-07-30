// script.js
document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('aiButton');
    const aiIcon = document.getElementById('aiIcon');
    const ecgIcon = document.getElementById('ecgIcon');
    const container = document.querySelector('.container');
    let state = 'idle';

    // Create the effect element
    const effect = document.createElement('div');
    effect.classList.add('effect');
    container.appendChild(effect);

    button.addEventListener('click', () => {
        if (state === 'idle') {
            state = 'recording';
            button.classList.add('recording');
            effect.classList.add('recording');
            updateIcon('recording');
        } else if (state === 'recording') {
            state = 'processing';
            button.classList.remove('recording');
            button.classList.add('processing');
            effect.classList.remove('recording');
            effect.classList.add('processing');
            updateIcon('processing');

            // Simulate processing delay
            setTimeout(() => {
                state = 'done';
                button.classList.remove('processing');
                button.classList.add('done');
                effect.classList.remove('processing');
                effect.classList.add('done');
                updateIcon('done');

                setTimeout(() => {
                    state = 'idle';
                    button.classList.remove('done');
                    effect.classList.remove('done');
                    updateIcon('idle');
                }, 3000); // Delay before transitioning to idle

            }, 3000); // Adjust the delay as needed
        } else if (state === 'done') {
            state = 'idle';
            button.classList.remove('done');
            effect.classList.remove('done');
            updateIcon('idle');
        }
    });

    function updateIcon(state) {
        switch (state) {
            case 'recording':
                aiIcon.className = 'fas fa-microphone';
                ecgIcon.style.display = 'none';
                break;
            case 'processing':
                aiIcon.style.display = 'none';
                ecgIcon.style.display = 'block';
                break;
            case 'done':
                aiIcon.className = 'fas fa-check';
                aiIcon.style.display = 'block';
                ecgIcon.style.display = 'none';
                break;
            case 'idle':
            default:
                aiIcon.className = 'fas fa-robot';
                aiIcon.style.display = 'block';
                ecgIcon.style.display = 'none';
                break;
        }
    }
});
