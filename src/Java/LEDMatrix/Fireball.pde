public class Fireball extends Block{
  
  public Fireball(int ID, int[] Color, boolean Solid){
    super(ID,Color,Solid);
  }
  
  @Override
  public int[] Animation(){
    return new int[]{-1,0};
  }

}
