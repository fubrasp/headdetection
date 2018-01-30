
var videoInput = document.getElementById('inputVideo');
var cnv = document.getElementById('inputCanvas')
var ctx = cnv.getContext('2d');
cnv.style.position = "absolute";
cnv.style.top = '0px';
cnv.style.zIndex = '100001';
cnv.style.display = 'block';
document.addEventListener("headtrackrStatus", function(event) {
    var messagep = document.getElementById('headtrackerMessage');
    messagep.innerHTML =" >> "+ event.status ;
}, true);

var htracker = new headtrackr.Tracker( );
htracker.init(videoInput, cnv);
htracker.start();
document.addEventListener("facetrackingEvent", function( event ) {

    var imgFace = new Image();
    imgFace.src = 'images/ours.jpg';
    ctx.drawImage(imgFace, event.x-70, event.y-100);

    var messagep = document.getElementById('headtrackerMessage');
    messagep.innerHTML="position: ("+ event.x+","+event.y+ ") - h:"+event.height+ ", w:" + event.width; });

select = document.getElementById('css-filters'); // or in jQuery use: select = this;
select.addEventListener('change', function () {
    cnv.style.filter = select.value
});

(function() {
    "use strict";

    var video, $output;
    var scale = 0.25;

    var initialize = function() {
        $output = $("#output");
        video = $("#inputVideo").get(0);
        $("#capture").click(captureImage);
    };

    var captureImage = function() {

        var img = document.createElement("img");
        img.src = cnv.toDataURL();
        img.style.filter = $("#css-filters").val();
        $output.prepend(img);
    };

    $(initialize);

}());


