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
        alert(html)
    }
    catch (error) {
        document.getElementById("div-errors").innerHTML = error
        alert(error)
    }
}

var video = document.getElementById('video');

if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
     navigator.mediaDevices.getUserMedia(constraints)
     .then(function (stream) {
         video.src = window.URL.createObjectURL(stream);
         video.play();
         qrcode.decode(window.URL.createObjectURL(stream))
         
     })
     .catch(function(error){
         document.getElementById("div-errors").innerHTML = ''
         document.getElementById("div-errors").innerHTML = error
     })

     setTimeout(function () {
         qrcode.callback = read;
     }, 1000)
}