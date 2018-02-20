var final;
(function (final) {
    window.addEventListener("load", init);
    //   window.addEventListener("keydown", ammo);
    let object = [];
    let n = 10;
    var canvasImg;
    var countdown = 9000;
    var cdtimer;
    function init() {
        let canvas = document.getElementsByTagName("canvas")[0];
        console.log(canvas);
        final.crc2 = canvas.getContext("2d");
        console.log(final.crc2);
        console.log("setTimeout");
        /*Himmel*/
        final.crc2.fillStyle = "lightblue";
        final.crc2.fillRect(0, 0, 1280, 600);
        /*Wiese*/
        final.crc2.fillStyle = "green";
        final.crc2.fillRect(0, 300, 1280, 600);
        canvas.style.cursor = "crosshair";
        alert("Baller alle Raben innerhalb von 30 Sekunden ab! Klicke zum Nachladen auf die Munition");
        //50 Zuf�llig generierte B�ume auf der Wiese
        for (let i = 0; i < 50; i++) {
            let x = 0 + Math.random() * 1280;
            let y = 250 + Math.random() * 350;
            drawTree(x, y, "darkgreen");
        }
        //V�gel und Wolken forschleife
        for (let i = 0; i < n; i++) {
            let c = new final.Clouds(0 + Math.random() * 1000, 0 + Math.random() * 200, 2.5, 0, "white");
            object.push(c);
            //let s: Birds = new Birds(Math.random() * 500, 100 + Math.random() * 150, 1 + Math.random() * 7 , Math.random(), "");
            //  object.push(s);
            let div = new final.Birds(Math.random() * 500, 100 + Math.random() * 150, 1 + Math.random() * 7, Math.random(), "");
            object.push(div);
        }
        time(); // Countdown aufrufen
        canvasImg = final.crc2.getImageData(0, 0, 1280, 600); //bild speichern
        animate(); //animieren
    }
    //Ende Init
    function time() {
        if (countdown > 0) {
            countdown = countdown - 1;
        }
        else if (countdown == 0) {
            alert("Game Over");
        }
        cdtimer = document.getElementById("timer");
        cdtimer.style.position = "absolute";
        cdtimer.style.left = "1em";
        cdtimer.style.bottom = "2em";
        cdtimer.style.fontSize = "3em";
        cdtimer.style.fontFamily = "Stencil";
        cdtimer.style.margin = "0";
        cdtimer.style.color = "white";
        cdtimer.innerText = "Zeit: " + countdown.toString();
        window.setTimeout(time, 1000);
        if (countdown < 11) {
            cdtimer.style.color = "red";
        }
    }
    function drawTree(_x, _y, _color) {
        final.crc2.fillStyle = "brown";
        final.crc2.fillRect(_x - 5, _y + 90, 10, 20);
        final.crc2.beginPath();
        final.crc2.moveTo(_x, _y);
        final.crc2.lineTo(_x + 25, _y + 100);
        final.crc2.lineTo(_x - 25, _y + 100);
        final.crc2.closePath();
        final.crc2.fillStyle = _color;
        final.crc2.fill();
    }
    function handleMouseClickBuchstabe(_event) {
        let clickDiv = _event.target;
        clickDiv.style.color = "#87EBFF";
        clickDiv.style.backgroundColor = "black";
    }
    // Animation der V�gel und Wolken
    function animate() {
        console.log("Timeout");
        final.crc2.clearRect(0, 0, 1280, 600);
        final.crc2.putImageData(canvasImg, 0, 0);
        for (let i = 0; i < object.length; i++) {
            let s = object[i];
            s.update();
        }
        window.setTimeout(animate, 5);
    } //Animate
})(final || (final = {}));
//Namespace
//# sourceMappingURL=Shooter.js.map