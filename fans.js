// Funktion zum Abspielen des jeweiligen Fangesangs und Stoppen der anderen
function playSong(songId) {
    // Alle laufenden Audios stoppen
    var audios = document.querySelectorAll('audio');
    audios.forEach(function(audio) {
        audio.pause(); // Stoppt das Audio
        audio.currentTime = 0; // Setzt das Audio auf den Anfang zurück
    });

    // Das ausgewählte Audio abspielen
    var selectedAudio = document.getElementById(songId);
    selectedAudio.play();
}
