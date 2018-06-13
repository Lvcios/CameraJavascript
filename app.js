var constraints = {
    video:true
}

var video = document.getElementById('video');

if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
     navigator.mediaDevices.getUserMedia(constraints)
     .then(function(stream){
         console.log(stream)
     })
    // navigator.mediaDevices.getUserMedia(constraints)
    // .then(function(stream) {
    //     video.src = window.URL.createObjectURL(stream);
    //     video.play();
    // })
    // .catch(function(error){
    //     alert(error)
    // })
}