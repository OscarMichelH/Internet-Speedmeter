var imageUrl = 'https://fastly.picsum.photos/id/877/200/300.jpg?hmac=kxnqPHdYgfVGqD41ArUXpM0IuUCD2GYefTwBboMDVeA';
var startTime, endTime;

// Descarga la imagen y mide el tiempo de descarga
function downloadImage() {
    startTime = performance.now();
    var img = new Image();
    img.onload = function() {
        endTime = performance.now();
        var downloadTime = endTime - startTime;
        showResult(downloadTime, img.src.length);
    };
    img.src = imageUrl;
}

// Muestra la velocidad de descarga en MB/h
function showResult(downloadTime, fileSize) {
    var downloadSpeed = (fileSize / 1024 / 1024) / (downloadTime / 1000 / 60 / 60);
    document.querySelector("#speed-result").innerHTML = downloadSpeed.toFixed(2) + "Mbps";
}

// Inicia la descarga de la imagen
document.addEventListener("DOMContentLoaded", function() {
    downloadImage();
});
