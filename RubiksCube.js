int dim = 3;
Cubie[][][] cube = new Cubie[dim][dim][dim];

void setup() {
  size(500, 500, P3D);
  for (int i = 0; i < dim; i++) {
    for (int j = 0; j < dim; j++) {
      for (int k = 0; k < dim; k++) {
        float len = 50;
        float x = len * i;
        float y = len * j;
        float z = len * k;
        cube[i][j][k] = new Cubie(x, y, z, len);
      }
    }
  }
}

void draw() {
  background(0);
  translate((width / 2), (height / 2), 0);
  rotateY(frameCount * .02);
  rotateX(frameCount * .01);
  rotateZ(frameCount * .005);
  
  int f = 0;
  for (int i = 0; i < dim; i++) {
    for (int j = 0; j < dim; j++) {
      for (int k = 0; k < dim; k++) {
        pushMatrix();
        
        cube[i][j][k].show(f);
        popMatrix(); 
      }
    }
    f++;
  }
}
