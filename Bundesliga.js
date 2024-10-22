document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("acceptButton").addEventListener("click", function() {
        document.getElementById("cookieBanner").style.display = "none";
    });

    document.getElementById("declineButton").addEventListener("click", function() {
        document.getElementById("cookieBanner").style.display = "none";
    });

    document.getElementById('display-mode').addEventListener('change', function() {
        const selectedMode = this.value;

        if (selectedMode === 'dark') {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }

        // Optional: Automatischer Modus basierend auf den Systemeinstellungen
        if (selectedMode === 'auto') {
            if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
                document.body.classList.add('dark-mode');
            } else {
                document.body.classList.remove('dark-mode');
            }
        }
    });


    
    // Initiale Einstellung beim Laden der Seite
    const selectedMode = document.getElementById('display-mode').value;

    if (selectedMode === 'dark') {
        document.body.classList.add('dark-mode');
    } else if (selectedMode === 'auto') {
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
    } else {
        document.body.classList.remove('dark-mode');
    }
});

