public class Fireball extends Block{
  
  int direction = 1;
  int animationCounter = 0;
  
  public Fireball(int ID, int[] Color, boolean Solid){
    super(ID,Color,Solid);
  }
  
  @Override
  public int[] Animation(){
    
    if(animationCounter > 3){
      print("Hit");
    }
    
    animationCounter++;
    return new int[]{direction,0};
  }

}
