/*Aufgabe: (10 FormElements: Weihnachtsbaumkonfigurator)
Name: (Maximilian Braun)
Matrikel: (256301)
Datum: (07.01.2018)
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.*/

namespace aufgabe10 {
    window.addEventListener("load", createForms);
    window.addEventListener("change", schubkarre);

    var name: HTMLInputElement;
    var strasse: HTMLInputElement;
    var hausnr: HTMLInputElement;
    var ort: HTMLInputElement;
    var plz: HTMLInputElement;
    var email: HTMLInputElement;
    var zusatz: HTMLTextAreaElement;
    var label: HTMLLabelElement;

    var karrenSorte: string[] = [sort[0][0], "" + sort[0][1]];
    var karrenHalter: string[] = ["bitte Halter auswählen", "0"];
    var karrenBeleuchtung: string[] = [light[0][0], "" + light[0][1]];
    var karrenSchmuck: string[][] = [];
    var karrenLieferung: string[] = ["bitte Lieferung auswählen", "0"];

    function createForms(): void {
        let sorte: HTMLDivElement = <HTMLDivElement>document.getElementById("sorte");
        let select: HTMLSelectElement = document.createElement("select");
        select.name = "SelectBaumart";
        select.id = "selectBaumart";
        sorte.appendChild(select);
        for (let i: number = 0; i < artikel.length; i++) {
            if (artikel[i].art == "Sorte") {
                var choice: HTMLElement = document.createElement("option");
                choice.innerText = artikel[i].bezeichnung;
                choice.id = "option" + i;
                select.appendChild(choice);
            }
        }

        //Halterung:
        let halterung: HTMLDivElement = <HTMLDivElement>document.getElementById("halterung");
        for (let i: number = 0; i < artikel.length; i++) {
            if (artikel[i].art == "Halter") {
                var radioB: HTMLInputElement = document.createElement("input");
                radioB.type = "radio";
                radioB.name = "radioGroupHalterung";
                radioB.value = "radio" + i;
                radioB.id = "radio" + i;
                halterung.appendChild(radioB);

                label = document.createElement("label");
                label.id = "label" + i;
                label.htmlFor = radioB.id;
                label.innerText = artikel[i].bezeichnung;
                halterung.appendChild(label);
            }
        }

        //Beleuchtung:
        let beleuchtung: HTMLDivElement = <HTMLDivElement>document.getElementById("beleuchtung");
        let selectBox2: HTMLSelectElement = document.createElement("select");
        selectBox2.name = "SelectBeleuchtung";
        selectBox2.id = "selectBeleuchtung";
        beleuchtung.appendChild(selectBox2);
        for (let i: number = 0; i < artikel.length; i++) {

            if (artikel[i].art == "Beleuchtung") {
                var opt2: HTMLElement = document.createElement("option");
                opt2.innerText = artikel[i].bezeichnung;
                opt2.id = "option2." + i;
                selectBox2.appendChild(opt2);
            }
        }

        //Schmuckartikel:
        let schmuckartikel: HTMLDivElement = <HTMLDivElement>document.getElementById("schmuckartikel");
        for (let i: number = 0; i < artikel.length; i++) {
            if (artikel[i].art == "Schmuck") {
                var checkB: HTMLInputElement = document.createElement("input");
                checkB.type = "checkbox";
                checkB.name = "CheckboxSchmuckartikel";
                checkB.value = "check";
                checkB.id = "check" + i;
                schmuckartikel.appendChild(checkB);

                var label2: HTMLLabelElement = document.createElement("label");
                label2.id = "label2." + i;
                label2.htmlFor = checkB.id;
                label2.innerText = artikel[i].bezeichnung;
                schmuckartikel.appendChild(label2);

                let stepper: HTMLInputElement = document.createElement("input");
                stepper.type = "number";
                stepper.name = "StepperSchmuckartikel" + i;
                stepper.value = "1";
                stepper.id = "stepper" + i;
                stepper.min = "0";
                stepper.max = "15";
                stepper.step = "1";
                schmuckartikel.appendChild(stepper);
                var br: HTMLElement = document.createElement("br");
                schmuckartikel.appendChild(br);
            }
        }

        //Deine Daten:
        let daten: HTMLDivElement = <HTMLDivElement>document.getElementById("daten");
        name = document.createElement("input");
        name.type = "text";
        name.name = "DatenName";
        name.placeholder = "Name";
        name.pattern = "[a-zA-Z]{1,}";
        name.required = true;
        daten.appendChild(name);

        strasse = document.createElement("input");
        strasse.type = "text";
        strasse.name = "DatenStrasse";
        strasse.placeholder = "Straße";
        strasse.pattern = "[a-zA-Z]{1,}";
        strasse.required = true;
        daten.appendChild(strasse);

        hausnr = document.createElement("input");
        hausnr.type = "text";
        hausnr.name = "DatenHausnummer";
        hausnr.placeholder = "Hausnummer";
        hausnr.pattern = "[0-9]{1,}";
        hausnr.required = true;
        daten.appendChild(hausnr);

        ort = document.createElement("input");
        ort.type = "text";
        ort.name = "DatenOrt";
        ort.placeholder = "Ort";
        ort.pattern = "[a-zA-Z]{1,}";
        ort.required = true;
        daten.appendChild(ort);

        plz = document.createElement("input");
        plz.type = "text";
        plz.name = "DatenPLZ";
        plz.placeholder = "Postleitzahl";
        plz.pattern = "[0-9]{5}";
        plz.required = true;
        daten.appendChild(plz);

        email = document.createElement("input");
        email.type = "email";
        email.name = "DatenMail";
        email.placeholder = "E-Mail";
        email.required = true;
        daten.appendChild(email);

        zusatz = document.createElement("textarea");
        zusatz.name = "DatenZusatz";
        zusatz.placeholder = "Adresszusatz";
        zusatz.cols = 30;
        zusatz.rows = 3;
        zusatz.required = true;
        zusatz.style.backgroundColor = "lightgrey";
        daten.appendChild(zusatz);

        //Lieferoptionen:
        let lieferopt: HTMLDivElement = <HTMLDivElement>document.getElementById("lieferoptionen");
        for (let i: number = 0; i < artikel.length; i++) {
            if (artikel[i].art == "Lieferung") {
                var radioB2: HTMLInputElement = document.createElement("input");
                radioB2.type = "radio";
                radioB2.name = "radioGroupLieferoptionen";
                radioB2.value = "radio2." + i;
                radioB2.id = "radio2." + i;
                lieferopt.appendChild(radioB2);

                var label3: HTMLLabelElement = document.createElement("label");
                label3.id = "label3." + i;
                label3.htmlFor = radioB2.id;
                label3.innerText = artikel[i].bezeichnung;
                lieferopt.appendChild(label3);
            }
        }

        //Bestellung pr�fen button erstellen
        let button: HTMLDivElement = <HTMLDivElement>document.getElementById("button");
        let submit: HTMLButtonElement = document.createElement("button");
        submit.name = "Button";
        submit.type = "button";
        submit.innerText = "Eingaben prüfen";
        submit.addEventListener("mousedown", handleMouseDown);
        button.appendChild(submit);
    }

