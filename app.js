var constraints = {
    audio: false,
    video: {
        facingMode:
            {
                exact: "environment"
            }
    }
}


function read(a) {
    try{
        document.getElementById("div-result").innerHTML = "Resultado: ";
        document.getElementById("div-result").innerHTML += a;
    }
    catch (error) {
        document.getElementById("div-errors").innerHTML = error
    }
}

var video = document.getElementById('video');
var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');

var urlMedia 
if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
     navigator.mediaDevices.getUserMedia(constraints)
     .then(function (stream) {
         urlMedia = window.URL.createObjectURL(stream)
         video.src = urlMedia;
         video.play();
     })
     .catch(function(error){
         document.getElementById("div-errors").innerHTML = ''
         document.getElementById("div-errors").innerHTML = error
     })
}

document.getElementById("btn-decode").addEventListener("click", function () {
    try{
        context.drawImage(video, 0, 0);
        qrcode.decode(canvas.toDataURL())
        qrcode.callback = read
    }
    catch (error) {
        document.getElementById("div-errors").innerHTML = ''
        document.getElementById("div-errors").innerHTML = error
    }
});
