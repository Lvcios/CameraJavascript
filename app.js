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

function initCanvas(w, h) {
    gCanvas = document.getElementById("qr-canvas");
    gCanvas.style.width = w + "px";
    gCanvas.style.height = h + "px";
    gCanvas.width = w;
    gCanvas.height = h;
    gCtx = gCanvas.getContext("2d");
    gCtx.clearRect(0, 0, w, h);
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

function captureToCanvas() {
    if (stype != 1)
        return;
    if (gUM) {
        try {
            gCtx.drawImage(v, 0, 0);
            try {
                qrcode.decode();
            }
            catch (e) {
                console.log(e);
                setTimeout(captureToCanvas, 500);
            };
        }
        catch (e) {
            console.log(e);
            setTimeout(captureToCanvas, 500);
        };
    }
}

function setwebcam() {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia(constraints)
        .then(function (stream) {
            video.src = window.URL.createObjectURL(stream);
            video.play();
            qrcode.decode(window.URL.createObjectURL(stream))

        })
        .catch(function (error) {
            document.getElementById("div-errors").innerHTML = ''
            document.getElementById("div-errors").innerHTML = error
        })

        setTimeout(captureToCanvas, 500);
    }
    else {
        console.log("no navigator.mediaDevices.enumerateDevices");
        setwebcam2(options);
    }

}




function load() {
    if (isCanvasSupported() && window.File && window.FileReader) {
        initCanvas(800, 600);
        qrcode.callback = read;
        setwebcam();
    }
    else {
        document.getElementById("mainbody").style.display = "inline";
        document.getElementById("mainbody").innerHTML = '<p id="mp1">QR code scanner for HTML5 capable browsers</p><br>' +
        '<br><p id="mp2">sorry your browser is not supported</p><br><br>' +
        '<p id="mp1">try <a href="http://www.mozilla.com/firefox"><img src="firefox.png"/></a> or <a href="http://chrome.google.com"><img src="chrome_logo.gif"/></a> or <a href="http://www.opera.com"><img src="Opera-logo.png"/></a></p>';
    }
}