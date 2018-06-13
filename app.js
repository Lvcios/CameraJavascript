var constraints = {
    audio: false,
    video: {
        facingMode:
            {
                exact: "environment"
            }
    }
}

var video = document.getElementById('video');

if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
     navigator.mediaDevices.getUserMedia(constraints)
     .then(function(stream) {
         video.src = window.URL.createObjectURL(stream);
         video.play();
     })
     .catch(function(error){
         document.getElementById("div-errors").innerHTML = ''
         document.getElementById("div-errors").innerHTML = error
     })
}