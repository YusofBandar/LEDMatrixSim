public class World{
  
  public int[][] World;
  public Block[] Blocks;
  private int worldOffset;
  private Matrix matrix;
  
  public World(int[][] World,Block[] Blocks, Matrix matrix){
    this.World = World.clone();
    this.Blocks = Blocks.clone();
    this.matrix = matrix;
    worldOffset = matrix.Width();
  }
  
  public void DrawWorld(boolean animate){
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
        Block block = GetBlock(World[y][x]);
        
        
        
        if(block != null){
          int[] Color = block.Color();
          fill(Color[0],Color[1],Color[2]);
          ellipse(Spacing * (xCount+1),Spacing * (yCount +1),Size,Size);
          
          if(animate && block.ID == 4){
            int[] mov = block.Animation();
            BlockMove(new int[]{y,x},mov,block.ID);
          }
          
        }
        xCount++ ;
    }
    xCount = 0;
    yCount++;
   }
  }
  
  private void  BlockMove(int[] start, int[] mov, int endID){
    
    int endY = start[0] + 0;
    int endX = start[1] + 1;
    
    World[endY][endX] = endID;
  }
  
  private Block GetBlock(int ID){
 
    for(Block b : Blocks){
      if(b.ID == ID){
        return b;
      }
    }
    return null;
  }

}
