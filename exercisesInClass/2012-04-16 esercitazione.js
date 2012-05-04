var link = T([0,1])([-1,-19])(CUBOID([2,20]));
DRAW (link);

var joint = function (alpha){
  return COMP([T([1])([-18]), R([2])(alpha*PI/180)]);
}

var arm = function (a1, a2, a3){
  return STRUCT([link, joint(a1), link, joint(a2), link, joint(a3), link]);	
}
DRAW (arm(45,15,30));