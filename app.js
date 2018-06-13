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
    var html = "<br>";
    if (a.indexOf("http://") === 0 || a.indexOf("https://") === 0)
        html += "<a target='_blank' href='" + a + "'>" + a + "</a><br>";
    html += "<b>" + htmlEntities(a) + "</b><br><br>";
    document.getElementById("div-result").innerHTML = html;
}

var video = document.getElementById('video');

if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
     navigator.mediaDevices.getUserMedia(constraints)
     .then(function (stream) {
         var url = window.URL.createObjectURL(stream)
         video.src = url;
         video.play();
         qrcode.decode(url)
         qrcode.callback = read;
     })
     .catch(function(error){
         document.getElementById("div-errors").innerHTML = ''
         document.getElementById("div-errors").innerHTML = error
     })
}



