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
var img = document.getElementById('img')
var errorDiv = document.getElementById('div-errors');
var urlMedia

if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
     navigator.mediaDevices.getUserMedia(constraints)
     .then(function (stream) {
         urlMedia = window.URL.createObjectURL(stream)
         video.src = urlMedia;
         video.play();
     })
     .catch(function(error){
         errorDiv.innerHTML = error
     })
}

document.getElementById("btn-decode").addEventListener("click", function () {
    try {
        var canvas = document.createElement('canvas');
        canvas.width = 640;
        canvas.height = 480;
        var ctx = canvas.getContext('2d');
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
        var dataURI = canvas.toDataURL('image/jpeg');

        img.src = dataURI

        codeReader.decodeFromImage(img).then((result) => {
            errorDiv.innerHTML = result.text
        }).catch((err) => {
            errorDiv.innerHTML = err
        })
    }
    catch (error) {
        errorDiv.innerHTML = error
    }
});
