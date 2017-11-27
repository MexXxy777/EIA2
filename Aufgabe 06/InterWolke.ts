/*
Aufgabe: (06 SuperClass)
Name: (Maximilian Braun)
Matrikel: (256301)
Datum: (26.11.2017)
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.*/

namespace aufgabe6 {

    export class InterWolke extends MovingShape {
        dx: number;
        dy: number;
        color: string;

        constructor(_x: number, _y: number, _dx: number, _dy: number, _color: string) {
            super(_x, _y);
            this.dx = _dx;
            this.dy = _dy;
            this.color = _color;

        }

        moveAndDrawObject(): void {
              if (this.x > 1000) {
                this.x = 0;
            }
        this.x += this.dx;
        this.y += this.dy;
        crc2.beginPath();
        crc2.arc(this.x, this.y, 15, 0, 2 * Math.PI);
        crc2.arc(this.x - 40, this.y, 15, 0, 2 * Math.PI);
        crc2.arc(this.x - 20, this.y - 5, 18, 0, 2 * Math.PI);
        crc2.fillStyle = "white";
        crc2.fill();

        }
    }







}