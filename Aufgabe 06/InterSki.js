/*
Aufgabe: (06 SuperClass)
Name: (Maximilian Braun)
Matrikel: (256301)
Datum: (26.11.2017)
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.*/
var aufgabe6;
(function (aufgabe6) {
    class InterSki extends aufgabe6.MovingShape {
        constructor(_x, _y, _dx, _dy, _color) {
            super(_x, _y);
            this.dx = _dx;
            this.dy = _dy;
            this.color = _color;
        }
        moveAndDrawObject() {
            if (this.x > 1000, this.y > 600) {
                this.x = 0;
                this.y = 150 + Math.random() * 100;
            }
            this.x += this.dx;
            this.y += this.dy;
            aufgabe6.crc2.beginPath();
            aufgabe6.crc2.arc(this.x, this.y, 6, 0, 2 * Math.PI);
            aufgabe6.crc2.fillStyle = "#F79F81";
            aufgabe6.crc2.fill();
            aufgabe6.crc2.fillStyle = this.color;
            aufgabe6.crc2.fillRect(this.x - 4, this.y + 5, 8, 20);
            aufgabe6.crc2.beginPath();
            aufgabe6.crc2.moveTo(this.x - 20, this.y + 18);
            aufgabe6.crc2.lineWidth = 5;
            aufgabe6.crc2.lineTo(this.x + 20, this.y + 35);
            aufgabe6.crc2.strokeStyle = "black";
            aufgabe6.crc2.stroke();
        }
    }
    aufgabe6.InterSki = InterSki;
})(aufgabe6 || (aufgabe6 = {}));
//# sourceMappingURL=InterSki.js.map