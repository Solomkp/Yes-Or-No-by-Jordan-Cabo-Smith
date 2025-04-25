const music = document.getElementById("music");
const progressBar = document.querySelector(".progress-bar");
const progressContainer = document.querySelector(".progress-container");
const playButton = document.querySelector(".play-button");

let isPlaying = false; // Track play state

function toggleMusic() {
    if (!isPlaying) {
        music.play()
            .then(() => {
                isPlaying = true;
                playButton.style.display = "none"; // Hide play button
                progressContainer.style.display = "block"; // Show progress bar
            })
            .catch((error) => {
                console.error("Audio playback error:", error);
            });
    } else {
        music.pause();
        isPlaying = false;
        playButton.style.display = "flex"; // Show play button when paused
    }
}

// Update progress bar as music plays
music.addEventListener("timeupdate", function () {
    if (music.duration) {
        const progress = (music.currentTime / music.duration) * 100;
        progressBar.style.width = progress + "%";
    }
});

// Reset when song ends
music.addEventListener("ended", function () {
    isPlaying = false;
    playButton.style.display = "flex";
    progressBar.style.width = "0%";
    progressContainer.style.display = "none";
});

document.getElementById("subscribe-button").addEventListener("click", function() {
    let container = document.getElementById("subscribe-container");
    
    // Replace the image and text with an input field
    container.innerHTML = `
        <input type="email" class="email-input" placeholder="Your email">
        <button class="play-button-link">Submit</button>
    `;
});
