/*
Aufgabe: (Abschlussaufgabe EIA2)
Name: (Maximilian Braun)
Matrikel: (256301)
Datum: (23.02.2018)
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.*/
namespace FINAL {

    export let crc2: CanvasRenderingContext2D;
    window.addEventListener("load", init);


    let imgData: ImageData;
    var windowTimeout: any;
    let hits: number = 0;
    let fails: number = 0;
    let klicks: number = 0;
    var countdown: number = 30;
    var cdtimer: HTMLParagraphElement;
    let maxfails: number = 3;
    let ravenObject: RavenObjects[] = [];
    let balloonObject: BalloonObjects[] = [];

    function init(): void {

        alert("Schiesse alle Raben innerhalb von 30 Sekunden ab! Pass auf die Ballons auf!");
        alert("Du darfst maximal 3 Ballons abschiessen. Pro Rabenkill erscheint ein neuer Ballon!");
        if (window.innerHeight > window.innerWidth) {
            alert("Du zockst am Smartphone? Bitte im Querformat!");
        }
        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
        canvas.addEventListener("click", shoot);
        crc2 = canvas.getContext("2d");

        canvas.style.cursor = "crosshair";

        /*Himmel*/
        crc2.fillStyle = "lightblue";
        crc2.fillRect(0, 0, 800, 600);

        /*Wiese*/
        crc2.fillStyle = "green";
        crc2.fillRect(0, 300, 800, 600);

        /*50 Zufällige Bäume auf der Wiese*/
        for (let i: number = 0; i < 50; i++) {
            let x: number = 10 + Math.random() * 790;
            let y: number = 250 + Math.random() * 350;
            drawTree(x, y, "darkgreen");
        }
        /*10 Zufällige Wolken im Himmel*/
        for (let i: number = 0; i < 10; i++) {
            let x: number = 10 + Math.random() * 790;
            let y: number = 10 + Math.random() * 270;
            drawCloud(x, y, "white");
        }

        time();

        imgData = crc2.getImageData(0, 0, 800, 600); //hintergrund speichern

        //Raben 8 stück
        for (let i: number = 0; i < 8; i++) {
            let s: RavenObjects = new RavenObjects(Math.random() * 700 + 10, Math.random() * 500 + 10);
            ravenObject.push(s);
        }

        //Ballons 6 stück
        for (let i: number = 0; i < 6; i++) {
            let r: BalloonObjects = new BalloonObjects(Math.random() * 700 + 15, Math.random() * 500 + 10);
            balloonObject.push(r);
        }

        animate();
    }//Ende Init

    function drawTree(_x: number, _y: number, _color: string): void {

        crc2.fillStyle = "brown";
        crc2.fillRect(_x - 5, _y + 90, 10, 20);
        crc2.beginPath();
        crc2.moveTo(_x, _y);
        crc2.lineTo(_x + 25, _y + 100);
        crc2.lineTo(_x - 25, _y + 100);
        crc2.closePath();
        crc2.fillStyle = _color;
        crc2.fill();
    }
    function drawCloud(_x: number, _y: number, _color: string): void {

        crc2.beginPath();
        crc2.arc(_x, _y, 15, 0, 2 * Math.PI);
        crc2.arc(_x - 40, _y, 15, 0, 2 * Math.PI);
        crc2.arc(_x - 20, _y - 5, 18, 0, 2 * Math.PI);
        crc2.fillStyle = _color;
        crc2.fill();
    }

    function time() {
        if (countdown > 0) {
            countdown = countdown - 1;
        }
        cdtimer = <HTMLParagraphElement>document.getElementById("timer"); //Timer unten links
        cdtimer.style.position = "absolute";
        cdtimer.style.left = "1em";
        cdtimer.style.bottom = "1em";
        cdtimer.style.fontSize = "3em";
        cdtimer.style.fontFamily = "Stencil";
        cdtimer.style.margin = "0";
        cdtimer.style.color = "white";
        cdtimer.innerText = "Zeit: " + countdown.toString();
        window.setTimeout(time, 1000);

        if (hits == ravenObject.length) { //schleife zum abschalten der timerfunktion bei Win
            return;
        }
        if (fails == maxfails) {    //Schleife zum abschalten der timerfunktion bei fail durch Ballonabschüsse
            return;
        }
        if (countdown < 11) {

            cdtimer.style.color = "red";
            let soundTime: HTMLMediaElement = <HTMLMediaElement>document.getElementById("time");
            soundTime.play();

            if (countdown == 0) {
                soundTime.pause();
                window.clearTimeout(windowTimeout);
                crc2.clearRect(0, 0, 800, 600);
                crc2.fillStyle = "black";
                crc2.fillRect(0, 0, 800, 600);
                crc2.fillStyle = "white";
                crc2.font = "3em Arial";
                crc2.fillText("Game Over! ... Loser", 200, 300);
                let soundFail: HTMLMediaElement = <HTMLMediaElement>document.getElementById("fail");
                soundFail.play();

            }
        }
    }//Ende Time

