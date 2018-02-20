var final;
(function (final) {
    class Birds extends final.MoveThat {
        constructor(_x, _y, _dx, _dy, _color) {
            super(_x, _y);
            this.dx = _dx;
            this.dy = _dy;
            this.color = _color;
        }
        moveAndDrawObject() {
            if (this.x > 1280) {
                this.x = 0;
                this.y = 100 + Math.random() * 450;
            }
            this.x += this.dx;
            final.crc2.beginPath();
            final.crc2.arc(this.x, this.y, 15, 0, 2 * Math.PI);
            final.crc2.fillStyle = "black";
            final.crc2.fill();
            final.crc2.closePath();
            final.crc2.moveTo(this.x + 30, this.y);
            final.crc2.lineTo(this.x - 25, this.y - 10);
            final.crc2.lineTo(this.x - 25, this.y + 10);
            final.crc2.closePath();
            final.crc2.fillStyle = "black";
            final.crc2.fill();
            final.crc2.beginPath();
            final.crc2.arc(this.x + 5, this.y - 5, 5, 0, 2 * Math.PI);
            final.crc2.fillStyle = "white";
            final.crc2.fill();
            final.crc2.closePath();
            final.crc2.beginPath();
            final.crc2.arc(this.x + 5, this.y - 5, 2, 0, 2 * Math.PI);
            final.crc2.fillStyle = "black";
            final.crc2.fill();
            final.crc2.closePath();
        }
    }
    final.Birds = Birds;
})(final || (final = {}));
//# sourceMappingURL=Birds.js.map