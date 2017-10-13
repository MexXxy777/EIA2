window.addEventListener("load", init);
function init() {
    let canvas = document.getElementsByTagName("canvas")[0];
    console.log(canvas);
    let crc2 = canvas.getContext("2d");
    console.log(crc2);
    crc2.fillStyle = "#b2dfee";
    crc2.fillRect(0, 0, 1000, 600);
    crc2.beginPath();
    crc2.moveTo(0, 100);
    crc2.lineTo(1250, 600);
    crc2.lineTo(0, 600);
    crc2.closePath();
    crc2.stroke();
    crc2.fillStyle = "#ffffaf";
    crc2.fill();
    /*Berge Links*/
    crc2.beginPath();
    crc2.moveTo(600, 100);
    crc2.lineTo(800, 420);
    crc2.lineTo(500, 300);
    crc2.closePath();
    crc2.stroke();
    crc2.fillStyle = "#888888";
    crc2.fill();
    /*Berge Rechts*/
    crc2.beginPath();
    crc2.moveTo(800, 200);
    crc2.lineTo(950, 480);
    crc2.lineTo(700, 380);
    crc2.closePath();
    crc2.stroke();
    crc2.fillStyle = "#888888";
    crc2.fill();
    crc2.beginPath();
    crc2.moveTo(800, 200);
    crc2.lineTo(700, 380);
    crc2.strokeStyle = "#888888";
    crc2.stroke();
    /*Sonne*/
    crc2.beginPath();
    crc2.arc(700, 100, 40, 0, 2 * Math.PI);
    crc2.fillStyle = "#FFFF00";
    crc2.fill();
    /*Eis links*/
    crc2.beginPath();
    crc2.arc(589, 150, 15, 0, Math.PI);
    crc2.arc(614, 148, 20, 0, Math.PI);
    crc2.fillStyle = "#ffffff";
    crc2.fill();
    crc2.beginPath();
    crc2.moveTo(600, 99);
    crc2.lineTo(635, 150);
    crc2.lineTo(573, 150);
    crc2.closePath();
    crc2.fillStyle = "#ffffff";
    crc2.fill();
    /*Eis rechts*/
    crc2.beginPath();
    crc2.arc(789, 250, 20, 0, Math.PI);
    crc2.arc(814, 250, 15, 0, Math.PI);
    crc2.fillStyle = "#ffffff";
    crc2.fill();
    crc2.beginPath();
    crc2.moveTo(800, 200);
    crc2.lineTo(830, 250);
    crc2.lineTo(769, 250);
    crc2.closePath();
    crc2.fillStyle = "#ffffff";
    crc2.fill();
    /*
    crc2.beginPath();
    crc2.moveTo(0, 0);
    crc2.bezierCurveTo(20,100,200,100,300,20)
    crc2.stroke();
    */
}
//# sourceMappingURL=skipiste.js.map