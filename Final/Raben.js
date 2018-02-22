var FINAL;
(function (FINAL) {
    class RavenObjects extends FINAL.MovingObjects {
        constructor(_x, _y) {
            super(_x, _y);
            this.dx = Math.random() * 3;
            this.dy = Math.random() * 3;
            this.color = "black";
        }
        move() {
            if (this.y > 590 || this.y < 10) {
                this.dy -= this.dy * 2;
            }
            if (this.x > 1190 || this.x < 10) {
                this.dx -= this.dx * 2;
            }
            this.x += this.dx;
            this.y += this.dy;
        }
        draw() {
            FINAL.crc2.fillStyle = this.color;
            FINAL.crc2.beginPath();
            FINAL.crc2.arc(this.x, this.y, 15, 0, 2 * Math.PI);
            FINAL.crc2.fill();
            FINAL.crc2.closePath();
            FINAL.crc2.moveTo(this.x + 30, this.y);
            FINAL.crc2.lineTo(this.x - 25, this.y - 10);
            FINAL.crc2.lineTo(this.x - 25, this.y + 10);
            FINAL.crc2.closePath();
            FINAL.crc2.fill();
            FINAL.crc2.beginPath();
            FINAL.crc2.arc(this.x + 5, this.y - 5, 5, 0, 2 * Math.PI);
            FINAL.crc2.fillStyle = "white";
            FINAL.crc2.fill();
            FINAL.crc2.closePath();
            FINAL.crc2.beginPath();
            FINAL.crc2.arc(this.x + 5, this.y - 5, 2, 0, 2 * Math.PI);
            FINAL.crc2.fillStyle = "black";
            FINAL.crc2.fill();
            FINAL.crc2.closePath();
        }
    }
    FINAL.RavenObjects = RavenObjects;
})(FINAL || (FINAL = {}));
//# sourceMappingURL=Raben.js.map