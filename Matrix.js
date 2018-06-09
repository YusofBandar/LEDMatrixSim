// world map
var world = [
    [0, 2, 2, 2, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 3, 3, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0],
    [0, 0, 0, 0, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 3, 3, 3, 3, 3, 3, 3, 3, 0, 0, 0, 0, 0],
    [1, 0, 0, 3, 3, 3, 3, 0, 0, 0, 3, 0, 0, 0, 0, 0]
];

//block colors 
var blocks = [
    //0 background
    [46, 117, 232],
    //1 character
    [98, 26, 114],
    //2 clouds
    [248, 244, 249],
    //3 platform
    [206, 125, 39],
    //4 bullet
    [216, 13, 13],
]

//list hold bullets
var bullets = [];

//LED Size
var LEDMatrixWidth = 8;
var LEDMatrixHeight = 8;

//world offset
//left side edge of the screen 
var worldOffset = LEDMatrixWidth;

//Space between each LED
var LEDSpacing = 80;
//LED size
var LEDSize = 50;

//CharaPos
var CharaPos = [7, 0];

//Character Jumping
var jumped = false;

function setup() {
    //setup canvas and framerate 
    createCanvas(1000, 1000);
    frameRate(5)
    printWorld(world, worldOffset);
}

function draw() {
    //draw world
    drawWorld();

    //move bullets
    for (var i = 0; i < bullets.length; i++) {
        moveBullet(i, bullets[i]);
    }

    //gravity for character
    if (jumped == false) {
        if (CharaPos[0] < 7) {
            yChange(CharaPos, 1);
        }
    }

    jumped = false;



    console.log("-----");
    printWorld(world, worldOffset);
}

//draw LED Matrix
function drawWorld() {
    ellipseMode(CENTER);

    var yLength = world.length;

    var xStart = worldOffset - LEDMatrixWidth;
    var xEnd = worldOffset;

    var yCount = 0;
    var xCount = 0;

    for (var y = 0; y < yLength; y++) {
        for (var x = xStart; x < xEnd; x++) {

            var id = world[y][x];

            fill(blocks[id][0], blocks[id][1], blocks[id][2]);
            ellipse(LEDSpacing * (xCount + 1), LEDSpacing * (yCount + 1), LEDSize, LEDSize);
            xCount += 1;
        }
        xCount = 0;
        yCount += 1;
    }
}

//move bullets one space to the left (x+)
function moveBullet(id, bullet) {
    world[bullet[0]][bullet[1]] = 0;
    if (world[bullet[0]][bullet[1] + 1] == 0) {
        world[bullet[0]][bullet[1] + 1] = 4;

        bullet[1] += 1;
    } else {
        bullets.splice(id, 1);
    }
}


//keyPresses
function keyPressed() {

    var SPACE = 32;
    //left arrow ==> move left
    if (keyCode === LEFT_ARROW) {
        xChange(CharaPos, -1);
    }
    // right arrow ==> move right 
    else if (keyCode === RIGHT_ARROW) {
        xChange(CharaPos, 1);
    }
    //up arrow ==> jump 
    else if (keyCode === UP_ARROW) {
        jumped = true;
        yChange(CharaPos, -2);
    }
    //space bar ==> fire 
    else if (keyCode === SPACE) {

        if (world[CharaPos[0]][CharaPos[1] + 1] == 0) {
            var bullet = [CharaPos[0], CharaPos[1] + 1];
            world[CharaPos[0]][CharaPos[1] + 1] = 4;
            bullets.push(bullet);
        }

    }

}

//move characater
function charaMove(start, end) {
    world[start[0]][start[1]] = 0;
    world[end[0]][end[1]] = 1;

    CharaPos[0] = end[0];
    CharaPos[1] = end[1];
}

//check world boundries
function boundryCheck(axis, pos, amount) {
    if (axis == "x") {
        if ((pos[1] + amount) < (worldOffset - LEDMatrixWidth) || pos[1] + amount > (world[0].length - 1))
            return false;
        return true;
    }

    if (axis == "y") {
        if (pos[0] + amount < 0 || pos[0] + amount > (world.length - 1))
            return false
        return true;
    }

    return false;

}

//character x change
function xChange(start, amount) {

    var newX = start[1] + amount;

    if (boundryCheck("x", start, amount)) {
        if (world[start[0]][newX] == 0) {
            if (start[1] >= (worldOffset / 2) && worldOffset < 16 && amount > 0)
                worldOffset += 1;
            var end = [start[0], newX];
            charaMove(start, end);
        }
    }

}

//character y change
function yChange(start, amount) {
    var newY = start[0] + amount;

    if (boundryCheck("y", start, amount)) {
        if (world[newY][start[1]] == 0) {
            var end = [newY, start[1]];
            charaMove(start, end);
        }
    }
}

//console print the world
function printWorld(world, offset) {
    var yLength = world.length;

    var xStart = offset - LEDMatrixWidth;
    var xEnd = offset;

    row = "";
    for (var y = 0; y < yLength; y++) {
        for (var x = xStart; x < xEnd; x++) {
            row += world[y][x];
        }

        console.log(row);
        row = "";
    }
}