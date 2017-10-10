function eingabe() {
    var eingabe = prompt("Wie heisst du?", "Kevin, Dieter, Klaus...");
    if (eingabe != null) {
        document.getElementById("greet").innerHTML =
            "Servus " + eingabe + "! Wie gehts dir?";
    }
}
//# sourceMappingURL=Aufgabe 0.js.map