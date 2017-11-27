/*
Aufgabe: (06 SuperClass)
Name: (Maximilian Braun)
Matrikel: (256301)
Datum: (26.11.2017)
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.*/

namespace aufgabe6 {

    export class InterFlocke extends MovingShape {
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
             if (this.y > 600) {
                this.y = 0;
            };
            this.x += this.dx;
            this.y += this.dy;
            crc2.beginPath();
            crc2.arc(this.x, this.y, 6, 0, 2 * Math.PI);
            crc2.fillStyle = "white";
            crc2.fill();
            crc2.arc(this.x, this.y, 6, 0, 2 * Math.PI);
            crc2.lineWidth = 1;
            crc2.strokeStyle = "grey";
            crc2.stroke();

        }
    }







}