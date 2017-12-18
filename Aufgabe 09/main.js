/*
Aufgabe: (09 DynHTML: Erpresserbrief)
Name: (Maximilian Braun)
Matrikel: (256301)
Datum: (15.12.2017)
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.*/
var aufgabe9;
(function (aufgabe9) {
    window.addEventListener("load", init);
    //Buchstaben Erstellen   
    let buchstaben = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    //Funktion f�r erstellen der Buchstaben
    function init() {
        for (let i = 0; i < buchstaben.length; i++) {
            let buchstabeDiv = document.createElement("div");
            buchstabeDiv.style.width = "30px";
            buchstabeDiv.style.height = "40px";
            buchstabeDiv.style.margin = "10px";
            buchstabeDiv.style.display = "inline";
            buchstabeDiv.style.backgroundColor = "lightgrey";
            buchstabeDiv.innerText = buchstaben[i]; // Buchstaben von Oben einf�gen (26 Arrays)
            buchstabeDiv.style.fontSize = "2em";
            buchstabeDiv.style.fontFamily = "'Anton', sans-serif";
            buchstabeDiv.addEventListener("click", handleMouseClickBuchstabe);
            document.body.appendChild(buchstabeDiv); //Buchstaben als Kind hinter Body einf�gen
        }
        // Erstellen eines Divs zum einf�gen der Buchstaben
        let area = document.createElement("div");
        area.style.backgroundColor = "lightgrey";
        area.style.width = "1280px";
        area.style.height = "400px";
        area.style.marginTop = "2em";
        area.style.marginLeft = "1em";
        area.addEventListener("click", handleMouseClickBrief);
        document.body.appendChild(area);
    }
    // Funktion zur Farbver�nderung bei klicken von Buchstaben
    function handleMouseClickBuchstabe(_event) {
        let clickDiv = _event.target;
        clickDiv.style.color = "#87EBFF";
        clickDiv.style.backgroundColor = "black";
    }
    function handleMouseClickBrief(_event) {
        let placeLetter = document.createElement("div");
        placeLetter.style.position = "absolute";
        placeLetter.style.left = _event.pageX + "px";
        placeLetter.style.top = _event.pageY + "px";
        document.body.appendChild(placeLetter);
    }
})(aufgabe9 || (aufgabe9 = {}));
//# sourceMappingURL=main.js.map