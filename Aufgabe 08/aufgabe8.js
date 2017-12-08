/*Aufgabe: (08 DynHTML)
Name: (Maximilian Braun)
Matrikel: (256301)
Datum: (08.12.2017)
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.*/
var aufgabe8;
(function (aufgabe8) {
    window.addEventListener("load", init2);
    function init2() {
        var menge = prompt("Wieviele Quadrate zwischen 10 und 100 sollen gezeichnet werden?");
        var input = parseInt(menge); //parseint wandelt string in number um
        if (input >= 10 && input <= 100) {
            for (var i = 0; i < input; i++) {
                quadrat(Math.random() * 1200 + "px", Math.random() * 600 + "px", "hsl(" + Math.random() * 360 + ", 100%, 50%)", 20 + "px", 20 + "px");
            }
        }
        else {
            window.alert("Zwischen 10 und 100!!!"); //Falscheingabe f�hrt zu neuen Funktionsaufruf
            init2();
        }
    }
    function quadrat(_x, _y, _color, _width, _height) {
        let h = document.createElement("div"); // HTML***Element und createElement(***)erstellt beliebiges HTMLelement
        h.style.marginLeft = _x.toString();
        h.style.marginTop = _y.toString();
        h.style.backgroundColor = _color;
        h.style.width = _width;
        h.style.height = _height;
        document.body.appendChild(h); //DIV Element nach Body als Kind einf�gen
    }
})(aufgabe8 || (aufgabe8 = {}));
//# sourceMappingURL=aufgabe8.js.map