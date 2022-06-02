var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function start()
{
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}

recognition.onresult = function(event) {
    console.log(event);
    var content = event.results[0][0].transcript;
    console.log(content);

    document.getElementById("textbox").innerHTML = content;
    if(content == "take my selfie") 
    {
        console.log("Demon Slayer --- ")
        speak();
    }

}

function speak()
{
    var sy = window.speechSynthesis;
    var speak_data = "Taking your selfie in 5 seconds";
    var s = new SpeechSynthesisUtterance(speak_data);
    sy.speak(s);
    Webcam.attach(camera);

    setTimeout(function()
    {
        take_snapshot();
        save();
    },5000);
}

Webcam.set({
    width: 400,
    height: 300,
    image_format: 'png',
    png_quality: 100
});

camera = document.getElementById("camera");

function take_snapshot() 
{
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="selfie_image" src = "'+data_uri+'">';
    });
}

function save() 
{
    link = document.getElementById("link");
    image = document.getElementById("selfie_image").src;
    link.href = image;
    link.click();
}