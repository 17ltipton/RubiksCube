import peasy.*;

PeasyCam cam;

int dim = 3;
int sz = (int) Math.pow(dim,3);
Cubie[] cube = new Cubie[sz];

void setup() {
  size(1000, 1000, P3D);
  cam = new PeasyCam(this, 100*(dim + 2));
  int index = 0;
  for (int x = -1; x <= 1; x++) {
    for (int y = -1; y <= 1; y++) {
      for (int z = -1; z <= 1; z++) {
        PMatrix3D matrix = new PMatrix3D();
        matrix.translate(x, y, z);
        cube[index] = new Cubie(matrix, x, y, z);
        index++;
      }
    }
  }
}

void turn(int index) {
  for (int i = 0; i < cube.length; i++) {
    Cubie qb = cube[i];
    switch (layer) {
      case 'x':
        if (qb.x == index) {
          PMatrix2D matrix = new PMatrix2D();
          matrix.rotate(HALF_PI);
          matrix.translate(qb.y, qb.z);
          qb.update(qb.x, round(matrix.m02), round(matrix.m12)); 
        }
        break;
      case 'y':
        if (qb.y == index) {
          PMatrix2D matrix = new PMatrix2D();
          matrix.rotate(HALF_PI);
          matrix.translate(qb.x, qb.z);
          qb.update(round(matrix.m02), qb.y, round(matrix.m12)); 
        }
        break;
      case 'z':
        if (qb.z == index) {
          PMatrix2D matrix = new PMatrix2D();
          matrix.rotate(HALF_PI);
          matrix.translate(qb.x, qb.y);
          qb.update(round(matrix.m02), round(matrix.m12), qb.z);
        }
        break;
    }
  }
}

public char layer = '\u0000';

void keyPressed() {
  switch (key) {
   case '1':
     layer = 'x';
     turn(-1);
     break;
   case '2':
     layer = 'x';
     turn(1);
     break;
   case '3':
     layer = 'y';
     turn(-1);
     break;
   case '4':
     layer = 'y';
     turn(1);
     break;
   case '5':
     layer = 'z';
     turn(-1);
     break;
   case '6':
     layer = 'z';
     turn(1);
     break;
  }
}

void draw() {
  background(0);
  scale(50);
  for (int i = 0; i < cube.length; i++) {
    cube[i].show();
  }
}
