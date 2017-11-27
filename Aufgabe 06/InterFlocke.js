/*
Aufgabe: (06 SuperClass)
Name: (Maximilian Braun)
Matrikel: (256301)
Datum: (26.11.2017)
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.*/
var aufgabe6;
(function (aufgabe6) {
    class InterFlocke extends aufgabe6.MovingShape {
        constructor(_x, _y, _dx, _dy, _color) {
            super(_x, _y);
            this.dx = _dx;
            this.dy = _dy;
            this.color = _color;
        }
        moveAndDrawObject() {
            if (this.y > 600) {
                this.y = 0;
            }
            ;
            this.x += this.dx;
            this.y += this.dy;
            aufgabe6.crc2.beginPath();
            aufgabe6.crc2.arc(this.x, this.y, 6, 0, 2 * Math.PI);
            aufgabe6.crc2.fillStyle = "white";
            aufgabe6.crc2.fill();
            aufgabe6.crc2.arc(this.x, this.y, 6, 0, 2 * Math.PI);
            aufgabe6.crc2.lineWidth = 1;
            aufgabe6.crc2.strokeStyle = "grey";
            aufgabe6.crc2.stroke();
        }
    }
    aufgabe6.InterFlocke = InterFlocke;
})(aufgabe6 || (aufgabe6 = {}));
//# sourceMappingURL=InterFlocke.js.map