    function schubkarre(_event: Event): void {
        let target: HTMLInputElement = <HTMLInputElement>_event.target;
        let stepper: HTMLInputElement[] = [];
        let checkBoxes: HTMLInputElement[] = [];
        let gesamtkosten: number = 0;

        for (let i: number = 0; i < artikel.length; i++) {
            if (artikel[i].art == "Schmuck") {
                stepper[i] = <HTMLInputElement>document.getElementById("stepper" + i);
                checkBoxes[i] = <HTMLInputElement>document.getElementById("check" + i);
            }
            if (target.value == artikel[i].bezeichnung && target.id == "selectBaumart") {
                karrenSorte[0] = artikel[i].bezeichnung;
                karrenSorte[1] = "" + artikel[i].preis;
            }
            if (target.id == "radio" + i) {
                karrenHalter[0] = artikel[i].bezeichnung;
                karrenHalter[1] = "" + artikel[i].preis;

            }
            if (target.id == "radio2." + i) {
                karrenLieferung[0] = artikel[i].bezeichnung;
                karrenLieferung[1] = "" + artikel[i].preis;

            }
            if (target.value == artikel[i].bezeichnung && target.id == "selectBeleuchtung") {
                karrenBeleuchtung[0] = artikel[i].bezeichnung;
                karrenBeleuchtung[1] = "" + artikel[i].preis;

            }
            if (target.id == "check" + i || target.id == "stepper" + i) {
                karrenSchmuck[i] = [artikel[i].bezeichnung, "" + (artikel[i].preis * parseInt(stepper[i].value))];

            }
        }

        let warenkorb: HTMLDivElement = <HTMLDivElement>document.getElementById("bestellung");
        warenkorb.style.width = "30%";
        warenkorb.style.height = "auto";
        warenkorb.style.backgroundColor = "black";
        warenkorb.innerHTML = "<span id='karren'>Schubkarre</span><hr>";
        warenkorb.innerHTML += "Baumsorte: " + karrenSorte[0] + " " + karrenSorte[1] + "0€ <br>";
        warenkorb.innerHTML += "Baumhalterung: " + karrenHalter[0] + " " + karrenHalter[1] + "0€ <br>";
        warenkorb.innerHTML += "Beleuchtung: " + karrenBeleuchtung[0] + " " + karrenBeleuchtung[1] + "0€ <br>";
        warenkorb.innerHTML += "Lieferung: " + karrenLieferung[0] + " " + karrenLieferung[1] + "0€ <br>";

        gesamtkosten = parseFloat(karrenSorte[1]) + parseFloat(karrenBeleuchtung[1]) + parseFloat(karrenHalter[1]) + parseFloat(karrenLieferung[1]);
        for (let i: number = 0; i < stepper.length; i++) {
            if (checkBoxes[i] != null && checkBoxes[i].checked == true) {
                gesamtkosten += parseFloat(karrenSchmuck[i][1]);
                warenkorb.innerHTML += "" + karrenSchmuck[i][0] + " " + karrenSchmuck[i][1] + "0€ <br>";
            }
        }
        warenkorb.innerHTML += "<hr> Gesamtkosten: " + Math.round(gesamtkosten * 100) / 100 + "0€";
    }

    //Pr�fung der eingegebenen Daten
    function handleMouseDown(_event: MouseEvent): void {
        let pruefen: HTMLDivElement = document.createElement("div");
        pruefen.style.paddingBottom = "1em";
        if (name.checkValidity() == false || strasse.checkValidity() == false || hausnr.checkValidity() == false || ort.checkValidity() == false || plz.checkValidity() == false || email.checkValidity() == false) {
            pruefen.innerText = "Bitte überprüfe deine Daten";
            pruefen.style.color = "red";
            document.body.appendChild(pruefen); //Div mit warnung wird erstellt
        }
        else {
            pruefen.innerText = "Vielen Dank, Sie werden nun auf die Bestellseite weitegeleitet!";
            pruefen.style.color = "green";
            document.body.appendChild(pruefen);
        }
    }
}