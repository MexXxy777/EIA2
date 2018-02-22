namespace FINAL {

    export class BalloonObjects extends MovingObjects {

        dx: number; //X-Richtung
        dy: number; //Y-Richtung
        color: string;

        constructor(_x: number, _y: number) {
            super(_x, _y);
            this.dx = Math.random() * 3;
            this.dy = Math.random() * 3;
            this.color = "blue";
        }

        move(): void {
            if (this.y > 540 || this.y < 50) {
                this.dy -= this.dy * 2;
            }
            if (this.x > 1140 || this.x < 50) {
                this.dx -= this.dx * 2;
            }
            this.x += this.dx;
            this.y += this.dy;
        }


        draw(): void {
            crc2.beginPath();
            crc2.arc(this.x, this.y, 30, 0, 2 * Math.PI);
            crc2.fillStyle = this.color;
            crc2.fill();
            crc2.beginPath();
            crc2.moveTo(this.x, this.y + 25);
            crc2.lineTo(this.x + 15, this.y + 40);
            crc2.lineTo(this.x - 15, this.y + 40);
            crc2.stroke();
            crc2.fill();
            crc2.beginPath();
            crc2.arc(this.x - 10, this.y + 5, 4, 0, 2 * Math.PI);
            crc2.stroke();
            crc2.fillStyle = "black";
            crc2.fill();
            crc2.beginPath();
            crc2.arc(this.x + 10, this.y + 5, 4, 0, 2 * Math.PI);
            crc2.stroke();
            crc2.fill();

        }
    }
}