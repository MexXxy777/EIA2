var aufgabe5;
(function (aufgabe5) {
    class InterWolke {
        constructor(_x, _y, _dx, _dy, _color) {
            this.x = _x;
            this.y = _y;
            this.dx = _dx;
            this.dy = _dy;
            this.color = _color;
        }
        moveAndDrawCloud() {
            if (this.x > 1000) {
                this.x = 0;
            }
            this.x += this.dx;
            this.y += this.dy;
            aufgabe5.crc2.beginPath();
            aufgabe5.crc2.arc(this.x, this.y, 15, 0, 2 * Math.PI);
            aufgabe5.crc2.arc(this.x - 40, this.y, 15, 0, 2 * Math.PI);
            aufgabe5.crc2.arc(this.x - 20, this.y - 5, 18, 0, 2 * Math.PI);
            aufgabe5.crc2.fillStyle = "white";
            aufgabe5.crc2.fill();
        }
    }
    aufgabe5.InterWolke = InterWolke;
})(aufgabe5 || (aufgabe5 = {}));
//# sourceMappingURL=InterWolke.js.map