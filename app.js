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
var img = document.getElementById('img');
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
        canvas.width = video.width;
        canvas.height = video.height;
        var ctx = canvas.getContext('2d');
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
        var dataURI = canvas.toDataURL('image/jpeg');
        
        img.width = video.width;
        img.height = video.height;
        img.src = dataURI
        codeReader.decodeFromImage(img).then((result) => {
            console.log(result)
            console.log(JSON.stringify(result))
            errorDiv.innerHTML = JSON.stringify(result)
            img.src = 'qrcode.png'
        }).catch((error) => {
            errorDiv.innerHTML = JSON.stringify(error)
        })
    }
    catch (error) {
        errorDiv.innerHTML = JSON.stringify(error)
    }
});
