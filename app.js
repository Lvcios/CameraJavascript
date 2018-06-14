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

setPicture()

if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
     navigator.mediaDevices.getUserMedia(constraints)
     .then(function (stream) {
         urlMedia = window.URL.createObjectURL(stream)
         video.src = urlMedia;
         video.play();
         canvas.width = video.width;
         canvas.height = video.height;
         
         setPicture()
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
    var dataURI = canvas.toDataURL('image/png');
    //var dataURI = 'data:image/png;base64,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'
    //var dataURI = 'qrcode.png'
    //var dataURI = 'qr-code.jpg'
    document.getElementById("img-div").innerHTML = '<img id="img" style="display:block;" width="' + video.width + '" height="' + video.height + '" src="' + dataURI + '"/>'
    document.getElementById("div-data").innerHTML = "DATA: " + document.getElementById("img").getAttribute("src")
}

//setInterval(function(){
//    img.src = 'qrcode.png?date=' + new Date().getTime();    
//},500)
