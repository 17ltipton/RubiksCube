class Cubie {
  PVector pos;
  float len;
  Cubie(float x, float y, float z, float len_) {
    pos = new PVector(x, y, z);
    len = len_;
   
 }
 
  void show(int c) {
    switch(c) {
      case 0:
        fill(255);
        break;
      case 1:
        fill(255, 0, 0);
        break;
      case 2:
        fill(255, 239, 0);
        break;
      case 3:
        fill(255, 165, 0);
        break;
      case 4:
        fill(0, 0, 255);
        break;
      case 5:
        fill(0, 255, 0);
        break;
    }
    stroke(0);
    strokeWeight(8);
    pushMatrix();
    translate(pos.x, pos.y, pos.z);
    box(len);
    popMatrix();
  }
}
