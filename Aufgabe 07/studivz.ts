/*Aufgabe: (07 StudiVZ)
Name: (Maximilian Braun)
Matrikel: (256301)
Datum: (03.12.2017)
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.*/

namespace StudiVZ {
    interface StudentData {
        vorname: string;
        name: string;
        alter: number;
        geschlecht: boolean;
        matrikelnummer: number;
        kommentar: string;
        // hier ist noch die richtige Datenstruktur festzulegen -- erledigt
    }
    var students: StudentData[] = [];
    var stop: boolean = false;

    while (!stop) {
        var action: string = prompt("Datensatz anlegen (n), abfragen(a) oder Programm beenden (s)\nn,a oder s eingeben");

        switch (action) {
            case "n":
            case "N":
                var input: string = prompt("Eingabe (jeweils mit Komma getrennt) von\nMatrikelnummer, Vorname, Name, Alter, Geschlecht (0 für mÃ¤nnchen oder 1 für weibchen) und Kommentar");
                alert(saveData(input));
                break;
            case "a":
            case "A":
                var matrikel: number = parseInt(prompt("Eingabe Matrikelnummer"));
                alert(queryData(matrikel));
                break;
            case "s":
            case "S":
                stop = true;
        }
    }

    function saveData(_input: string): string {
        let res = _input.split(",", 6); //String Methode Input Split

        if (parseInt(res[0]) == NaN)
        { return "Bitte geben Sie Ihre Matrikelnummer ein" }
        else if ((res[1]) == "")
        { return "Bitte geben Sie Ihren Vornamen ein" }
        else if ((res[2]) == "")
        { return "Bitte geben Sie Ihren  Nachnamen ein!" }
        else if (parseInt(res[3]) == NaN)
        { return "Bitte geben Sie Ihr Alter ein" }
        else if (parseInt(res[4]) != 0 && parseInt(res[4]) != 1)
        { return "Bitte geben Sie Ihr Geschlecht an" }
        else if ((res[5]) == "")
        { return "Bitte geben Sie einen Kommentar ein" }

        else {
            var student: StudentData = {
                matrikelnummer: parseInt(res[0]),
                vorname: res[1],
                name: res[2],
                alter: parseInt(res[3]),
                geschlecht: parseInt(res[4]) == 1, //Abspeicherung von 1=richtig resultiert 0=Falsch
                kommentar: res[5]
            };

            students.push(student);
            console.log(students);
            return "Ihre Daten wurden gespeichert";
        }
    }
    function queryData(_matrikel: number): string {
        for (var i: number = 0; i < students.length; i++) {
            if (students[i].matrikelnummer == _matrikel) {

                let gender: string;

                if (students[i].geschlecht)
                    gender = "weibchen";
                else
                    gender = "mÃ¤nnchen";

                return students[i].matrikelnummer + " " + students[i].vorname + " " + students[i].name + " " + students[i].alter + " " + gender + " " + students[i].kommentar;
            }
        }
    }

}