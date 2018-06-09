//world map

int[][] world = new int[][]{
{0, 2, 2, 2, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0},
{0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0},
{0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0},
{0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0},
{0, 0, 0, 0, 3, 3, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0},
{0, 0, 0, 0, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0},
{0, 0, 0, 3, 3, 3, 3, 3, 3, 3, 3, 0, 0, 0, 0, 0},
{1, 0, 0, 3, 3, 3, 3, 0, 0, 0, 3, 0, 0, 0, 0, 0}
};

int [][] blocks = new int[][]{
//0 background
{46,117,232},
//1 character
{98,26,114},
//2 cloud
{248,244,114},
//3 platform
{206,125,39},
//4 bullet
{226,13,13}
};

int LEDWidth = 8;
int LEDHeight = 8;

int LEDSpacing = 80;
int LEDSize = 50;

int worldOffset = LEDWidth;


void setup(){
  size(800,800);
  frameRate(5);
  
  drawWorld();

}

void draw(){

}

public void drawWorld(){
  ellipseMode(CENTER);
  
  int yLength = world.length;
  
  int xStart = worldOffset - LEDWidth;
  int xEnd = worldOffset;
  
  int yCount = 0;
  int xCount = 0;
  
  for(int y=0;y<yLength;y++){
    for(int x = xStart;x< xEnd;x++){
      int block = world[y][x];
      
      fill(blocks[block][0],blocks[block][1],blocks[block][2]);
      ellipse(LEDSpacing * (xCount+1),LEDSpacing * (yCount +1),LEDSize,LEDSize);
      
      xCount++ ;
    }
    
    xCount = 0;
    yCount++;
  }
  

}