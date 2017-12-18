/*Aufgabe: (07 StudiVZ)
Name: (Maximilian Braun)
Matrikel: (256301)
Datum: (03.12.2017)
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.*/
var StudiVZ;
(function (StudiVZ) {
    var students = [];
    var stop = false;
    while (!stop) {
        var action = prompt("Datensatz anlegen (n), abfragen(a) oder Programm beenden (s)\nn,a oder s eingeben");
        //aktion durch eingabefenster nimmt string entgegen
        switch (action) {
            case "n":
            case "N":
                var input = prompt("Eingabe (jeweils mit Komma getrennt) von\nMatrikelnummer, Vorname, Name, Alter, Geschlecht (0 fuer männchen oder 1 fuer weibchen) und Kommentar");
                alert(saveData(input));
                break; //break gibt den wert aus
            case "a":
            case "A":
                var matrikel = parseInt(prompt("Eingabe Matrikelnummer"));
                alert(queryData(matrikel));
                break;
            case "s":
            case "S":
                stop = true;
        }
    }
    function saveData(_eingabe) {
        let save = _eingabe.split(",", 6); //String Methode Input Split
        if (parseInt(save[0]) == NaN) {
            return "Bitte geben Sie Ihre Matrikelnummer ein";
        }
        else if ((save[1]) == "") {
            return "Bitte geben Sie Ihren Vornamen ein";
        }
        else if ((save[2]) == "") {
            return "Bitte geben Sie Ihren  Nachnamen ein!";
        }
        else if (parseInt(save[3]) == NaN) {
            return "Bitte geben Sie Ihr Alter ein";
        }
        else if (parseInt(save[4]) != 0 && parseInt(save[4]) != 1) {
            return "Bitte geben Sie Ihr Geschlecht an";
        }
        else if ((save[5]) == "") {
            return "Bitte geben Sie einen Kommentar ein";
        }
        else {
            var student = {
                matrikelnummer: parseInt(save[0]),
                vorname: save[1],
                name: save[2],
                alter: parseInt(save[3]),
                geschlecht: parseInt(save[4]) == 1,
                kommentar: save[5]
            };
            students.push(student);
            console.log(students);
            return "Ihre Daten wurden gespeichert";
        }
    }
    function queryData(_matrikelnr) {
        for (var i = 0; i < students.length; i++) {
            if (students[i].matrikelnummer == _matrikelnr) {
                let gender;
                if (students[i].geschlecht)
                    gender = "weibchen";
                else
                    gender = "männchen";
                return students[i].matrikelnummer + " " + students[i].vorname + " " + students[i].name + " " + students[i].alter + " " + gender + " " + students[i].kommentar;
            }
        }
    }
})(StudiVZ || (StudiVZ = {}));
//# sourceMappingURL=studivz.js.map