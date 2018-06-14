var constraints = {
    audio: false,
    video: {
        facingMode:
            {
                exact: "environment"
            }
    }
}
const codeReader = new ZXing.BrowserQRCodeReader()
var video = document.getElementById('video');
var canvas = document.createElement('canvas');
var errorDiv = document.getElementById('div-errors');
var urlMedia

if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
     navigator.mediaDevices.getUserMedia(constraints)
     .then(function (stream) {
         urlMedia = window.URL.createObjectURL(stream)
         video.src = urlMedia;
         video.play();
         canvas.width = video.width;
         canvas.height = video.height;
         
         setTimeout(setPicture, 1000)
     })
     .catch(function(error){
         errorDiv.innerHTML = error
     })
}

document.getElementById("btn-decode").addEventListener("click", function () {
    try {
        setPicture()
        codeReader.decodeFromImage("img").then((result) => {
            errorDiv.innerHTML = JSON.stringify(result)

        }).catch((error) => {
            errorDiv.innerHTML = JSON.stringify(error)
        })

    }
    catch (error) {
        errorDiv.innerHTML = JSON.stringify(error)
    }
});

function setPicture() {
    var ctx = canvas.getContext('2d');
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    var dataURI = canvas.toDataURL('image/jpeg');
    document.getElementById("img-div").innerHTML = '<img id="img" style="display:none;" width="' + video.width + '" height="' + video.height + '" src="' + dataURI + '"/>'
}

//setInterval(function(){
//    img.src = 'qrcode.png?date=' + new Date().getTime();    
//},500)
