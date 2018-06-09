public class Matrix{
  
  private int Width, Height;
  private int Size, Spacing;
  
  public Matrix(int Width,int Height, int Size, int Spacing){
    
    this.Width = Width;
    this.Height = Height;
    this.Size = Size;
    this.Spacing = Spacing;
    
  }
  
  public int Width(){
    return Width;
  }
  
  public int Height(){
    return Height;
  }
  
  public int Size(){
    return Size;
  }
  
  public int Spacing(){
    return Spacing;
  }
  
  
  
}