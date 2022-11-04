var prediction1="";
var prediction2="";
Webcam.set({
    width:300,
    height:300,
    image_format:'png',
    png_quality:90
});
var camera=document.getElementById("camera");
Webcam.attach('#camera');
function take_snapshot(){
    Webcam.snap(function(data_uri){
    document.getElementById("result").innerHTML='<img id="capture_image" src="'+data_uri+'"/>';
    });
}
console.log("ml5 version : ",ml5.version);