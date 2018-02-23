/*
Aufgabe: (Abschlussaufgabe EIA2)
Name: (Maximilian Braun)
Matrikel: (256301)
Datum: (23.02.2018)
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.*/
var FINAL;
(function (FINAL) {
    window.addEventListener("load", init);
    let imgData;
    var windowTimeout;
    let hits = 0;
    let fails = 0;
    let klicks = 0;
    var countdown = 30;
    var cdtimer;
    let maxfails = 3;
    let ravenObject = [];
    let balloonObject = [];
    function init() {
        alert("Schiesse alle Raben innerhalb von 30 Sekunden ab! Pass auf die Ballons auf!");
        alert("Du darfst maximal 3 Ballons abschiessen. Pro Rabenkill erscheint ein neuer Ballon!");
        if (window.innerHeight > window.innerWidth) {
            alert("Du zockst am Smartphone? if (Wurstfinger = Querformat!)");
        }
        let canvas = document.getElementsByTagName("canvas")[0];
        canvas.addEventListener("click", shoot);
        FINAL.crc2 = canvas.getContext("2d");
        canvas.style.cursor = "crosshair";
        /*Himmel*/
        FINAL.crc2.fillStyle = "lightblue";
        FINAL.crc2.fillRect(0, 0, 800, 600);
        /*Wiese*/
        FINAL.crc2.fillStyle = "green";
        FINAL.crc2.fillRect(0, 300, 800, 600);
        /*50 Zuf�llige B�ume auf der Wiese*/
        for (let i = 0; i < 50; i++) {
            let x = 10 + Math.random() * 790;
            let y = 250 + Math.random() * 350;
            drawTree(x, y, "darkgreen");
        }
        /*10 Zuf�llige Wolken im Himmel*/
        for (let i = 0; i < 10; i++) {
            let x = 10 + Math.random() * 790;
            let y = 10 + Math.random() * 270;
            drawCloud(x, y, "white");
        }
        time();
        imgData = FINAL.crc2.getImageData(0, 0, 800, 600); //hintergrund speichern
        //Raben 8 st�ck
        for (let i = 0; i < 8; i++) {
            let s = new FINAL.RavenObjects(Math.random() * 700 + 10, Math.random() * 500 + 10);
            ravenObject.push(s);
        }
        //Ballons 6 st�ck
        for (let i = 0; i < 6; i++) {
            let r = new FINAL.BalloonObjects(Math.random() * 700 + 15, Math.random() * 500 + 10);
            balloonObject.push(r);
        }
        animate();
    } //Ende Init
    function drawTree(_x, _y, _color) {
        FINAL.crc2.fillStyle = "brown";
        FINAL.crc2.fillRect(_x - 5, _y + 90, 10, 20);
        FINAL.crc2.beginPath();
        FINAL.crc2.moveTo(_x, _y);
        FINAL.crc2.lineTo(_x + 25, _y + 100);
        FINAL.crc2.lineTo(_x - 25, _y + 100);
        FINAL.crc2.closePath();
        FINAL.crc2.fillStyle = _color;
        FINAL.crc2.fill();
    }
    function drawCloud(_x, _y, _color) {
        FINAL.crc2.beginPath();
        FINAL.crc2.arc(_x, _y, 15, 0, 2 * Math.PI);
        FINAL.crc2.arc(_x - 40, _y, 15, 0, 2 * Math.PI);
        FINAL.crc2.arc(_x - 20, _y - 5, 18, 0, 2 * Math.PI);
        FINAL.crc2.fillStyle = _color;
        FINAL.crc2.fill();
    }
    function time() {
        if (countdown > 0) {
            countdown = countdown - 1;
        }
        cdtimer = document.getElementById("timer"); //Timer unten links
        cdtimer.style.position = "absolute";
        cdtimer.style.left = "1em";
        cdtimer.style.bottom = "1em";
        cdtimer.style.fontSize = "3em";
        cdtimer.style.fontFamily = "Stencil";
        cdtimer.style.margin = "0";
        cdtimer.style.color = "white";
        cdtimer.innerText = "Zeit: " + countdown.toString();
        window.setTimeout(time, 1000);
        if (hits == ravenObject.length) {
            return;
        }
        if (fails == maxfails) {
            return;
        }
        if (countdown < 11) {
            cdtimer.style.color = "red";
            let soundTime = document.getElementById("time");
            soundTime.play();
            if (countdown == 0) {
                soundTime.pause();
                window.clearTimeout(windowTimeout);
                FINAL.crc2.clearRect(0, 0, 800, 600);
                FINAL.crc2.fillStyle = "black";
                FINAL.crc2.fillRect(0, 0, 800, 600);
                FINAL.crc2.fillStyle = "white";
                FINAL.crc2.font = "3em Arial";
                FINAL.crc2.fillText("Game Over! ... Loser", 200, 300);
                let soundFail = document.getElementById("fail");
                soundFail.play();
            }
        }
    } //Ende Time
    function shoot(_event) {
        let soundShot = document.getElementById("shoot");
        soundShot.play();
        klicks += 1;
        for (let i = 0; i < ravenObject.length; i++) {
            if (_event.pageX >= ravenObject[i].x && _event.pageX <= ravenObject[i].x + 100 && ravenObject[i].y <= _event.pageY && _event.pageY <= ravenObject[i].y + 100 && ravenObject[i].color != "#39ff14") {
                ravenObject[i].color = "#39ff14";
                hits += 1; //hit counter
                for (let i = 0; i < 1; i++) {
                    let r = new FINAL.BalloonObjects(Math.random() * 700 + 15, Math.random() * 500 + 10); //1 neuer Ballon bei Rabenabschuss
                    balloonObject.push(r);
                }
            }
            for (let i = 0; i < balloonObject.length; i++) {
                if (_event.pageX >= balloonObject[i].x && _event.pageX <= balloonObject[i].x + 100 && balloonObject[i].y <= _event.pageY && _event.pageY <= balloonObject[i].y + 100 && balloonObject[i].color != "red") {
                    balloonObject[i].color = "red"; //abgeschossener ballon wird rot
                    fails += 1; //failhits counter
                    let ballonShoot = document.getElementById("shootfail");
                    ballonShoot.play();
                }
            }
        }
        let div = document.getElementById("stats");
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
            FINAL.crc2.clearRect(0, 0, 800, 600);
            FINAL.crc2.fillStyle = "black";
            FINAL.crc2.fillRect(0, 0, 800, 600);
            FINAL.crc2.fillStyle = "white";
            FINAL.crc2.font = "3em Arial";
            FINAL.crc2.fillText("Game Over! ... Loser", 200, 300);
            let soundFail = document.getElementById("fail");
            soundFail.play();
        }
        if (hits == ravenObject.length) {
            window.clearTimeout(windowTimeout);
            FINAL.crc2.clearRect(0, 0, 800, 600);
            FINAL.crc2.fillStyle = "black";
            FINAL.crc2.fillRect(0, 0, 800, 600);
            FINAL.crc2.fillStyle = "white";
            FINAL.crc2.font = "3em Arial";
            FINAL.crc2.fillText("YOU WIN!", 300, 300);
            let soundWin = document.getElementById("win");
            soundWin.play();
        }
    }
    function animate() {
        FINAL.crc2.putImageData(imgData, 0, 0);
        //Raben
        for (let i = 0; i < ravenObject.length; i++) {
            let r = ravenObject[i];
            r.update();
            let soundRaven = document.getElementById("raven");
            soundRaven.play();
        }
        //Ballons
        for (let i = 0; i < balloonObject.length; i++) {
            let b = balloonObject[i];
            b.update();
        }
        windowTimeout = window.setTimeout(animate, 10);
    }
})(FINAL || (FINAL = {}));
//# sourceMappingURL=main.js.map