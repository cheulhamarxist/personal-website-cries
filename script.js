document.addEventListener("DOMContentLoaded", () => {

    const musicBtn = document.getElementById('music-btn');
    const audio = document.getElementById('bg-music');

    if (musicBtn && audio) {
        musicBtn.addEventListener('click', () => {
            if (audio.paused) {
                audio.play()
                    .then(() => {
                        musicBtn.textContent = 'Pause';
                    })
                    .catch(error => {
                        console.error("Playback failed:", error);
                    });
            } else {
                audio.pause();
                musicBtn.textContent = 'Play';
            }
        });
    } else {
        console.error("Missing elements! Button found:", !!musicBtn, "Audiofound:", !!audio);
    }
});