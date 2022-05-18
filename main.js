leftWristX=0;
leftWristY=0;
rightWristX=0;
rightWristY=0;
song=""
song1="";

function preload(){
    song=loadSound("rickroll.mp3");
    song1=loadSound("sovietmarch.mp3");
}

function modelLoaded(){
    console.log('PoseNet is Initialized');
}

function setup(){
    canvas=createCanvas(500,500);
    canvas.center();

    video=createCapture(VIDEO);
    video.hide();

    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function gotPoses(results){
    if(results.length>0){

        leftWristX=results[0].pose.leftWrist.x;
        leftWristY=results[0].pose.leftWrist.y;
        console.log("leftWristX = "+leftWristX+"leftWristY = "+leftWristY);

        rightWristX=results[0].pose.rightWrist.x;
        rightWristX=results[0].pose.rightWrist.y;
        console.log("rightWristX = "+rightWristX+"rightWristY = "+rightWristY);
    }
}

function draw(){
    image(video, 0, 0, 600, 500)
}