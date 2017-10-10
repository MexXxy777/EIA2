window.addEventListener("load", init);

function init(): void {
    let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
    console.log(canvas);

    let crc2: CanvasRenderingContext2D = canvas.getContext("2d");
    console.log(crc2);

    crc2.fillStyle = "#ff0000";
    crc2.fillRect(0, 0, 400, 300);

    crc2.beginPath();
    crc2.moveTo(0, 0);
    crc2.lineTo(400, 300);
    crc2.stroke();

    crc2.beginPath();
    crc2.moveTo(100, 100);
    crc2.lineTo(120, 130);
    crc2.lineTo(80, 130);
    crc2.closePath();
    crc2.stroke();
    crc2.fillStyle = "#0000ff";
    crc2.fill();

    crc2.beginPath();
    crc2.arc(200, 50, 40, 0, 2 * Math.PI);
    crc2.fill();
}