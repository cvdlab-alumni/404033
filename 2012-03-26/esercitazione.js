var domain1 = DOMAIN ([[1.5,5.5]])([4]);
var domain2 = DOMAIN ([[1.5,5.5],[1.5,5.5]])([4,4]);
var domain3 = DOMAIN ([[1.5,5.5],[1.5,5.5],[1.5,5.5]])([4,4,4]);

DRAW(domain3);

COLOR([1,1,255])(domain3);



var domain = DOMAIN([[0,1]])([10]);

var mapping = function (p) {
  var u = p[0];

  return [u, 1];
};

var mapped = MAP(mapping)(domain);



var bisettrice = function (p) {
  var u = p[0];
  
  return [u, u];	
};

var varBisettrice = MAP(bisettrice)(domain); 



var domainSinusoide = DOMAIN([[0, 20*PI]])([50])

var sinusoide = function (p) {
  var u = p[0];

  return [u, SIN(u)];
};

var varSinusoide = MAP(sinusoide)(domainSinusoide);



var drawCircle = function(r,n) {
  var dominioCircle = DOMAIN([[0,2*PI]])([n]);
  var mappingCircle = function(p) {
    var u = p[0];

    return [r * COS(u), r * SIN(u)];
  };

  var mappedCircle = MAP(mappingCircle)(dominioCircle);
  DRAW(mappedCircle);
};



var drawCylinder = function(r,h,n,m,color) {
  var dominioCylinder = DOMAIN([[0,2*PI],[0,h]])([n,m]);
  var mappingCylinder = function(p) {
    var u = p[0];
    var v = p[1];
    
    return [r * COS(u), r * SIN(u), v];
  };
  var mappedCylinder = MAP(mappingCylinder)(dominioCylinder);
  DRAW(mappedCylinder);
  COLOR(color)(mappedCylinder);
};



var drawSphere = function(r,n,m,color) {
  var dominioSphere = DOMAIN([[0,2*PI],[0,2*PI]])([n,m]);
  var mappingSphere = function(p) {
    var u = p[0];
    var v = p[1];
    
    return [r * COS(u) * COS(v), r * COS(u) * SIN(v), r * SIN(v)];
  };
  var mappedSphere = MAP(mappingSphere)(dominioSphere);
  DRAW(mappedSphere);
  COLOR(color)(mappedSphere);
};















