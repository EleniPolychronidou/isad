function generateSerialFields() {
    const quantity = parseInt(document.getElementById("quantity").value);
    const serialContainer = document.getElementById("serialFields");
    serialContainer.innerHTML = ""; // Καθαρίζουμε τα προηγούμενα

    for (let i = 0; i < quantity; i++) {
      const label = document.createElement("label");
      label.setAttribute("for", "serial" + i);
      label.innerHTML = "Σειριακός Αριθμός " + (i + 1) + '<span style="color: red">*</span>';

      const input = document.createElement("input");
      input.type = "text";
      input.id = "serial" + i;
      input.name = "serial" + i;
      input.required = true;

      serialContainer.appendChild(label);
      serialContainer.appendChild(input);
    }
  }

  // Καλεί τη συνάρτηση αρχικά ώστε να εμφανίζεται το πρώτο πεδίο
  generateSerialFields();