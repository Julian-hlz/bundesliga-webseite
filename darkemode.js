// Funktion zum Umschalten der Anzeige
function switchDisplayMode() {
    const displayMode = document.getElementById("display-mode").value;
    const body = document.body;
    
    if (displayMode === "Dunkel") {  // "Dunkel" für den Dunkelmodus
        body.classList.add("dark-mode");
        body.classList.remove("light-mode");
    } else if (displayMode === "Hell") {  // "Hell" für den Hellmodus
        body.classList.add("light-mode");
        body.classList.remove("dark-mode");
    } else {
        body.classList.remove("light-mode");
        body.classList.remove("dark-mode");
    }
}

// Event-Listener für das Dropdown-Menü
document.addEventListener("DOMContentLoaded", function() {
    // Sofort den Modus beim Laden der Seite anwenden
    switchDisplayMode();
    
    // Event-Listener für Änderungen
    document.getElementById("display-mode").addEventListener("change", switchDisplayMode);
});
