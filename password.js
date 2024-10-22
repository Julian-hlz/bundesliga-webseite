// Event listener für den Button zum Passwort generieren
document.getElementById('generatePasswordBtn').addEventListener('click', function() {
    var length = 16;
    fetch(`https://api.api-ninjas.com/v1/passwordgenerator?length=${length}`, {
      headers: { 'X-Api-Key': 'jsGhoeF/5hdpapiNV5yijA==gOig8MSQr1cSAUDK' }
    })
    .then(response => response.json())
    .then(data => {
      const passwordField = document.getElementById('password');
      const confirmPasswordField = document.getElementById('confirmPassword');
      
      passwordField.value = data.random_password;
      confirmPasswordField.value = data.random_password;
      
      passwordField.type = 'password'; // Setzt das Passwortfeld auf "password"
      confirmPasswordField.type = 'password'; // Setzt das Bestätigungsfeld auf "password"
    })
    .catch(error => console.error('Error:', error));
  });
  
  // Event listener für den Passwort anzeigen Toggle
  document.getElementById('togglePassword').addEventListener('change', function() {
    const passwordField = document.getElementById('password');
    const confirmPasswordField = document.getElementById('confirmPassword');
    
    if (this.checked) {
      passwordField.type = 'text'; // Passwort anzeigen
      confirmPasswordField.type = 'text'; // Passwort bestätigen anzeigen
    } else {
      passwordField.type = 'password'; // Passwort verstecken
      confirmPasswordField.type = 'password'; // Passwort bestätigen verstecken
    }
  });
  