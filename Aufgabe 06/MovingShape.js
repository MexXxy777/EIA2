/*Aufgabe: (06 SuperClass)
Name: (Maximilian Braun)
Matrikel: (256301)
Datum: (26.11.2017)
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.*/
var aufgabe6;
(function (aufgabe6) {
    class MovingShape {
        constructor(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
        ;
        update() {
            this.moveAndDrawObject();
        }
        moveAndDrawObject() {
            // Funktion in Movingshape 
        }
        ;
    }
    aufgabe6.MovingShape = MovingShape;
})(aufgabe6 || (aufgabe6 = {}));
//# sourceMappingURL=MovingShape.js.map