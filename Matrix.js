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

var MarioPos = [7, 0];

var LEDMatrixWidth = 8
var LEDMatrixHeight = 8

var worldOffset = 8

var jumped = false;

var blocks = [
    [46, 117, 232],
    [98, 26, 114],
    [248, 244, 249],
    [206, 125, 39],
    [216, 13, 13],
]

function setup(){

    createCanvas(1000, 1000);
    frameRate(5)
    printWorld(world, worldOffset);

}

function draw(){
    drawWorld();

    if (jumped == false) {
        if (MarioPos[0] < 7) {
            yChange(MarioPos, 1);
        }
    }

    for (var i = 0; i < bullets.length; i++) {
        drawBullet(i, bullets[i]);
    }

    jumped = false;
    
}

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
            ellipse(100 * (xCount + 1), 100 * (yCount + 1), 50, 50);
            xCount += 1;
        }
        xCount = 0;
        yCount += 1;
    }
}

function drawBullet(id, bullet) {
    world[bullet[0]][bullet[1]] = 0;
    if (world[bullet[0]][bullet[1] + 1] == 0) {
        world[bullet[0]][bullet[1] + 1] = 4;

        bullet[1] += 1;
    } else {
        bullets.splice(id, 1);
    }
}

function keyPressed() {

    
    var SPACE = 32;

    if (keyCode === LEFT_ARROW) {
        xChange(MarioPos, -1);
    } else if (keyCode === RIGHT_ARROW) {
        xChange(MarioPos, 1);
    } else if (keyCode === UP_ARROW) {
        jumped = true;
        yChange(MarioPos, -2);
    } else if (keyCode === DOWN_ARROW) {
        yChange(MarioPos, 1);
    }else if (keyCode === SPACE) {

        if (world[MarioPos[0]][MarioPos[1] + 1] == 0) {
            var bullet = [MarioPos[0], MarioPos[1] + 1];
            world[MarioPos[0]][MarioPos[1] + 1] = 4;
            bullets.push(bullet);
        }
    } 

}

function marioMove(start, end) {
    world[start[0]][start[1]] = 0;
    world[end[0]][end[1]] = 1;

    MarioPos[0] = end[0];
    MarioPos[1] = end[1];
}

function xChange(start, amount) {

    var newX = start[1] + amount;

    if (boundryCheck("x", start, amount)) {
        if (world[start[0]][newX] == 0) {
            if (start[1] >= (worldOffset / 2) && worldOffset < 16 && amount > 0)
                worldOffset += 1;
            var end = [start[0], newX];
            marioMove(start, end);
        }
    }

}

function yChange(start, amount) {
    var newY = start[0] + amount;

    if (boundryCheck("y", start, amount)) {
        if (world[newY][start[1]] == 0) {
            var end = [newY, start[1]];
            marioMove(start, end);
        }
    }
}


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