    function shoot(_event: MouseEvent): void {

        let soundShot: HTMLMediaElement = <HTMLMediaElement>document.getElementById("shoot");
        soundShot.play();
        klicks += 1;

        for (let i: number = 0; i < ravenObject.length; i++) {

            if (_event.pageX >= ravenObject[i].x && _event.pageX <= ravenObject[i].x + 100 && ravenObject[i].y <= _event.pageY && _event.pageY <= ravenObject[i].y + 100 && ravenObject[i].color != "#39ff14") {

                ravenObject[i].color = "#39ff14";
                hits += 1; //hit counter
                for (let i: number = 0; i < 1; i++) {
                    let r: BalloonObjects = new BalloonObjects(Math.random() * 700 + 15, Math.random() * 500 + 10); //1 neuer Ballon bei Rabenabschuss
                    balloonObject.push(r);

                }
            }
           

            for (let i: number = 0; i < balloonObject.length; i++) {

                if (_event.pageX >= balloonObject[i].x && _event.pageX <= balloonObject[i].x + 100 && balloonObject[i].y <= _event.pageY && _event.pageY <= balloonObject[i].y + 100 && balloonObject[i].color != "red") {

                    balloonObject[i].color = "red"; //abgeschossener ballon wird rot
                    fails += 1; //failhits counter
                    let ballonShoot: HTMLMediaElement = <HTMLMediaElement>document.getElementById("shootfail");
                    ballonShoot.play();
                }
            }
        }

        let div: HTMLDivElement = <HTMLDivElement>document.getElementById("stats");
        div.style.padding = "1em";
        div.style.margin = "2%";
        div.style.position = "absolute";
        div.style.left = "9em";
        div.style.bottom = "1.2em";
        div.style.fontSize = "1.5em";
        div.style.fontFamily = "Stencil";
        div.style.margin = "0";
        div.style.color = "white";
        div.innerHTML = "";
        div.innerHTML += "Raben: ";
        div.innerHTML += hits + " von " + ravenObject.length;
        div.innerHTML += " | Ballons: ";
        div.innerHTML += fails + " von " + maxfails;

        if (fails == maxfails) {
            window.clearTimeout(windowTimeout);
            crc2.clearRect(0, 0, 800, 600);
            crc2.fillStyle = "black";
            crc2.fillRect(0, 0, 800, 600);
            crc2.fillStyle = "white";
            crc2.font = "3em Arial";
            crc2.fillText("Game Over! ... Loser", 200, 300);

            let soundFail: HTMLMediaElement = <HTMLMediaElement>document.getElementById("fail");
            soundFail.play();
        }

        if (hits == ravenObject.length) {

            window.clearTimeout(windowTimeout);
            crc2.clearRect(0, 0, 800, 600);
            crc2.fillStyle = "black";
            crc2.fillRect(0, 0, 800, 600);
            crc2.fillStyle = "white";
            crc2.font = "3em Arial";
            crc2.fillText("YOU WIN!", 300, 300);

            let soundWin: HTMLMediaElement = <HTMLMediaElement>document.getElementById("win");
            soundWin.play();

        }
    }

    function animate(): void {
        crc2.putImageData(imgData, 0, 0);
        //Raben
        for (let i: number = 0; i < ravenObject.length; i++) {
            let r: RavenObjects = ravenObject[i];
            r.update();
            let soundRaven: HTMLMediaElement = <HTMLMediaElement>document.getElementById("raven");
            soundRaven.play();
        }
        //Ballons
        for (let i: number = 0; i < balloonObject.length; i++) {
            let b: BalloonObjects = balloonObject[i];
            b.update();
        }
        windowTimeout = window.setTimeout(animate, 10);
    }




}