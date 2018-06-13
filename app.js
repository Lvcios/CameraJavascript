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
var urlMedia 
if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
     navigator.mediaDevices.getUserMedia(constraints)
     .then(function (stream) {
         urlMedia = window.URL.createObjectURL(stream)
         video.src = urlMedia;
         video.play();
         qrcode.decode(urlMedia)
         qrcode.callback = read;
     })
     .catch(function(error){
         document.getElementById("div-errors").innerHTML = ''
         document.getElementById("div-errors").innerHTML = error
     })
}


$("#btn-decode").click(function (event) {
    try{
        qrcode.decode(urlMedia)
        qrcode.callback = read;
    }
    catch (error) {
        document.getElementById("div-errors").innerHTML = error
    }
})
