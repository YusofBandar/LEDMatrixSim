public class World{
  
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
  
  public int[][] World;
  private int worldOffset;
  private Matrix matrix;
  
  public World(int[][] World, Matrix matrix){
    this.World = World.clone();
    this.matrix = matrix;
    worldOffset = matrix.Width();
  }
  
  public void DrawWorld(){
    ellipseMode(CENTER);
    
    int yLength = World.length;
    int xStart = worldOffset - matrix.Width();
    int xEnd = worldOffset;
    
    int Spacing = matrix.Spacing();
    int Size = matrix.Size();
    
    int yCount = 0;
    int xCount = 0;
    
    for(int y=0;y<yLength;y++){
      for(int x = xStart;x< xEnd;x++){
        int block = World[y][x];
        
        fill(blocks[block][0],blocks[block][1],blocks[block][2]);
        ellipse(Spacing * (xCount+1),Spacing * (yCount +1),Size,Size);
        
        xCount++ ;
    }
    xCount = 0;
    yCount++;
   }
  }

}