/*
Aufgabe: (00 Miniseite)
Name: (Maximilian Braun)
Matrikel: (256301)
Datum: (10.10.2017)
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
function input() {
    var input = prompt("Wie heisst du?", "Kevin, Dieter, Klaus...");
    if (input != null) {
        document.getElementById("greet").innerHTML =
            "Servus " + input + "! Wie gehts dir?";
    }
}
//# sourceMappingURL=Aufgabe 0.js.map