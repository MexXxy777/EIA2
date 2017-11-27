/*
Aufgabe: (06 SuperClass)
Name: (Maximilian Braun)
Matrikel: (256301)
Datum: (26.11.2017)
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.*/

namespace aufgabe6 {

    export class InterSki extends MovingShape {
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
            if (this.x > 1000, this.y > 600) {
                this.x = 0;
                this.y = 150 + Math.random() * 100;
            }
            this.x += this.dx;
            this.y += this.dy;
            crc2.beginPath();
            crc2.arc(this.x, this.y, 6, 0, 2 * Math.PI);
            crc2.fillStyle = "#F79F81";
            crc2.fill();
            crc2.fillStyle = this.color;
            crc2.fillRect(this.x - 4, this.y + 5, 8, 20);
            crc2.beginPath();
            crc2.moveTo(this.x - 20, this.y + 18);
            crc2.lineWidth = 5;
            crc2.lineTo(this.x + 20, this.y + 35);
            crc2.strokeStyle = "black";
            crc2.stroke();
        }
    }







}