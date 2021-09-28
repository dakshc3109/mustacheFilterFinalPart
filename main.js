 noseX = 0;
 noseY = 0;
 
function preload(){
    mustach = loadImage("https://i.postimg.cc/3x3QzSGq/m.png")
}

function setup(){
    var canvas = createCanvas(500, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log("poseNet is loaded");
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);

        noseX = results[0].pose.nose.x + 83;
        noseY = results[0].pose.nose.y - 0;
        console.log("nose x: " + noseX);
        console.log("nose y: " + noseY);
    }
}

function draw(){
    image(video, 0, 0, 500, 300);
    image(mustach, noseX, noseY, 70, 30)
}


function take_snapshot(){
    save('myFilter.png');
}

