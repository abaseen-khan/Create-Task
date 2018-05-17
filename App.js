import React, { Component } from 'react';
import { View, WebView, StatusBar } from 'react-native';

export default class App extends Component {
    render() {

        var webViewCode = `
<html>
<head>
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
<script type="text/javascript" src="https://static.codehs.com/gulp/89cd3118fd3b4fab9f913ce7091f1761944163e8/chs-js-lib/chs.js"></script>

<style>
    body, html {
        margin: 0;
        padding: 0;
    }
    canvas {
        margin: 0px;
        padding: 0px;
        display: inline-block;
        vertical-align: top;
    }
    #btn-container {
        text-align: center;
        padding-top: 10px;
    }
    #btn-play {
        background-color: #8cc63e;
    }
    #btn-stop {
        background-color: #de5844;
    }
    .glyphicon {
        margin-top: -3px;
        color: #FFFFFF;
    }
</style>
</head>

<body>
    <div id="canvas-container" style="margin: 0 auto; ">
        <canvas
        id="game"
        width="400"
        height="480"
        class="codehs-editor-canvas"
        style="width: 100%; height: 100%; margin: 0 auto;"
        ></canvas>
    </div>
    <div id="console"></div>
    <div id="btn-container">
        <button class="btn btn-main btn-lg" id="btn-play" onclick='stopProgram(); runProgram();'><span class="glyphicon glyphicon-play" aria-hidden="true"></span></button>
        <button class="btn btn-main btn-lg" id="btn-stop" onclick='stopProgram();'><span class="glyphicon glyphicon-stop" aria-hidden="true"></span></button>
    </div>

<script>
    var console = {};
    console.log = function(msg){
        $("#console").html($("#console").html() + "     " + msg);
    };

    var runProgram = function() {
        var player = new WebImage("https://lh3.googleusercontent.com/Xdfd71IHwcyutW_k7FfqhVEf0JQPLxp4EQkPTQK25hwoQ2tGC706jPcMr3szrttdCwOq7_WG3j-awKLN0FPUGg=s400");
player.setSize(100, 200);
add(player);

var grass1 = new Audio("https://drive.google.com/uc?export=download&id=15fCl2AjsW_k-oz8lunJEVxk7prrlf5WZ");
var grass2 = new Audio("https://drive.google.com/uc?export=download&id=1-Y2Gj1Hlqmt_gCVDUGWf99T6easze_gj");
var grass3 = new Audio("https://drive.google.com/uc?export=download&id=1L8kf3wF-vRdqVDWcKpqqpIyEWwPD-e1t");
var grass4 = new Audio("https://drive.google.com/uc?export=download&id=16LC8SVNIkcUbdp4wV94ju5nSRjfrBps1");
var grass5 = new Audio("https://drive.google.com/uc?export=download&id=1d32T2Cth23HjAnSk1YhH6WStQY5sBl9t");
var grass6 = new Audio("https://drive.google.com/uc?export=download&id=1DT8gygAcvhF-RRqi2-aQukP81AhbRdbw");

var step = false;

function start() {
    var bgMusic = new Audio("http://66.90.93.122/ost/minecraft/cmutpyto/Volume%20Alpha%20-%2008%20-%20Minecraft.mp3");
    bgMusic.play();
    mouseClickMethod(oof);
    keyDownMethod(Move);
}

function oof(e) {
    var oofSound = new Audio("https://drive.google.com/uc?export=download&id=1lMjCfPQLUkEN6AAnfG-mGg5tMsXUpX5g");
    var player = getElementAt(e.getX(), e.getY());
    if (player != null) {
        oofSound.play();
        
   }
}

var lastX = player.getX();
var lastY = player.getY();

function Move(e) {
    if (e.keyCode == Keyboard.RIGHT){
        player.move(20, 0);
        grass1.play();
        lastX = player.getX();
        lastY = player.getY();
        println(lastX + ", " + lastY);
    }
    if (e.keyCode == Keyboard.DOWN){
        player.move(0, 20);
        grass1.play();
        lastX = player.getX();
        lastY = player.getY();
        println(lastX + ", " + lastY);
    }
      if (e.keyCode == Keyboard.LEFT){
        player.move(-20, 0);
        grass1.play();
        lastX = player.getX();
        lastY = player.getY();
        println(lastX + ", " + lastY);
    }
    if (e.keyCode == Keyboard.UP){
        player.move(0, -20);
        grass1.play();
        lastX = player.getX();
        lastY = player.getY();
        println(lastX + ", " + lastY);
    }
}


        if (typeof start === 'function') {
            start();
        }

        // Overrides setSize() if called from the user's code. Needed because
        // we have to change the canvas size and attributes to reflect the
        // user's desired program size. Calling setSize() from user code only
        // has an effect if Fit to Full Screen is Off. If Fit to Full Screen is
        // On, then setSize() does nothing.
        function setSize(width, height) {
            if (!true) {
                // Call original graphics setSize()
                window.__graphics__.setSize(width, height);

                // Scale to screen width but keep aspect ratio of program
                // Subtract 2 to allow for border
                var canvasWidth = window.innerWidth - 2;
                var canvasHeight = canvasWidth * getHeight() / getWidth();

                // Make canvas reflect desired size set
                adjustMarginTop(canvasHeight);
                setCanvasContainerSize(canvasWidth, canvasHeight);
                setCanvasAttributes(canvasWidth, canvasHeight);
            }
        }
    };

    var stopProgram = function() {
        removeAll();
        window.__graphics__.fullReset();
    }

    window.onload = function() {
        if (!false) {
            $('#btn-container').remove();
        }

        var canvasWidth;
        var canvasHeight;
        if (true) {
            // Get device window width and set program size to those dimensions
            setSize(window.innerWidth, window.innerHeight);
            canvasWidth = getWidth();
            canvasHeight = getHeight();

            if (false) {
                // Make room for buttons if being shown
                $('#btn-container').css('padding', '5px 0');
                canvasHeight -= $('#btn-container').outerHeight();
            }

            setCanvasAttributes(canvasWidth, canvasHeight);
        } else {
            // Scale to screen width but keep aspect ratio of program
            // Subtract 2 to allow for border
            canvasWidth = window.innerWidth - 2;
            canvasHeight = canvasWidth * getHeight() / getWidth();

            // Light border around canvas if not full screen
            $('#canvas-container').css('border', '1px solid #beccd4');

            adjustMarginTop(canvasHeight);
        }

        setCanvasContainerSize(canvasWidth, canvasHeight);

        if (true) {
            runProgram();
        }
    };

    // Set the canvas container width and height.
    function setCanvasContainerSize(width, height) {
        $('#canvas-container').width(width);
        $('#canvas-container').height(height);
    }

    // Set the width and height attributes of the canvas. Allows
    // getTouchCoordinates to sense x and y correctly.
    function setCanvasAttributes(canvasWidth, canvasHeight) {
        $('#game').attr('width', canvasWidth);
        $('#game').attr('height', canvasHeight);
    }

    // Assumes the Fit to Full Screen setting is Off. Adjusts the top margin
    // depending on the Show Play/Stop Buttons setting.
    function adjustMarginTop(canvasHeight) {
        var marginTop = (window.innerHeight - canvasHeight)/2;
        if (false) {
            marginTop -= $('#btn-container').height()/3;
        }
        $('#canvas-container').css('margin-top', marginTop);
    }
</script>
</body>
</html>
`;
        return (
            <View style={{ flex: 1 }}>
                <StatusBar hidden />
                <WebView
                    source={{html: webViewCode, baseUrl: "/"}}
                    javaScriptEnabled={true}
                    style={{ flex: 1 }}
                    scrollEnabled={false}
                    bounces={false}
                    scalesPageToFit={false}
                ></WebView>
            </View>
        );
    }
}
