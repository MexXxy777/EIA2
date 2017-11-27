/*
Aufgabe: (06 SuperClass)
Name: (Maximilian Braun)
Matrikel: (256301)
Datum: (26.11.2017)
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.*/
var aufgabe6;
(function (aufgabe6) {
    window.addEventListener("load", init);
    let x = 250;
    let y = 250;
    let object = [];
    let n = 3; //3 Skifahrer und 3 Wolken
    let f = 150; //150 Schneeflocken 
    var canvasImg;
    function init() {
        let canvas = document.getElementsByTagName("canvas")[0];
        console.log(canvas);
        aufgabe6.crc2 = canvas.getContext("2d");
        console.log(aufgabe6.crc2);
        console.log("setTimeout");
        /*Himmel - Canvas breiter als Aufgabenstellung*/
        aufgabe6.crc2.fillStyle = "#b2dfee";
        aufgabe6.crc2.fillRect(0, 0, 1000, 600);
        /*Piste*/
        aufgabe6.crc2.beginPath();
        aufgabe6.crc2.moveTo(0, 100);
        aufgabe6.crc2.lineTo(1250, 600);
        aufgabe6.crc2.lineTo(0, 600);
        aufgabe6.crc2.closePath();
        aufgabe6.crc2.stroke();
        aufgabe6.crc2.fillStyle = "#ffffff";
        aufgabe6.crc2.fill();
        /*Lift-Linie*/
        aufgabe6.crc2.beginPath();
        aufgabe6.crc2.moveTo(0, 300);
        aufgabe6.crc2.lineTo(800, 600);
        aufgabe6.crc2.stroke();
        /*Gondel links*/
        aufgabe6.crc2.beginPath();
        aufgabe6.crc2.moveTo(120, 345);
        aufgabe6.crc2.lineTo(120, 380);
        aufgabe6.crc2.stroke();
        aufgabe6.crc2.fillStyle = "darkred";
        aufgabe6.crc2.fillRect(95, 380, 50, 30);
        aufgabe6.crc2.strokeRect(95, 380, 50, 30);
        aufgabe6.crc2.fillStyle = "#b2dfee";
        aufgabe6.crc2.fillRect(100, 385, 40, 12);
        /*Gondel rechts*/
        aufgabe6.crc2.beginPath();
        aufgabe6.crc2.moveTo(525, 497);
        aufgabe6.crc2.lineTo(525, 545);
        aufgabe6.crc2.stroke();
        aufgabe6.crc2.fillStyle = "darkred";
        aufgabe6.crc2.fillRect(500, 530, 50, 30);
        aufgabe6.crc2.strokeRect(500, 530, 50, 30);
        aufgabe6.crc2.fillStyle = "#b2dfee";
        aufgabe6.crc2.fillRect(505, 535, 40, 12);
        /*Berge Links*/
        aufgabe6.crc2.beginPath();
        aufgabe6.crc2.moveTo(600, 100);
        aufgabe6.crc2.lineTo(800, 420);
        aufgabe6.crc2.lineTo(500, 300);
        aufgabe6.crc2.closePath();
        aufgabe6.crc2.stroke();
        aufgabe6.crc2.fillStyle = "#888888";
        aufgabe6.crc2.fill();
        /*Berge Rechts*/
        aufgabe6.crc2.beginPath();
        aufgabe6.crc2.moveTo(800, 200);
        aufgabe6.crc2.lineTo(950, 480);
        aufgabe6.crc2.lineTo(700, 380);
        aufgabe6.crc2.closePath();
        aufgabe6.crc2.stroke();
        aufgabe6.crc2.fillStyle = "#888888";
        aufgabe6.crc2.fill();
        aufgabe6.crc2.beginPath();
        aufgabe6.crc2.moveTo(800, 200);
        aufgabe6.crc2.lineTo(700, 380);
        aufgabe6.crc2.strokeStyle = "#888888";
        aufgabe6.crc2.stroke();
        /*Sonne*/
        aufgabe6.crc2.beginPath();
        aufgabe6.crc2.arc(700, 100, 40, 0, 2 * Math.PI);
        aufgabe6.crc2.fillStyle = "#FFFF00";
        aufgabe6.crc2.fill();
        aufgabe6.crc2.beginPath();
        aufgabe6.crc2.arc(685, 85, 6, 0, 2 * Math.PI);
        aufgabe6.crc2.arc(715, 85, 6, 0, 2 * Math.PI);
        aufgabe6.crc2.fillStyle = "black";
        aufgabe6.crc2.fill();
        aufgabe6.crc2.beginPath();
        aufgabe6.crc2.arc(700, 110, 18, 0, 1 * Math.PI);
        aufgabe6.crc2.stroke();
        /*Eis links*/
        aufgabe6.crc2.beginPath();
        aufgabe6.crc2.arc(589, 150, 15, 0, Math.PI);
        aufgabe6.crc2.arc(614, 148, 20, 0, Math.PI);
        aufgabe6.crc2.fillStyle = "#ffffff";
        aufgabe6.crc2.fill();
        aufgabe6.crc2.beginPath();
        aufgabe6.crc2.moveTo(600, 99);
        aufgabe6.crc2.lineTo(635, 150);
        aufgabe6.crc2.lineTo(573, 150);
        aufgabe6.crc2.closePath();
        aufgabe6.crc2.fillStyle = "#ffffff";
        aufgabe6.crc2.fill();
        /*Eis rechts*/
        aufgabe6.crc2.beginPath();
        aufgabe6.crc2.arc(789, 250, 20, 0, Math.PI);
        aufgabe6.crc2.arc(814, 250, 15, 0, Math.PI);
        aufgabe6.crc2.fillStyle = "#ffffff";
        aufgabe6.crc2.fill();
        aufgabe6.crc2.beginPath();
        aufgabe6.crc2.moveTo(800, 200);
        aufgabe6.crc2.lineTo(830, 250);
        aufgabe6.crc2.lineTo(769, 250);
        aufgabe6.crc2.closePath();
        aufgabe6.crc2.fillStyle = "#ffffff";
        aufgabe6.crc2.fill();
        //For Schleife f�r die randomB�ume
        for (let i = 0; i < 10; i++) {
            let x = 50 + Math.random() * 300;
            let y = 400 + Math.random() * 100;
            drawTree(x, y, "darkgreen");
        }
        //For Schleife f�r die Wolken und Skifahrer
        for (let i = 0; i < n; i++) {
            let c = new aufgabe6.InterWolke(0 + Math.random() * 1000, 0 + Math.random() * 200, 2.5, 0, "white");
            object.push(c);
            let s = new aufgabe6.InterSki(0, 100 + Math.random() * 150, 10, 4, "hsl(" + Math.random() * 360 + ", 100%, 50%)");
            object.push(s);
        }
        //For Schleife f�r die Schneeflocken
        for (let i = 0; i < f; i++) {
            let f = new aufgabe6.InterFlocke(0 + Math.random() * 1000, 0 + Math.random() * 600, 0, Math.random() + 10, "white");
            object.push(f);
        }
        /*H�tte unten*/
        aufgabe6.crc2.fillStyle = "darkred";
        aufgabe6.crc2.fillRect(170, 550, 60, 40);
        aufgabe6.crc2.strokeRect(95, 380, 50, 30);
        aufgabe6.crc2.fillStyle = "#b2dfee";
        aufgabe6.crc2.fillRect(180, 560, 10, 10);
        aufgabe6.crc2.fillRect(210, 560, 10, 10);
        aufgabe6.crc2.beginPath();
        aufgabe6.crc2.moveTo(160, 550);
        aufgabe6.crc2.lineTo(200, 500);
        aufgabe6.crc2.lineTo(240, 550);
        aufgabe6.crc2.closePath();
        aufgabe6.crc2.fillStyle = "brown";
        aufgabe6.crc2.fill();
        canvasImg = aufgabe6.crc2.getImageData(0, 0, 1000, 600); //Bild machen nachdem alles gezeichnet wurde
        animate(); //Funktionsaufruf der Animation
    } //Funktion init Ende
    function drawTree(_x, _y, _color) {
        aufgabe6.crc2.fillStyle = "brown";
        aufgabe6.crc2.fillRect(_x - 5, _y + 90, 10, 20);
        aufgabe6.crc2.beginPath();
        aufgabe6.crc2.moveTo(_x, _y);
        aufgabe6.crc2.lineTo(_x + 25, _y + 60);
        aufgabe6.crc2.lineTo(_x - 25, _y + 60);
        aufgabe6.crc2.closePath();
        aufgabe6.crc2.fillStyle = _color;
        aufgabe6.crc2.fill();
        aufgabe6.crc2.beginPath();
        aufgabe6.crc2.moveTo(_x, _y + 30);
        aufgabe6.crc2.lineTo(_x + 25, _y + 90);
        aufgabe6.crc2.lineTo(_x - 25, _y + 90);
        aufgabe6.crc2.closePath();
        aufgabe6.crc2.fillStyle = _color;
        /*Feste B�ume*/
        aufgabe6.crc2.fill();
        aufgabe6.crc2.fillStyle = "brown";
        aufgabe6.crc2.fillRect(820, 550, 10, 20);
        aufgabe6.crc2.beginPath();
        aufgabe6.crc2.moveTo(825, 470);
        aufgabe6.crc2.lineTo(850, 530);
        aufgabe6.crc2.lineTo(800, 530);
        aufgabe6.crc2.closePath();
        aufgabe6.crc2.fillStyle = "darkgreen";
        aufgabe6.crc2.fill();
        aufgabe6.crc2.beginPath();
        aufgabe6.crc2.moveTo(825, 500);
        aufgabe6.crc2.lineTo(850, 550);
        aufgabe6.crc2.lineTo(800, 550);
        aufgabe6.crc2.closePath();
        aufgabe6.crc2.fillStyle = "#darkgreen";
        aufgabe6.crc2.fill();
        aufgabe6.crc2.fillStyle = "brown";
        aufgabe6.crc2.fillRect(730, 580, 10, 20);
        aufgabe6.crc2.beginPath();
        aufgabe6.crc2.moveTo(735, 500);
        aufgabe6.crc2.lineTo(710, 560);
        aufgabe6.crc2.lineTo(760, 560);
        aufgabe6.crc2.closePath();
        aufgabe6.crc2.fillStyle = "darkgreen";
        aufgabe6.crc2.fill();
        aufgabe6.crc2.beginPath();
        aufgabe6.crc2.moveTo(735, 530);
        aufgabe6.crc2.lineTo(710, 580);
        aufgabe6.crc2.lineTo(760, 580);
        aufgabe6.crc2.closePath();
        aufgabe6.crc2.fillStyle = "#darkgreen";
        aufgabe6.crc2.fill();
    }
    // Animation 
    function animate() {
        console.log("Timeout");
        aufgabe6.crc2.clearRect(0, 0, 1000, 600);
        aufgabe6.crc2.putImageData(canvasImg, 0, 0);
        //SkifahrerWolkenFlockenanimation
        for (let i = 0; i < object.length; i++) {
            let s = object[i];
            s.update();
        }
        window.setTimeout(animate, 10);
    }
})(aufgabe6 || (aufgabe6 = {})); // Ende Namespace
//# sourceMappingURL=skipiste.js.map