/*
Aufgabe: (Abschlussaufgabe EIA2)
Name: (Maximilian Braun)
Matrikel: (256301)
Datum: (23.02.2018)
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.*/
var FINAL;
(function (FINAL) {
    class MovingObjects {
        constructor(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
        update() {
            this.move();
            this.draw();
        }
        move() {
            //Platzhalter
        }
        draw() {
            //Platzhalter
        }
    }
    FINAL.MovingObjects = MovingObjects;
})(FINAL || (FINAL = {}));
//# sourceMappingURL=MoveObjects.js.map