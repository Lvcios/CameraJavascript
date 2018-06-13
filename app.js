var constraints = {
    audio: false,
    video: {
        facingMode:
            {
                exact: "environment"
            }
    }
}


function htmlEntities(str) {
    return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}


function read(a) {
    try{
        var html = "<br>";
        if (a.indexOf("http://") === 0 || a.indexOf("https://") === 0)
            html += "<a target='_blank' href='" + a + "'>" + a + "</a><br>";
        html += "<b>" + htmlEntities(a) + "</b><br><br>";
        document.getElementById("div-result").innerHTML = "Resultado: ";
        document.getElementById("div-result").innerHTML += html;
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
