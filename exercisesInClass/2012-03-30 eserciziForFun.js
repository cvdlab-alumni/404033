var drawCuboidTraslato = function(r,color) {
  var newRaggio = r || 1;
  var newColor = color || [1,0,0];
  var spigolo = newRaggio * (2/Math.sqrt(3));
  var halfSpigolo = spigolo/2;
  
  /*
TRANSLATE(array id delle dimensioni)(array dei valori di traslazione)(modello da translare)
clona il modello da translare, lo transla e lo ritorna!!!
*/
  var cuboDisegna = TRANSLATE([0,1,2])([-halfSpigolo,-halfSpigolo,-halfSpigolo])(CUBOID([spigolo,spigolo,spigolo]));
  
  DRAW(cuboDisegna);
  COLOR(newColor)(cuboDisegna);
  
  return cuboDisegna;
};



var drawCylinderWithBasis = function(r,h,n,m,color) {
  var dominioCylinder = DOMAIN([[0,2*PI],[0,h]])([n,m]);
  var mappingCylinder = function(p) {
    var u = p[0];
    var v = p[1];
    
    return [r * COS(u), r * SIN(u), v];
  };
  var mappedCylinder = MAP(mappingCylinder)(dominioCylinder);
  TRANSLATE([[0, PI], [0, h]])([0, 3])(mappedCylinder);

  mappedCylinder.hBase = TRANSLATE([0,1,2])([0,0,h])(DISK(r)(n));
  mappedCylinder.bBase = DISK(r)(n);
  DRAW(mappedCylinder.bBase);
  DRAW(mappedCylinder.hBase);
  DRAW(mappedCylinder);
  COLOR(color)(mappedCylinder.hBase);
  COLOR(color)(mappedCylinder.bBase);
  COLOR(color)(mappedCylinder);
};

drawCylinderWithBasis (2,5,50,50,[1,0,0]);



var drawCono = function(r,h,n,m,color) {
  r = r || 2;
  h = h || 5;
  n = n || 50;
  m = m || 50;
  color = color || [1,0,0];
  var dominioCono = DOMAIN([[0,2*PI],[0,h]])([n,m]);
  var mappingCono = function(p) {
    var u = p[0];
    var v = p[1]; 
    return [r * COS(u) * ((h-v)/h), r * SIN(u) * ((h-v)/h), v];
  };
  var mappedCono = MAP(mappingCono)(dominioCono);
  //DRAW(mappedCono);
  COLOR(color)(mappedCono);
  return mappedCono;
};

drawCono (3,5,50,50,[1,0,0]);



var drawClessidra = function(r,h,n,m,color) {
  r = r || 2;
  h = h || 6;
  n = n || 50;
  m = m || 50;
  color = color || [1,0,0];
  var dominioClessidra = DOMAIN([[0,2*PI],[0,h]])([n,m]);
  var mappingClessidra = function(p) {
    var u = p[0];
    var v = p[1];
    var hHalf = h/2;
    if (v<=h/2) 
      return [r * COS(u) * ((hHalf-v)/hHalf), r * SIN(u) * ((hHalf-v)/hHalf), v];
    else
      return [r * COS(u) * ((v-hHalf)/hHalf), r* SIN(u) * ((v-hHalf)/hHalf), v];  
  };
  var mappedClessidra = MAP(mappingClessidra)(dominioClessidra);
  DRAW(mappedClessidra);
  COLOR(color)(mappedClessidra);
  return mappedClessidra;
};

drawClessidra (3,6,50,50,[1,0,0]);



var drawClessidraStrana = function(r,h,n,m,color) {
  r = r || 2;
  h = h || 6;
  n = n || 50;
  m = m || 50;
  color = color || [1,0,0];
  var dominioClessidra = DOMAIN([[0,2*PI],[0,h]])([n,m]);
  var mappingClessidra = function(p) {
    var u = p[0];
    var v = p[1];
    var hHalf = h/2;
    if (v<=h/2) 
      return [r * COS(u) * ((hHalf-v)/hHalf), r * SIN(u) * ((hHalf-v)/hHalf), v];
    else
      return [r * COS(u) * ((v-hHalf)/v), r* SIN(u) * ((v-hHalf)/v), v];  
  };
  var mappedClessidra = MAP(mappingClessidra)(dominioClessidra);
  DRAW(mappedClessidra);
  COLOR(color)(mappedClessidra);
  return mappedClessidra;
};

drawClessidraStrana (3,6,50,50,[1,0,0]);



var drawStrangeClessidra = function(r,h,n,m,color) {
  r = r || 2;
  h = h || 6;
  n = n || 50;
  m = m || 50;
  color = color || [1,0,0];
  var dominioClessidra = DOMAIN([[0,2*PI],[0,h]])([n,m]);
  var mappingClessidra = function(p) {
    var u = p[0];
    var v = p[1];
    var div = h/10;
    var hHalf = h/2;
    var hHalf1 = hHalf-div;
    var hHalf2 = hHalf+div;
    if (v<=hHalf1) 
      return [r * COS(u) * ((hHalf-v)/hHalf), r * SIN(u) * ((hHalf-v)/hHalf), v];
    else if (v>=hHalf2) 
      return [r * COS(u) * ((v-hHalf)/hHalf), r * SIN(u) * ((v-hHalf)/hHalf), v];
    else if ((v>hHalf1)&&(v<hHalf2))
      return [30,v];//[r * COS(u), r * SIN(u), v];

  };
  var mappedClessidra = MAP(mappingClessidra)(dominioClessidra);
  DRAW(mappedClessidra);
  COLOR(color)(mappedClessidra);
  return mappedClessidra;
};



//fatto da Francesco Furiani mat. 220279
var drawToro = function (rInterno, rEsterno, n,m,color) {
  rInterno = rInterno || 1;
  rEsterno = rEsterno || 5;
  n = n || 36;
  m = m || 36*2;
  color = color || [1,0,0];
  var dominioToro = DOMAIN([[0,2*PI],[0,2*PI]])([n,m]);
  var mappingToro = function(p) {
    var u = p[0];
    var v = p[1];
    
    return [(rEsterno + rInterno*COS(v))*COS(u), (rEsterno + rInterno*COS(v))*SIN(u), rInterno*SIN(v)];
  };
  var mappedToro = MAP(mappingToro)(dominioToro);
  DRAW(mappedToro);
  COLOR(color)(mappedToro);

  return mappedToro;
};