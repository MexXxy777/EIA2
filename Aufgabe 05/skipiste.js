/*
Aufgabe: (05 Class)
Name: (Maximilian Braun)
Matrikel: (256301)
Datum: (19.11.2017)
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.*/
var aufgabe5;
(function (aufgabe5) {
    window.addEventListener("load", init);
    let x = 250;
    let y = 250;
    let flocke = [];
    let wolke = [];
    let skier = []; //InterfaceArray
    var canvasImg;
    function init() {
        let canvas = document.getElementsByTagName("canvas")[0];
        console.log(canvas);
        aufgabe5.crc2 = canvas.getContext("2d");
        console.log(aufgabe5.crc2);
        console.log("setTimeout");
        /*Himmel - Canvas breiter als Aufgabenstellung*/
        aufgabe5.crc2.fillStyle = "#b2dfee";
        aufgabe5.crc2.fillRect(0, 0, 1000, 600);
        /*Piste*/
        aufgabe5.crc2.beginPath();
        aufgabe5.crc2.moveTo(0, 100);
        aufgabe5.crc2.lineTo(1250, 600);
        aufgabe5.crc2.lineTo(0, 600);
        aufgabe5.crc2.closePath();
        aufgabe5.crc2.stroke();
        aufgabe5.crc2.fillStyle = "#ffffff";
        aufgabe5.crc2.fill();
        /*Lift-Linie*/
        aufgabe5.crc2.beginPath();
        aufgabe5.crc2.moveTo(0, 300);
        aufgabe5.crc2.lineTo(800, 600);
        aufgabe5.crc2.stroke();
        /*Gondel links*/
        aufgabe5.crc2.beginPath();
        aufgabe5.crc2.moveTo(120, 345);
        aufgabe5.crc2.lineTo(120, 380);
        aufgabe5.crc2.stroke();
        aufgabe5.crc2.fillStyle = "darkred";
        aufgabe5.crc2.fillRect(95, 380, 50, 30);
        aufgabe5.crc2.strokeRect(95, 380, 50, 30);
        aufgabe5.crc2.fillStyle = "#b2dfee";
        aufgabe5.crc2.fillRect(100, 385, 40, 12);
        /*Gondel rechts*/
        aufgabe5.crc2.beginPath();
        aufgabe5.crc2.moveTo(525, 497);
        aufgabe5.crc2.lineTo(525, 545);
        aufgabe5.crc2.stroke();
        aufgabe5.crc2.fillStyle = "darkred";
        aufgabe5.crc2.fillRect(500, 530, 50, 30);
        aufgabe5.crc2.strokeRect(500, 530, 50, 30);
        aufgabe5.crc2.fillStyle = "#b2dfee";
        aufgabe5.crc2.fillRect(505, 535, 40, 12);
        /*Berge Links*/
        aufgabe5.crc2.beginPath();
        aufgabe5.crc2.moveTo(600, 100);
        aufgabe5.crc2.lineTo(800, 420);
        aufgabe5.crc2.lineTo(500, 300);
        aufgabe5.crc2.closePath();
        aufgabe5.crc2.stroke();
        aufgabe5.crc2.fillStyle = "#888888";
        aufgabe5.crc2.fill();
        /*Berge Rechts*/
        aufgabe5.crc2.beginPath();
        aufgabe5.crc2.moveTo(800, 200);
        aufgabe5.crc2.lineTo(950, 480);
        aufgabe5.crc2.lineTo(700, 380);
        aufgabe5.crc2.closePath();
        aufgabe5.crc2.stroke();
        aufgabe5.crc2.fillStyle = "#888888";
        aufgabe5.crc2.fill();
        aufgabe5.crc2.beginPath();
        aufgabe5.crc2.moveTo(800, 200);
        aufgabe5.crc2.lineTo(700, 380);
        aufgabe5.crc2.strokeStyle = "#888888";
        aufgabe5.crc2.stroke();
        /*Sonne*/
        aufgabe5.crc2.beginPath();
        aufgabe5.crc2.arc(700, 100, 40, 0, 2 * Math.PI);
        aufgabe5.crc2.fillStyle = "#FFFF00";
        aufgabe5.crc2.fill();
        aufgabe5.crc2.beginPath();
        aufgabe5.crc2.arc(685, 85, 6, 0, 2 * Math.PI);
        aufgabe5.crc2.arc(715, 85, 6, 0, 2 * Math.PI);
        aufgabe5.crc2.fillStyle = "black";
        aufgabe5.crc2.fill();
        aufgabe5.crc2.beginPath();
        aufgabe5.crc2.arc(700, 110, 18, 0, 1 * Math.PI);
        aufgabe5.crc2.stroke();
        /*Eis links*/
        aufgabe5.crc2.beginPath();
        aufgabe5.crc2.arc(589, 150, 15, 0, Math.PI);
        aufgabe5.crc2.arc(614, 148, 20, 0, Math.PI);
        aufgabe5.crc2.fillStyle = "#ffffff";
        aufgabe5.crc2.fill();
        aufgabe5.crc2.beginPath();
        aufgabe5.crc2.moveTo(600, 99);
        aufgabe5.crc2.lineTo(635, 150);
        aufgabe5.crc2.lineTo(573, 150);
        aufgabe5.crc2.closePath();
        aufgabe5.crc2.fillStyle = "#ffffff";
        aufgabe5.crc2.fill();
        /*Eis rechts*/
        aufgabe5.crc2.beginPath();
        aufgabe5.crc2.arc(789, 250, 20, 0, Math.PI);
        aufgabe5.crc2.arc(814, 250, 15, 0, Math.PI);
        aufgabe5.crc2.fillStyle = "#ffffff";
        aufgabe5.crc2.fill();
        aufgabe5.crc2.beginPath();
        aufgabe5.crc2.moveTo(800, 200);
        aufgabe5.crc2.lineTo(830, 250);
        aufgabe5.crc2.lineTo(769, 250);
        aufgabe5.crc2.closePath();
        aufgabe5.crc2.fillStyle = "#ffffff";
        aufgabe5.crc2.fill();
        //For Schleife f�r die randomB�ume
        for (let i = 0; i < 10; i++) {
            let x = 50 + Math.random() * 300;
            let y = 400 + Math.random() * 100;
            drawTree(x, y, "darkgreen");
        }
        //For Schleife f�r die Wolken
        for (let i = 0; i < 3; i++) {
            let s = new aufgabe5.InterWolke(0 + Math.random() * 1000, 0 + Math.random() * 200, 2.5, 0, "white");
            wolke[i] = s;
        }
        //For Schleife f�r die Schneeflocken
        for (let i = 0; i < 100; i++) {
            let s = new aufgabe5.InterFlocke(0 + Math.random() * 1000, 0 + Math.random() * 600, 0, Math.random() + 10, "white");
            flocke[i] = s;
        }
        //Schleife f�r den Skifahrer
        for (let i = 0; i < 3; i++) {
            let s = new aufgabe5.InterSki(0, 100 + Math.random() * 150, 10, 4, "hsl(" + Math.random() * 360 + ", 100%, 50%)");
            skier[i] = s;
        }
        /*H�tte unten*/
        aufgabe5.crc2.fillStyle = "darkred";
        aufgabe5.crc2.fillRect(170, 550, 60, 40);
        aufgabe5.crc2.strokeRect(95, 380, 50, 30);
        aufgabe5.crc2.fillStyle = "#b2dfee";
        aufgabe5.crc2.fillRect(180, 560, 10, 10);
        aufgabe5.crc2.fillRect(210, 560, 10, 10);
        aufgabe5.crc2.beginPath();
        aufgabe5.crc2.moveTo(160, 550);
        aufgabe5.crc2.lineTo(200, 500);
        aufgabe5.crc2.lineTo(240, 550);
        aufgabe5.crc2.closePath();
        aufgabe5.crc2.fillStyle = "brown";
        aufgabe5.crc2.fill();
        canvasImg = aufgabe5.crc2.getImageData(0, 0, 1000, 600); //Bild machen nachdem alles gezeichnet wurde
        animate(); //Funktionsaufruf der Animation
    } //Funktion init Ende
    function drawTree(_x, _y, _color) {
        aufgabe5.crc2.fillStyle = "brown";
        aufgabe5.crc2.fillRect(_x - 5, _y + 90, 10, 20);
        aufgabe5.crc2.beginPath();
        aufgabe5.crc2.moveTo(_x, _y);
        aufgabe5.crc2.lineTo(_x + 25, _y + 60);
        aufgabe5.crc2.lineTo(_x - 25, _y + 60);
        aufgabe5.crc2.closePath();
        aufgabe5.crc2.fillStyle = _color;
        aufgabe5.crc2.fill();
        aufgabe5.crc2.beginPath();
        aufgabe5.crc2.moveTo(_x, _y + 30);
        aufgabe5.crc2.lineTo(_x + 25, _y + 90);
        aufgabe5.crc2.lineTo(_x - 25, _y + 90);
        aufgabe5.crc2.closePath();
        aufgabe5.crc2.fillStyle = _color;
        /*Feste B�ume*/
        aufgabe5.crc2.fill();
        aufgabe5.crc2.fillStyle = "brown";
        aufgabe5.crc2.fillRect(820, 550, 10, 20);
        aufgabe5.crc2.beginPath();
        aufgabe5.crc2.moveTo(825, 470);
        aufgabe5.crc2.lineTo(850, 530);
        aufgabe5.crc2.lineTo(800, 530);
        aufgabe5.crc2.closePath();
        aufgabe5.crc2.fillStyle = "darkgreen";
        aufgabe5.crc2.fill();
        aufgabe5.crc2.beginPath();
        aufgabe5.crc2.moveTo(825, 500);
        aufgabe5.crc2.lineTo(850, 550);
        aufgabe5.crc2.lineTo(800, 550);
        aufgabe5.crc2.closePath();
        aufgabe5.crc2.fillStyle = "#darkgreen";
        aufgabe5.crc2.fill();
        aufgabe5.crc2.fillStyle = "brown";
        aufgabe5.crc2.fillRect(730, 580, 10, 20);
        aufgabe5.crc2.beginPath();
        aufgabe5.crc2.moveTo(735, 500);
        aufgabe5.crc2.lineTo(710, 560);
        aufgabe5.crc2.lineTo(760, 560);
        aufgabe5.crc2.closePath();
        aufgabe5.crc2.fillStyle = "darkgreen";
        aufgabe5.crc2.fill();
        aufgabe5.crc2.beginPath();
        aufgabe5.crc2.moveTo(735, 530);
        aufgabe5.crc2.lineTo(710, 580);
        aufgabe5.crc2.lineTo(760, 580);
        aufgabe5.crc2.closePath();
        aufgabe5.crc2.fillStyle = "#darkgreen";
        aufgabe5.crc2.fill();
    }
    // Animation 
    function animate() {
        console.log("Timeout");
        aufgabe5.crc2.clearRect(0, 0, 1000, 600);
        aufgabe5.crc2.putImageData(canvasImg, 0, 0);
        //Flockenanimation
        for (let i = 0; i < flocke.length; i++) {
            let s = flocke[i];
            s.moveAndDrawSnow();
        }
        //Wolkenanimation
        for (let i = 0; i < wolke.length; i++) {
            let s = wolke[i];
            s.moveAndDrawCloud();
        }
        //Skifahrernanimation
        for (let i = 0; i < skier.length; i++) {
            let s = skier[i];
            s.moveAndDrawSkier();
        }
        window.setTimeout(animate, 10);
    }
})(aufgabe5 || (aufgabe5 = {})); // Ende Namespace
//# sourceMappingURL=skipiste.js.map