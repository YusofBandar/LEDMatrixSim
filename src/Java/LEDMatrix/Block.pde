public class Block implements IBlock{
 
  private int ID;
  private int[] Color;
  private boolean Solid;
  
  public Block(int ID, int[] Color, boolean Solid){
    this.ID = ID;
    this.Color = Color;
    this.Solid = Solid;
  }
  
  public int ID(){
    return ID;
  }
  
  public int[] Color(){
    return Color;
  }
  
  public boolean Solid(){
    return Solid;
  }
}