document.addEventListener("DOMContentLoaded", () => {

    const musicBtn2 = document.getElementById('music-btn2');
    const audio2 = document.getElementById('bg-music2');

    if (musicBtn2 && audio2) {
        musicBtn2.addEventListener('click', () => {
            if (audio2.paused) {
                audio2.play()
                    .then(() => {
                        musicBtn2.textContent = 'Pause';
                    })
                    .catch(error => {
                        console.error("Playback failed:", error);
                    });
            } else {
                audio2.pause();
                musicBtn2.textContent = 'Play';
            }
        });
    } else {
        console.error("Missing element! Button found:", !!musicBtn2, "Audiofound:", !!audio2);
    }
});