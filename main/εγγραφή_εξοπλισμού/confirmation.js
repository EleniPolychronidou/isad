document.getElementById("equipmentForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Σταματά την προεπιλεγμένη ενέργεια της φόρμας
  
    // Ερώτηση επιβεβαίωσης
    const confirmed = confirm("Είστε σίγουροι ότι θέλετε να προχωρήσετε με την καταχώρηση;");
  
    if (confirmed) {
      alert("Η καταχώρηση ολοκληρώθηκε με επιτυχία!");
  
      // Καθαρισμός φόρμας
      document.getElementById("equipmentForm").reset();
      generateSerialFields(); // Επαναφορά πεδίων σειριακών αριθμών
    } else {
      alert("Η καταχώρηση ακυρώθηκε.");
    }
  });
  