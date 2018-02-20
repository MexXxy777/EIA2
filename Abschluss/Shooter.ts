

namespace final {
    export let crc2: CanvasRenderingContext2D;
    window.addEventListener("load", init);
     //   window.addEventListener("keydown", ammo);
 
    let object: MoveThat[] = [];
    let n: number = 10; 

    var canvasImg: any;
    var countdown: number = 9000;
    var cdtimer: HTMLParagraphElement;

    function init(): void {
        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
        console.log(canvas);
        crc2 = canvas.getContext("2d");
        console.log(crc2);
        console.log("setTimeout");

        /*Himmel*/
        crc2.fillStyle = "lightblue";
        crc2.fillRect(0, 0, 1280, 600);

        /*Wiese*/
        crc2.fillStyle = "green";
        crc2.fillRect(0, 300, 1280, 600);
        
        canvas.style.cursor = "crosshair";

        alert("Baller alle Raben innerhalb von 30 Sekunden ab! Klicke zum Nachladen auf die Munition");
        //50 Zufällig generierte Bäume auf der Wiese
        for (let i: number = 0; i < 50; i++) {
            let x: number = 0 + Math.random() * 1280;
            let y: number = 250 + Math.random() * 350;
            drawTree(x, y, "darkgreen");
        }
        
        //Vögel und Wolken forschleife
        for (let i: number = 0; i < n; i++) {
            
            let c: Clouds = new Clouds(0 + Math.random() * 1000, 0 + Math.random() * 200, 2.5, 0, "white");
            object.push(c);
         
            //let s: Birds = new Birds(Math.random() * 500, 100 + Math.random() * 150, 1 + Math.random() * 7 , Math.random(), "");
          //  object.push(s);
            let div: Birds = new Birds(Math.random() * 500, 100 + Math.random() * 150, 1 + Math.random() * 7 , Math.random(), "");
            object.push(div);

        }
        
        time();// Countdown aufrufen
        
        
        canvasImg = crc2.getImageData(0, 0, 1280, 600); //bild speichern

        animate(); //animieren
    }
    //Ende Init
    
     function time() {     
        if (countdown > 0) {

            countdown = countdown - 1;

        } else if (countdown == 0) {

            alert("Game Over");
        }
        
        cdtimer = <HTMLParagraphElement>document.getElementById("timer");
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
    
    function handleMouseClickBuchstabe(_event: MouseEvent): void {
            let clickDiv: HTMLHeadingElement = <HTMLHeadingElement>_event.target;
            clickDiv.style.color = "#87EBFF";
            clickDiv.style.backgroundColor = "black";
        }

    // Animation der Vögel und Wolken
    function animate(): void {
        console.log("Timeout");
        crc2.clearRect(0, 0, 1280, 600);
        crc2.putImageData(canvasImg, 0, 0);

        for (let i: number = 0; i < object.length; i++) {
            let s: MoveThat = object[i];
            s.update();
        }

        window.setTimeout(animate, 5);

    }//Animate
    
}
//Namespace

