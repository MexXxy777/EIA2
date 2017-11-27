/*Aufgabe: (06 SuperClass)
Name: (Maximilian Braun)
Matrikel: (256301)
Datum: (26.11.2017)
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.*/

namespace aufgabe6 {
      export class MovingShape {
        x: number;
        y: number;

        constructor(_x: number, _y: number) {
            this.x = _x;
            this.y = _y;
        };

        update(): void {
            this.moveAndDrawObject();  
        }
        moveAndDrawObject(): void {
        // Funktion in Movingshape 
        };
    }

}