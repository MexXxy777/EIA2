/*
Aufgabe: (Abschlussaufgabe EIA2)
Name: (Maximilian Braun)
Matrikel: (256301)
Datum: (23.02.2018)
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.*/
namespace FINAL {
    export class MovingObjects {
        
        x: number; //X-pos
        y: number; //Y-pos
        dx: number; //X-richtung
        dy: number; //Y-richtung
        color: string; //farbe

        constructor(_x: number, _y: number) {
            this.x = _x;
            this.y = _y;
        }
        update(): void {
            this.move();
            this.draw();
        }
        move(): void {
            //Platzhalter
        }

        draw(): void {
            //Platzhalter
        }
    }
}