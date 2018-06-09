//world map

int[][] map = new int[][]{
{0, 2, 2, 2, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0},
{0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0},
{0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0},
{0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0},
{0, 0, 0, 0, 3, 3, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0},
{0, 0, 0, 0, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0},
{0, 0, 0, 3, 3, 3, 3, 3, 3, 3, 3, 0, 0, 0, 0, 0},
{1, 0, 0, 3, 3, 3, 3, 0, 0, 0, 3, 0, 0, 0, 0, 0}
};

Matrix matrix = new Matrix(8,8,50,80);

World world = new World(map,matrix);

int LEDWidth = 8;
int LEDHeight = 8;

int LEDSpacing = 80;
int LEDSize = 50;

int worldOffset = LEDWidth;


void setup(){
  size(800,800);
  frameRate(5);
  
  world.DrawWorld();


}

void draw(){

}