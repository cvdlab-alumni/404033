var poly1 = POLYLINE([[0,0],[9,0],[9,3],[8,3],[8,1],[5,1],[5,3],[4,3],[4,1],[1,1],[1,3],[0,3],[0,0]]);
var poly2 = POLYLINE([[0,4],[1,4],[1,6],[4,6],[4,4],[5,4],[5,6],[8,6],[8,4],[9,4],[9,7],[0,7],[0,4]]);

var strutturaBase = STRUCT([poly1,poly2]);

var rialzato = EXTRUDE([4])(strutturaBase);

var colorato = COLOR([1,1,0,0.3])(rialzato);

DRAW(colorato);

var c = BOUNDARY(COLOR([1,1,0,0.3])(T([0,1,2])([0,0,4])(CUBOID([9,7,1]))));
DRAW(c);