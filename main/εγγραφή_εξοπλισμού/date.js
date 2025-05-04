const today = new Date().toISOString().split("T")[0];
document.getElementById("purchaseDate").setAttribute("max", today);