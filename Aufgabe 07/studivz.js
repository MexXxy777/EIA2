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
        switch (action) {
            case "n":
            case "N":
                var input = prompt("Eingabe (jeweils mit Komma getrennt) von\nMatrikelnummer, Vorname, Name, Alter, Geschlecht (0 f�r männchen oder 1 f�r weibchen) und Kommentar");
                alert(saveData(input));
                break;
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
    function saveData(_input) {
        let res = _input.split(",", 6); //String Methode Input Split
        if (parseInt(res[0]) == NaN) {
            return "Bitte geben Sie Ihre Matrikelnummer ein";
        }
        else if ((res[1]) == "") {
            return "Bitte geben Sie Ihren Vornamen ein";
        }
        else if ((res[2]) == "") {
            return "Bitte geben Sie Ihren  Nachnamen ein!";
        }
        else if (parseInt(res[3]) == NaN) {
            return "Bitte geben Sie Ihr Alter ein";
        }
        else if (parseInt(res[4]) != 0 && parseInt(res[4]) != 1) {
            return "Bitte geben Sie Ihr Geschlecht an";
        }
        else if ((res[5]) == "") {
            return "Bitte geben Sie einen Kommentar ein";
        }
        else {
            var student = {
                matrikelnummer: parseInt(res[0]),
                vorname: res[1],
                name: res[2],
                alter: parseInt(res[3]),
                geschlecht: parseInt(res[4]) == 1,
                kommentar: res[5]
            };
            students.push(student);
            console.log(students);
            return "Ihre Daten wurden gespeichert";
        }
    }
    function queryData(_matrikel) {
        for (var i = 0; i < students.length; i++) {
            if (students[i].matrikelnummer == _matrikel) {
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