public class Fireball extends Block{
  
  int direction = 0;
  int animationCounter = 0;

  
  public Fireball(int ID, int[] Color, boolean Solid){
    super(ID,Color,Solid);
  }
  
  @Override
  public int[] Animation(){
    
    if(animationCounter > 3){
      return new int[]{0,0};
    }
    
    animationCounter++;
    return new int[]{direction,1};
  }

}
