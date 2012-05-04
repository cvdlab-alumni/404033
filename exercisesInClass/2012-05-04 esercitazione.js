var domain = INTERVALS (1)(30);

var controls = [[1,0,0],[0,1,0],[0,2,0],[-2,0,0]]; //start, end, t1, t2
var c1 = CUBIC_HERMITE (S0)(controls);
var imgC1 = MAP (c1)(domain);

var controls = [[3,0,0],[0,3,0],[0,4,0],[-4,0,0]]; //start, end, t1, t2
var c2 = CUBIC_HERMITE (S0)(controls);
var imgC2 = MAP (c2)(domain);

var structImg = STRUCT([imgC1,imgC2]);
DRAW (structImg);

//facciamo ora la superficie tra le due curve
var domain2 = DOMAIN ([[0,1],[0,1]])([20,20]);
var s12 = CUBIC_HERMITE (S1)([c1,c2,[0,0,3],[0,0,-3]]);
//var s12 = CUBIC_HERMITE (S1)([c1,c2,[0,0,3],[0,0,3]]);
var surface12 = MAP (s12)(domain2);
DRAW (surface12);

//DRAW (SKELETON(1)(surface12)); //per vedere i triangolini





//wing
var domainW = INTERVALS (1)(30);
var domainW2 = DOMAIN ([[0,1],[0,1]])([20,20]);
var controlsW = [[10,0,0],[0,5,0],[0,-3,0],[5,2,0],[10,0,0]];

var cW = BEZIER(S0)(controlsW);
var curveW = MAP(cW)(domainW)
DRAW (curveW);


//wing - printing only points
function POLYPOINT (points) {
	//return SIMPLICIAL_COMPLEX(points)([[0],[1],[2],[3],[4]]);
	 return SIMPLICIAL_COMPLEX(points)(points.map(function(p,i){	return[i];	}));
}
var polypoints = COLOR ([1,0,0])(POLYPOINT(controlsW));
var p1 = COLOR ([1,0,0])(POLYPOINT(controlsW));
DRAW (p1);



//wing - many wings
var domain = INTERVALS(1)(30);
var p0 = [[10,0,0],[0,5,0],[0,-3,0],[5,2,0],[10,0,0]];
var p1 = p0.map(function(p){return [p[0],p[1],p[2]+10]});
var p2 = p0.map(function(p){return [p[0],p[1],p[2]+20]});
var p3 = p0.map(function(p){return [p[0],p[1],p[2]+30]});
var p4 = p0.map(function(p){return [p[0],p[1],p[2]+40]});

var c0 = BEZIER(S0)(p0);
var c1 = BEZIER(S0)(p1);
var c2 = BEZIER(S0)(p2);
var c3 = BEZIER(S0)(p3);
var c4 = BEZIER(S0)(p4);

var curves = STRUCT(CONS(AA(MAP)([c0,c1,c2,c3,c4]))(domain));
DRAW(curves);



//wing - airplane wing
var domain2 = DOMAIN ([[0,1],[0,1]])([20,20]);
var wing = BEZIER(S1)([c0,c1,c2,c3,c4]);
var surf = MAP(wing)(domain2);
DRAW(surf);
//per distorcere l'ala bastamodificare i p[x] nelle return delle var p0, p1, p2,..., pn





//curve con superfice
var domain = INTERVALS(1)(20);
var domain2 = DOMAIN ([[0,1],[0,1]])([20,20]);
var controls = [[0,0],[-1,2],[1,4],[2,3],[1,1],[1,2],[2.5,1],[2.5,3],[4,4],[5,0]];
var nubs = NUBS(S0)(3)([0,0,0,0,1,2,3,4,5,6,7,7,7,7])(controls);
var model = MAP (nubs)(domain)
DRAW(model);

var controls = [[0,0,0],[2,5,0],[7,3,0],[9,7,0],[12,2,0]];
var knots = [0,0,0,1,2,3,3,3];
var c1 = NUBS (S0)(2)(knots)(controls);
var curve = MAP (c1)(domain);
DRAW(curve);

var controls = [[0,0,0],[2,5,3],[7,3,6],[9,7,-2],[12,2,-3]];
var knots = [0,0,0,1,2,3,3,3];
var c2 = NUBS (S0)(2)(knots)(controls);
var curve2 = MAP (c2)(domain);
DRAW(curve2);

var s12 = BEZIER(S1)([c1,c2]);
var surf = MAP(s12)(domain2);
DRAW (surf);




