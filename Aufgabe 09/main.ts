/*
Aufgabe: (09 DynHTML: Erpresserbrief)
Name: (Maximilian Braun)
Matrikel: (256301)
Datum: (15.12.2017)
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.*/
namespace aufgabe9 {
    window.addEventListener("load", init);

    //Buchstaben Erstellen   

    let buchstaben: string[] = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
     
    let saveLetter: string = ""; //zum speichern der angeklickten Buchstaben

    //Funktion f�r erstellen der Buchstaben
    function init(): void {
        for (let i: number = 0; i < buchstaben.length; i++) {
            let buchstabeDiv: HTMLDivElement = document.createElement("div");
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
            
            buchstabeDiv.id = buchstaben[i].toLowerCase();
            buchstabeDiv.className = "letter";

        }
 
        // Erstellen eines Divs zum einf�gen der Buchstaben
        let area: HTMLDivElement = document.createElement("div");
        area.style.backgroundColor = "lightgrey";
        area.style.width = "1280px";
        area.style.height = "400px";
        area.style.marginTop = "2em";
        area.style.marginLeft = "1em";
        area.addEventListener("click", handleMouseClickBrief);
        document.body.appendChild(area);
    }
    // Funktion zur Farbver�nderung bei klicken von Buchstaben

    function handleMouseClickBuchstabe(_event: MouseEvent): void {
            let clickDiv: HTMLHeadingElement = <HTMLHeadingElement>_event.target;
            clickDiv.style.color = "#87EBFF";
            clickDiv.style.backgroundColor = "black";
            saveLetter = clickDiv.innerText;
            saveLetter = clickDiv.id.toUpperCase();
        }

    function handleMouseClickBrief(_event: MouseEvent): void {
        let placeLetter: HTMLDivElement = document.createElement("div");
        placeLetter.innerText = saveLetter;
        placeLetter.style.position = "absolute";
        placeLetter.style.left = _event.pageX + "px";
        placeLetter.style.top = _event.pageY + "px";
        document.body.appendChild(placeLetter);
        placeLetter.addEventListener("click", cancelLetterMouseDown);
    }
    
     function handleKeydown(_event: KeyboardEvent): void {
        if (buchstaben.indexOf(_event.key.toUpperCase()) != -1) {

            let key: HTMLDivElement = <HTMLDivElement>document.getElementById(_event.key);
            key.style.color = "black";
            key.style.fontSize = "2em";
            key.style.fontFamily = "'Anton', sans-serif";
            saveLetter = _event.key.toUpperCase();

            console.log(_event);
}
         
         }
    function cancelLetterMouseDown(_event: MouseEvent): void {
        if (_event.altKey == false)
            return;

        if (_event.altKey == true) {
            let c: HTMLDivElement = <HTMLDivElement>_event.target;
            document.body.removeChild(c);
        }
}
}
    