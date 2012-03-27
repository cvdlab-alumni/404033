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



var drawSphereOld = function(r,n,m,color) {
  var dominioSphereOld = DOMAIN([[0,2*PI],[0,2*PI]])([n,m]);
  var mappingSphereOld = function(p) {
    var u = p[0];
    var v = p[1];
    
    return [r * COS(u) * COS(v), r * COS(u) * SIN(v), r * SIN(u)];
  };
  var mappedSphereOld = MAP(mappingSphereOld)(dominioSphereOld);
  DRAW(mappedSphereOld);
  COLOR(color)(mappedSphereOld);
};



var drawSphere = function(r,n,color) {
  var dominioSphere = DOMAIN([[0,PI],[0,2*PI]])([n,2*n]);
  var mappingSphere = function(p) {
    /** alfa, beta
    * alfa - angolo tra il raggio ed un piano;
    * se facciamo una proiezione del punto scelto (con cordinate x,y,z) con cos(alfa) = 0, allora mi trovo sull'asse z; se il
    * cos(alfa) = 1, allora ci troviamo sulla circonferenza di raggio massimo; cos(alfa) è quindi il fattore di scala con cui
    * diminuisco il raggio (e quindi la circonferenza massima) per completare la sfera verso il basso e verso l'alto
    **/
    var u = p[0] - PI/2; // alfa -- varia da -PI/2 a PI/2 ma plasm ci limita ad usare un dominio positivo, per cui sottraiamo PI/2
    var v = p[1]; // beta
    
    /** (x,y,z) --> x e y sono le coordinate di una circonferenza
    * z = r * sin(alfa)
    * y = r * cos(alfa) * sin(beta)
    * x = r * cos(alfa) * cos(beta)
    **/
    return [ r * COS(u) * COS(v), -r * COS(u) * SIN(v), r * SIN(u)];
  };
  var mappedSphere = MAP(mappingSphere)(dominioSphere);
  DRAW(mappedSphere);
  COLOR(color)(mappedSphere);
};
drawSphere(2,25,[0,1,0]);













