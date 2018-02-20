var final;
(function (final) {
    class Clouds extends final.MoveThat {
        constructor(_x, _y, _dx, _dy, _color) {
            super(_x, _y);
            this.dx = _dx;
            this.dy = _dy;
            this.color = _color;
        }
        moveAndDrawObject() {
            if (this.x > 1280) {
                this.x = 0;
            }
            this.x += this.dx;
            this.y += this.dy;
            final.crc2.beginPath();
            final.crc2.arc(this.x, this.y, 15, 0, 2 * Math.PI);
            final.crc2.arc(this.x - 40, this.y, 15, 0, 2 * Math.PI);
            final.crc2.arc(this.x - 20, this.y - 5, 18, 0, 2 * Math.PI);
            final.crc2.fillStyle = "white";
            final.crc2.fill();
        }
    }
    final.Clouds = Clouds;
})(final || (final = {}));
//# sourceMappingURL=Clouds.js.map