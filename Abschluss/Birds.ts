namespace final {

    export class Birds extends MoveThat {
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

            if (this.x > 1280) {
                this.x = 0;
                this.y = 100 + Math.random() * 450;
            }
            this.x += this.dx;
            crc2.beginPath();
            crc2.arc(this.x, this.y, 15, 0, 2 * Math.PI);
            crc2.fillStyle = "black";
            crc2.fill();
            crc2.closePath();
            crc2.moveTo(this.x + 30, this.y);
            crc2.lineTo(this.x - 25, this.y - 10);
            crc2.lineTo(this.x - 25, this.y + 10);
            crc2.closePath();
            crc2.fillStyle = "black";
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