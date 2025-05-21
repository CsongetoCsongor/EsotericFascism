const warningOverlay = document.getElementById('warningOverlay');
const dismissButton = document.getElementById('dismissButton');

// Disable scroll on load
document.body.classList.add('noscroll');

dismissButton.addEventListener('click', function () {
    warningOverlay.style.opacity = '0';
    warningOverlay.style.visibility = 'hidden';

    // Re-enable scrolling
    document.body.classList.remove('noscroll');
});