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

function setup(){

    createCanvas(1000, 1000);
    frameRate(5)
    printWorld(world, worldOffset);

}

function draw(){
    
}

function marioMove(start, end) {
    world[start[0]][start[1]] = 0;
    world[end[0]][end[1]] = 1;

    MarioPos[0] = end[0];
    MarioPos[1] = end[1];
}

function xChange(start, amount) {

    var newX = start[1] + amount;

    
        if (world[start[0]][newX] == 0) {
            if (start[1] >= (worldOffset / 2) && worldOffset < 16 && amount > 0)
                worldOffset += 1;
            var end = [start[0], newX];
            marioMove(start, end);
        }
    

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