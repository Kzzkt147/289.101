/*eslint-env browser*/
/*eslint no-console:0*/
/*

Begin by following the steps in the workshop notes.

Next, add the following features:
- the gap goes red while the puck is over it
- the puck 'teleports' to the opposite boundary when it crosses one (think asteroids/snake)

*/

var puck = document.getElementById("puck");
var puck_x = 210;
var puck_y = 210;
var speed = 50;

var gap = document.getElementById("gap");

puck.style.top = puck_y + "px";
puck.style.left = puck_x + "px";

function logCoordinates(){
    console.log("x = " + puck_x + "y = " + puck_y);
}

function checkCollision(){
    
    gap.style.backgroundColor = "white";
    
    if(puck_x >= 250 && puck_x <= 350 && puck_y >= 150 && puck_y <= 250){
        onCollision();
    }
}

function onCollision(){
    console.log("collision!");
    gap.style.backgroundColor = "red";
}


//LEFT BUTTON
document.getElementById("left").addEventListener("click", () => {
    puck_x -= speed;
    puck.style.left = puck_x + "px";
    logCoordinates();
    checkCollision();
    
    if (puck_x <= 0){
        puck_x = 560;
        puck.style.left = puck_x + "px";
    }
});

//RIGHT BUTTON
document.getElementById("right").addEventListener("click", () => {
    puck_x += speed;
    puck.style.left = puck_x + "px";
    logCoordinates();
    checkCollision();
    
    if (puck_x >= 600){
        puck_x = 10;
        puck.style.left = puck_x + "px";
    }
});

//UP BUTTON
document.getElementById("up").addEventListener("click", () => {
    puck_y -= speed;
    puck.style.top = puck_y + "px";
    logCoordinates();
    checkCollision();
    
    if(puck_y <= 0){
        puck_y = 400;
        puck.style.top = puck_y + "px";
    }
});

//DOWN BUTTON
document.getElementById("down").addEventListener("click", () => {
    puck_y += speed;
    puck.style.top = puck_y + "px";
    logCoordinates();
    checkCollision();
    
    if(puck_y > 400){
        puck_y = 50;
        puck.style.top = puck_y + "px";
    }
});
