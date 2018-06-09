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
        Block block = GetBlock(World[y][x]);
        
        if(block != null){
          int[] Color = block.Color();
          fill(Color[0],Color[1],Color[2]);
          ellipse(Spacing * (xCount+1),Spacing * (yCount +1),Size,Size);
        }
        xCount++ ;
    }
    xCount = 0;
    yCount++;
   }
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