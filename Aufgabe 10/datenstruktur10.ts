namespace aufgabe10 {
   
    export interface Waren {
        art: string;
        bezeichnung: string;
        preis: number;
    }

    export let artikel: Waren[] = [
        { art: "Sorte", bezeichnung: "Nordmanntanne", preis: 26.90 },
        { art: "Sorte", bezeichnung: "Schwarzfichte", preis: 34.90 },
        { art: "Sorte", bezeichnung: "Künstlicher Baum", preis: 18.90 },

        { art: "Halter", bezeichnung: "Weihnachtsschuh", preis: 19.90 },
        { art: "Halter", bezeichnung: "Baumstumpf", preis: 24.90 },
        { art: "Halter", bezeichnung: "Metall", preis: 14.90 },

        { art: "Beleuchtung", bezeichnung: "Lichterkette Kaltweiß", preis: 24.90 },
        { art: "Beleuchtung", bezeichnung: "Lichterkette Warmweiß", preis: 29.90 },
        { art: "Beleuchtung", bezeichnung: "ohne Beleuchtung", preis: 0.00 },

        { art: "Schmuck", bezeichnung: "Glaskugeln, dunkle Farben 15 Stück", preis: 9.90 },
        { art: "Schmuck", bezeichnung: "Glaskugeln, helle Farben 15 Stück", preis: 9.90 },
        { art: "Schmuck", bezeichnung: "Plastikkugeln, helle Farben 15 Stück", preis: 4.90 },
        { art: "Schmuck", bezeichnung: "Plastikkugeln, dunkle Farben 15 Stück", preis: 3.90 },

        { art: "Lieferung", bezeichnung: "Standard", preis: 0.00 },
        { art: "Lieferung", bezeichnung: "Overnight", preis: 6.90 }
    ];

    export let sort: string[][] = [];
    export let light: string[][] = [];

    for (var i: number = 0; i < artikel.length; i++) {
        if (artikel[i].art == "Sorte") {
            var temp: any = [artikel[i].bezeichnung, artikel[i].preis];
            sort.push(temp);
        }

        if (artikel[i].art == "Beleuchtung") {
            var temp: any = [artikel[i].bezeichnung, artikel[i].preis];
            light.push(temp);
        }
    }
}