/*
Aufgabe: (Abschlussaufgabe EIA2)
Name: (Maximilian Braun)
Matrikel: (256301)
Datum: (23.02.2018)
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.*/
namespace FINAL {

    export class RavenObjects extends MovingObjects {

        dx: number; //X-Richtung
        dy: number; //Y-Richtung
        color: string;

        constructor(_x: number, _y: number) {
            super(_x, _y);
            this.dx = Math.random() * 3.5; //geschwindigkeit und richtung x pro timeout
            this.dy = Math.random() * 3.5; //geschwindigkeit und richtung y pro timeout
            this.color = "black";
        }


        move(): void {
            if (this.y > 590 || this.y < 10) {  //abprallen von der y kante
                this.dy -= this.dy * 2;
            }
            if (this.x > 790 || this.x < 10) { //abprallen von der x kante
                this.dx -= this.dx * 2;
            }
            this.x += this.dx;
            this.y += this.dy;
        }

        draw(): void {
          
            crc2.fillStyle = this.color;       
            crc2.beginPath();
            crc2.arc(this.x, this.y, 15, 0, 2 * Math.PI);
            crc2.fill();
            crc2.closePath();
            crc2.moveTo(this.x + 30, this.y);
            crc2.lineTo(this.x - 25, this.y - 10);
            crc2.lineTo(this.x - 25, this.y + 10);
            crc2.closePath();
            crc2.fill();
            crc2.beginPath();
            crc2.arc(this.x + 5, this.y - 5, 5, 0, 2 * Math.PI);
            crc2.fillStyle = "white";
            crc2.fill();
            crc2.closePath();
            crc2.beginPath();
            crc2.arc(this.x + 5, this.y - 5, 2, 0, 2 * Math.PI);
            crc2.fillStyle = "black";
            crc2.fill();
            crc2.closePath();
        }
    }
}