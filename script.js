// Open the lightbox
document.querySelectorAll('.thumbnail').forEach(thumbnail => {
    thumbnail.addEventListener('click', () => {
        const lightboxId = thumbnail.getAttribute('data-lightbox');
        const lightbox = document.getElementById(lightboxId);
        lightbox.style.display = 'flex';
    });
});

// Close the lightbox and stop video playback
document.querySelectorAll('.close').forEach(closeButton => {
    closeButton.addEventListener('click', () => {
        const lightboxId = closeButton.getAttribute('data-lightbox');
        const lightbox = document.getElementById(lightboxId);
        const video = lightbox.querySelector('video');
        lightbox.style.display = 'none';

        // Stop video playback
        if (video) {
            video.pause();
            video.currentTime = 0; // Optional: Reset to the start
        }
    });
});

// Close the lightbox when clicking outside the content
document.querySelectorAll('.lightbox').forEach(lightbox => {
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            const video = lightbox.querySelector('video');
            lightbox.style.display = 'none';

            // Stop video playback
            if (video) {
                video.pause();
                video.currentTime = 0; // Optional: Reset to the start
            }
        }
    });
});
