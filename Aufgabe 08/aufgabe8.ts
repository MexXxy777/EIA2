/*Aufgabe: (08 DynHTML)
Name: (Maximilian Braun)
Matrikel: (256301)
Datum: (08.12.2017)
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.*/
namespace aufgabe8 {
    window.addEventListener("load", init2);

    function init2(): void {
        var menge: string = prompt("Wieviele Quadrate zwischen 10 und 100 sollen gezeichnet werden?");
        var input: number = parseInt(menge); //parseint wandelt string in number um

        if (input >= 10 && input <= 100) { //Eingabe Quadrate zwischen 10 und 100
            for (var i: number = 0; i < input; i++) {
              quadrat(Math.random() * 1200 + "px", Math.random() * 600 + "px", "hsl(" + Math.random() * 360 + ", 100%, 50%)", 20 + "px", 20 + "px"); 
            //Koordinaten, Zufallsfarbe und größe von 20 Pixeln
               }
    }
        else    {
            window.alert("Zwischen 10 und 100!!!"); //Falscheingabe führt zu neuen Funktionsaufruf
            init2();

       }
    }

    function quadrat(_x: string, _y: string, _color: string, _width: string, _height: string): void {

        let  h: HTMLDivElement = document.createElement("div"); // HTML***Element und createElement(***)erstellt beliebiges HTMLelement
        h.style.position = "absolute";
        h.style.display = "inline";
        h.style.marginLeft = _x.toString(); 
        h.style.marginTop = _y.toString();
        h.style.backgroundColor = _color;        
        h.style.width = _width;
        h.style.height = _height;
        h.style.border = "3px solid black";
        h.innerText = "";
        document.body.appendChild(h) ; //DIV Element nach Body als Kind einfügen

    }

}