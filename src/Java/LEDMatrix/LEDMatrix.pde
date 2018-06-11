//world map

int[][] map = new int[][]{
{0, 2, 2, 2, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0},
{0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0},
{0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0},
{0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0},
{0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0},
{0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0},
{0, 0, 0, 3, 3, 3, 3, 0, 3, 3, 3, 3, 0, 0, 0, 0},
{1, 0, 0, 3, 3, 0, 3, 0, 3, 3, 0, 3, 0, 0, 0, 0}
};

final int BACK = 0;
final int CHARA = 1;
final int CLOUD = 2;
final int PLAT = 3;
final int FIREBALL = 4;
Block [] blocks = new Block[]{
  new Block(BACK,new int[]{46,117,232},false),
  new Block(CHARA,new int[]{98,26,114},false),
  new Block(CLOUD,new int[]{248,244,114},false),
  new Block(PLAT,new int[]{206,125,39},true),
  new Fireball(FIREBALL, new int[]{255,0,0},true)
};


Matrix matrix = new Matrix(8,8,50,80);

World world = new World(map,blocks,matrix);

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
  world.DrawWorld();

}
