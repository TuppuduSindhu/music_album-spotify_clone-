let currentAudio = null;
let currentPlayButton = null;

function togglePlay(songId) {
    const audio = document.getElementById(songId);
    const playButton = document.getElementById('play' + songId.slice(4));

    if (audio.paused) {
        // Play the new song
        if (currentAudio && !currentAudio.paused) {
            currentAudio.pause(); // Pause the current song
            currentPlayButton.textContent = '▶'; // Reset the play button of the previous song
        }
        audio.play();
        playButton.textContent = '⏸'; // Change to pause symbol
        currentAudio = audio;
        currentPlayButton = playButton;
    } else {
        // Pause the current song
        audio.pause();
        playButton.textContent = '▶'; // Reset to play symbol
    }
}

function stopAudio(songId) {
    const audio = document.getElementById(songId);
    audio.pause();
    audio.currentTime = 0; // Reset the song to the beginning
    const playButton = document.getElementById('play' + songId.slice(4));
    playButton.textContent = '▶'; // Reset to play symbol
}


function togglePlayPause(audioId, playIconId, pauseIconId) {
    var audioPlayer = document.getElementById(audioId);
    var playIcon = document.getElementById(playIconId);
    var pauseIcon = document.getElementById(pauseIconId);
  
    // If the audio is paused, play it and show the pause icon
    if (audioPlayer.paused) {
      audioPlayer.play();
      playIcon.style.display = "none"; // Hide the play icon
      pauseIcon.style.display = "inline-block"; // Show the pause icon
    } else {
      audioPlayer.pause();
      playIcon.style.display = "inline-block"; // Show the play icon
      pauseIcon.style.display = "none"; // Hide the pause icon
    }
  }
  
  // Ensure the footer renders properly when the page loads
window.onload = function() {
    // Check if the footer columns are displayed properly
    var footerColumns = document.querySelectorAll('.footer-column');
    
    // Adjust styles if needed (e.g., force width and layout)
    footerColumns.forEach(function(col) {
        col.style.visibility = 'visible';  // Ensure visibility is set
        col.style.opacity = '1';  // Reset any opacity issues
    });
};



