/*
Aufgabe: (02 Skipiste mit Funktionen)
Name: (Maximilian Braun)
Matrikel: (256301)
Datum: (22.10.2017)
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.*/


window.addEventListener("load", init);

function init(): void {
    let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
    console.log(canvas);

    let crc2: CanvasRenderingContext2D = canvas.getContext("2d");
    console.log(crc2);

    crc2.fillStyle = "#b2dfee";
    crc2.fillRect(0, 0, 1000, 600);
   

     /*Piste*/
    crc2.beginPath();
    crc2.moveTo(0, 100);
    crc2.lineTo(1250, 600);
    crc2.lineTo(0, 600);
    crc2.closePath();
    crc2.stroke();
    crc2.fillStyle = "#ffffff";
    crc2.fill();
    
     /*Lift-Linie*/
    crc2.beginPath();
    crc2.moveTo(0, 300);
    crc2.lineTo(800, 600);
    crc2.stroke();
    /*Gondel links*/
    crc2.beginPath();
    crc2.moveTo(120, 345);
    crc2.lineTo(120, 380);
    crc2.stroke();
    crc2.fillStyle = "darkred";
    crc2.fillRect(95, 380, 50, 30);
    crc2.strokeRect(95, 380, 50, 30);
    crc2.fillStyle = "#b2dfee";
    crc2.fillRect (100, 385, 40, 12);
    /*Gondel rechts*/
    crc2.beginPath();
    crc2.moveTo(525, 497);
    crc2.lineTo(525, 545);
    crc2.stroke();
    crc2.fillStyle = "darkred";
    crc2.fillRect(500, 530, 50, 30);
    crc2.strokeRect(500, 530, 50, 30);
    crc2.fillStyle = "#b2dfee";
    crc2.fillRect (505, 535, 40, 12);
    
    /*Hütte*/
    crc2.fillStyle = "darkred";
    crc2.fillRect(170, 550, 60, 40);
    crc2.strokeRect(95, 380, 50, 30);
    crc2.fillStyle = "#b2dfee";
    crc2.fillRect (180, 560, 10, 10);
    crc2.fillRect (210, 560, 10, 10);
    crc2.beginPath();
    crc2.moveTo(160, 550);
    crc2.lineTo(200, 500);
    crc2.lineTo(240, 550);
    crc2.closePath();
    crc2.fillStyle = "brown"; 
    crc2.fill();
    
    /*Wolke*/
    crc2.beginPath();
    crc2.arc(430, 110, 15, 0, 2 * Math.PI);
    crc2.arc(390, 110, 15, 0, 2 * Math.PI);
    crc2.arc(410, 105, 18, 0, 2 * Math.PI);
    crc2.fillStyle = "white";
    crc2.fill();
    crc2.beginPath();
    crc2.arc(940, 110, 15, 0, 2 * Math.PI);
    crc2.arc(900, 110, 15, 0, 2 * Math.PI);
    crc2.arc(920, 105, 18, 0, 2 * Math.PI);
    crc2.fillStyle = "white";
    crc2.fill();
    
    

    /*Berge Links*/
    crc2.beginPath();
    crc2.moveTo(600, 100);
    crc2.lineTo(800, 420);
    crc2.lineTo(500, 300);
    crc2.closePath();
    crc2.stroke();
    crc2.fillStyle = "#888888";
    crc2.fill();
    
    /*Berge Rechts*/
    crc2.beginPath();
    crc2.moveTo(800, 200);
    crc2.lineTo(950, 480);
    crc2.lineTo(700, 380);
    crc2.closePath();
    crc2.stroke();
    crc2.fillStyle = "#888888";
    crc2.fill();
    crc2.beginPath();
    crc2.moveTo(800, 200);
    crc2.lineTo(700, 380);
    crc2.strokeStyle = "#888888";
    crc2.stroke();

     /*Sonne*/
    crc2.beginPath();
    crc2.arc(700, 100, 40, 0, 2 * Math.PI);
    crc2.fillStyle = "#FFFF00";
    crc2.fill();
    crc2.beginPath();
    crc2.arc(685, 85, 6, 0, 2 * Math.PI);
    crc2.arc(715, 85, 6, 0, 2 * Math.PI);
    crc2.fillStyle = "black";
    crc2.fill();
    crc2.beginPath();
    crc2.arc(700, 110, 18, 0, 1 * Math.PI);
    crc2.stroke()
    
    
    /*Eis links*/
    crc2.beginPath();
    crc2.arc(589, 150, 15, 0, Math.PI);
    crc2.arc(614, 148, 20, 0, Math.PI);
    crc2.fillStyle = "#ffffff";
    crc2.fill();
    crc2.beginPath();
    crc2.moveTo(600, 99);
    crc2.lineTo(635, 150);
    crc2.lineTo(573, 150);
    crc2.closePath();
    crc2.fillStyle = "#ffffff";
    crc2.fill();
    
    /*Eis rechts*/
    crc2.beginPath();
    crc2.arc(789, 250, 20, 0, Math.PI);
    crc2.arc(814, 250, 15, 0, Math.PI);
    crc2.fillStyle = "#ffffff";
    crc2.fill();
    crc2.beginPath();
    crc2.moveTo(800, 200);
    crc2.lineTo(830, 250);
    crc2.lineTo(769, 250);
    crc2.closePath();
    crc2.fillStyle = "#ffffff";
    crc2.fill();
    
    /*Bäume*/
    crc2.fillStyle = "brown";
    crc2.fillRect(40, 560, 10, 20);
    crc2.beginPath();
    crc2.moveTo(45, 480);
    crc2.lineTo(70, 540);
    crc2.lineTo(20, 540);
    crc2.closePath();
    crc2.fillStyle = "darkgreen";
    crc2.fill();
    crc2.beginPath();
    crc2.moveTo(45, 510);
    crc2.lineTo(70, 560);
    crc2.lineTo(20, 560);
    crc2.closePath();
    crc2.fillStyle = "#darkgreen"; 
    crc2.fill();
    
    crc2.fillStyle = "brown";
    crc2.fillRect(80, 580, 10, 20);
    crc2.beginPath();
    crc2.moveTo(85, 500);
    crc2.lineTo(110, 560);
    crc2.lineTo(60, 560);
    crc2.closePath();
    crc2.fillStyle = "darkgreen";
    crc2.fill();
    crc2.beginPath();
    crc2.moveTo(85, 530);
    crc2.lineTo(110, 580);
    crc2.lineTo(60, 580);
    crc2.closePath();
    crc2.fillStyle = "#darkgreen"; 
    crc2.fill();
    
    crc2.fillStyle = "brown";
    crc2.fillRect(120, 550, 10, 20);
    crc2.beginPath();
    crc2.moveTo(125, 470);
    crc2.lineTo(150, 530);
    crc2.lineTo(100, 530);
    crc2.closePath();
    crc2.closePath();
    crc2.fillStyle = "darkgreen";
    crc2.fill();
    crc2.beginPath();
    crc2.moveTo(125, 500);
    crc2.lineTo(150, 550);
    crc2.lineTo(100, 550);
    crc2.closePath();
    crc2.fillStyle = "#darkgreen"; 
    crc2.fill();
    
    /*
    crc2.beginPath();
    crc2.moveTo(0, 0);
    crc2.bezierCurveTo(20,100,200,100,300,20) 
    crc2.stroke();
    */
    
    
    
}