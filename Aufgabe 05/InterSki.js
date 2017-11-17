var aufgabe5;
(function (aufgabe5) {
    class InterSki {
        constructor(_x, _y, _dx, _dy, _color) {
            this.x = _x;
            this.y = _y;
            this.dx = _dx;
            this.dy = _dy;
            this.color = _color;
        }
        moveAndDrawSkier() {
            if (this.x > 1000, this.y > 600) {
                this.x = 0;
                this.y = 150 + Math.random() * 100;
            }
            this.x += this.dx;
            this.y += this.dy;
            aufgabe5.crc2.beginPath();
            aufgabe5.crc2.arc(this.x, this.y, 6, 0, 2 * Math.PI);
            aufgabe5.crc2.fillStyle = "#F79F81";
            aufgabe5.crc2.fill();
            aufgabe5.crc2.fillStyle = this.color;
            aufgabe5.crc2.fillRect(this.x - 4, this.y + 5, 8, 20);
            aufgabe5.crc2.beginPath();
            aufgabe5.crc2.moveTo(this.x - 20, this.y + 18);
            aufgabe5.crc2.lineWidth = 5;
            aufgabe5.crc2.lineTo(this.x + 20, this.y + 35);
            aufgabe5.crc2.strokeStyle = "black";
            aufgabe5.crc2.stroke();
        }
    }
    aufgabe5.InterSki = InterSki;
})(aufgabe5 || (aufgabe5 = {}));
//# sourceMappingURL=InterSki.js.map