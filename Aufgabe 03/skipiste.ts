/*
Aufgabe: (03 Skipiste mit Animation)
Name: (Maximilian Braun)
Matrikel: (256301)
Datum: (29.10.2017)
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.*/

namespace aufgabe3 {
    window.addEventListener("load", init);
    let crc2: CanvasRenderingContext2D;
    let x: number = 250;
    let y: number = 250;
    let arrayX: number[] = [];
    let arrayY: number[] = [];
    var canvasImg: any;

    function init(): void {
        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
        console.log(canvas);
        crc2 = canvas.getContext("2d");
        console.log(crc2);
        console.log("setTimeout");



        /*Himmel - Canvas breiter als Aufgabenstellung*/
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
        crc2.fillRect(100, 385, 40, 12);

        /*Gondel rechts*/
        crc2.beginPath();
        crc2.moveTo(525, 497);
        crc2.lineTo(525, 545);
        crc2.stroke();
        crc2.fillStyle = "darkred";
        crc2.fillRect(500, 530, 50, 30);
        crc2.strokeRect(500, 530, 50, 30);
        crc2.fillStyle = "#b2dfee";
        crc2.fillRect(505, 535, 40, 12);

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
        crc2.stroke();

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




        for (let i: number = 0; i < 10; i++) {
            let x: number = 50 + Math.random() * 300;
            let y: number = 400 + Math.random() * 100;
            drawTree(x, y, "darkgreen");
        }

        for (let i: number = 0; i < 100; i++) {
            arrayX[i] = 0 + Math.random() * 1000;
            arrayY[i] = 0 + Math.random() * 600;


        }


        /*Hütte*/
        crc2.fillStyle = "darkred";
        crc2.fillRect(170, 550, 60, 40);
        crc2.strokeRect(95, 380, 50, 30);
        crc2.fillStyle = "#b2dfee";
        crc2.fillRect(180, 560, 10, 10);
        crc2.fillRect(210, 560, 10, 10);
        crc2.beginPath();
        crc2.moveTo(160, 550);
        crc2.lineTo(200, 500);
        crc2.lineTo(240, 550);
        crc2.closePath();
        crc2.fillStyle = "brown";
        crc2.fill();
        canvasImg = crc2.getImageData(0, 0, 1000, 600);//Bild machen nachdem alles gezeichnet wurde

        animate(); //Funktionsaufruf der Animation
    }

    function drawTree(_x: number, _y: number, _color: string): void {

        crc2.fillStyle = "brown";
        crc2.fillRect(_x - 5, _y + 90, 10, 20);
        crc2.beginPath();
        crc2.beginPath();
        crc2.moveTo(_x, _y);
        crc2.lineTo(_x + 25, _y + 60);
        crc2.lineTo(_x - 25, _y + 60);
        crc2.closePath();
        crc2.fillStyle = _color;
        crc2.fill();
        crc2.beginPath();
        crc2.moveTo(_x, _y + 30);
        crc2.lineTo(_x + 25, _y + 90);
        crc2.lineTo(_x - 25, _y + 90);
        crc2.closePath();
        crc2.fillStyle = _color;
        
        /*Feste Bäume*/
        crc2.fill();
        crc2.fillStyle = "brown";
        crc2.fillRect(820, 550, 10, 20);
        crc2.beginPath();
        crc2.moveTo(825, 470);
        crc2.lineTo(850, 530);
        crc2.lineTo(800, 530);
        crc2.closePath();
        crc2.fillStyle = "darkgreen";
        crc2.fill();
        crc2.beginPath();
        crc2.moveTo(825, 500);
        crc2.lineTo(850, 550);
        crc2.lineTo(800, 550);
        crc2.closePath();
        crc2.fillStyle = "#darkgreen";
        crc2.fill();
        crc2.fillStyle = "brown";
        crc2.fillRect(730, 580, 10, 20);
        crc2.beginPath();
        crc2.moveTo(735, 500);
        crc2.lineTo(710, 560);
        crc2.lineTo(760, 560);
        crc2.closePath();
        crc2.fillStyle = "darkgreen";
        crc2.fill();
        crc2.beginPath();
        crc2.moveTo(735, 530);
        crc2.lineTo(710, 580);
        crc2.lineTo(760, 580);
        crc2.closePath();
        crc2.fillStyle = "#darkgreen";
        crc2.fill();

    }


    function drawFlakes(_x: number, _y: number, _color: string): void {

        crc2.beginPath();
        crc2.arc(_x, _y, 6, 0, 2 * Math.PI);
        crc2.fillStyle = "white";
        crc2.fill();
        crc2.arc(_x, _y, 6, 0, 2 * Math.PI);
        crc2.stroke();

    }


    function animate(): void {
        console.log("Timeout");
        crc2.clearRect(0, 0, 1000, 600);
        crc2.putImageData(canvasImg, 0, 0);
        /*crc2.clearRect(0, 0, 400, 300);*/

        for (let i: number = 0; i < arrayX.length; i++) {
            if (arrayY[i] > 600) {
                arrayY[i] = 0;
            }
            arrayY[i] += Math.random() + 10;
            drawFlakes(arrayX[i], arrayY[i], "#000000");

        }

        window.setTimeout(animate, 20);



    }

}

