var aufgabe5;
(function (aufgabe5) {
    class InterFlocke {
        constructor(_x, _y, _dx, _dy, _color) {
            this.x = _x;
            this.y = _y;
            this.dx = _dx;
            this.dy = _dy;
            this.color = _color;
        }
        moveAndDrawSnow() {
            if (this.y > 600) {
                this.y = 0;
            }
            ;
            this.x += this.dx;
            this.y += this.dy;
            aufgabe5.crc2.beginPath();
            aufgabe5.crc2.arc(this.x, this.y, 6, 0, 2 * Math.PI);
            aufgabe5.crc2.fillStyle = "white";
            aufgabe5.crc2.fill();
            aufgabe5.crc2.arc(this.x, this.y, 6, 0, 2 * Math.PI);
            aufgabe5.crc2.lineWidth = 1;
            aufgabe5.crc2.strokeStyle = "grey";
            aufgabe5.crc2.stroke();
        }
    }
    aufgabe5.InterFlocke = InterFlocke;
})(aufgabe5 || (aufgabe5 = {}));
//# sourceMappingURL=InterFlocke.js.map