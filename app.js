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
         var ctx = canvas.getContext('2d');
         ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
         var dataURI = canvas.toDataURL('image/jpeg');
         document.getElementById("img-div").innerHTML = '<img id="img" width="640" height="480" src="' + dataURI + '"/>'
     })
     .catch(function(error){
         errorDiv.innerHTML = error
     })
}

document.getElementById("btn-decode").addEventListener("click", function () {
    try {
        //var canvas = document.createElement('canvas');
        //canvas.width = video.width;
        //canvas.height = video.height;
        //var ctx = canvas.getContext('2d');
        //ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
        //var dataURI = canvas.toDataURL('image/jpeg');
        
        //img.width = video.width;
        //img.height = video.height;

        var dataURI = canvas.toDataURL('image/jpeg');
        document.getElementById("img-div").innerHTML = '<img id="img" width="640" height="480" src="' + data

        //$("img").attr("src", "qrcode.png")
        codeReader.decodeFromImage("img").then((result) => {
            console.log(result)
            console.log(JSON.stringify(result))
            errorDiv.innerHTML = JSON.stringify(result)

        }).catch((error) => {
            errorDiv.innerHTML = JSON.stringify(error)
        })

    }
    catch (error) {
        errorDiv.innerHTML = JSON.stringify(error)
    }
});


//setInterval(function(){
//    img.src = 'qrcode.png?date=' + new Date().getTime();    
//},500)
