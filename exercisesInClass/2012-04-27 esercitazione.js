//Exercise 1 - EXTRUDE
var poly1 = POLYLINE([[0,0],[9,0],[9,3],[8,3],[8,1],[5,1],[5,3],[4,3],[4,1],[1,1],[1,3],[0,3],[0,0]]);
var poly2 = POLYLINE([[0,4],[1,4],[1,6],[4,6],[4,4],[5,4],[5,6],[8,6],[8,4],[9,4],[9,7],[0,7],[0,4]]);
var strutturaBase = STRUCT([poly1,poly2]);
var rialzato = EXTRUDE([4])(strutturaBase);
var colorato = COLOR([1,1,0,0.3])(rialzato);
DRAW(colorato);


//Exercise 2 - BOUNDARY
var c = BOUNDARY(COLOR([1,1,0,0.3])(T([0,1,2])([0,0,4])(CUBOID([9,7,1]))));
DRAW(c);


//Exercise 3 - CUBIC HERMITE
var domain = INTERVALS (1)(20);
var controls = [[1,0], [1,1], [1,0], [1,1]];
var mapping = CUBIC_HERMITE(S0)(controls);
var curve = MAP(mapping)(domain);
DRAW(curve);


//Exercise 4 - BEZIER
var domain = INTERVALS(1)(20);
var controls = [[0,0],[3,1],[1,2],[2,3],[3,2]];
var mapping = BEZIER(S0)(controls);
var curve = MAP(mapping)(domain);
DRAW(curve);


//Exercise 5 - SPLINE, CUBIC_CARDINAL
// note prese da Furio
// Spline è curva a tratti (POLYLINE = spline di grado 1)
// Spline cardinale cubica: spline interpolatrice (che interpola con qualsiasi insieme di punti finito)
// complesso cubiche hermit attaccate tra loro con continuità geometrica e di derivata prima ovvero:
// TRATTO i-esimo di curva: ci(u) = U3 * Bh * [p(i) p(i+1) h(p(i+1)-p(i-1)) h(p(i+2) - p(i)) ]
// ci(u) = U(3) B(h) [0 1 0 0] [p(i-1)]
// [0 0 1 0] [p(i)]
// [-h 0 h 0] [p(i+1)]
// [0 -h 0 h] [p(i+2)]
// Bhc matrice di trasformazione da hermit a cardinale
// l'h scala la lunghezza del vettore
//
// Dati (p0...pm) m+1 punti costrisco una spline cardinale cubica. per ogni (m-2) segmenti impongo 4 vincoli
// la curva interpolera' tutti i punti tra p(0+1) e p(m-1)
// per interpolare i punti iniziali li raddoppio (2 volte sullo stesso posto) cosi' l'algoritmo
// d'interpolazione funziona uguale
// la tangente in un punto e' parallela al vettore differenza tra il suo predecesssore e successore
// tra due punti viene generata una hermitiana
var domain = INTERVALS(1)(20);
var controls = [[-3,6,1],[-4,2,3],[-3,-1,-4],[-1,1,2],[1.5,1.5,0],[3,4,8],[5,5,3],[7,2,1],[6,-2,-1],[2,-3,2]];
var spline = SPLINE(CUBIC_CARDINAL(domain))(controls);
DRAW(spline);


//Exercise 6 - SPLINE, CUBIC_UBSPLINE 
var domain = INTERVALS(3)(20);
var controls = [[-3,6,1],[-4,2,3],[-3,-1,-4],[-1,1,2],[1.5,1.5,0],[3,4,8],[5,5,3],[7,2,1],[6,-2,-1],[2,-3,2]];
var spline = SPLINE(CUBIC_UBSPLINE(domain))(controls);
DRAW(spline);


//Exercise 7 
var domain = INTERVALS(3)(20);
var controls = [[-3,6,1],[-4,2,3],[-3,-1,-4],[-1,1,2],[1.5,1.5,0],[3,4,8],[5,5,3],[7,2,1],[6,-2,-1],[2,-3,2]];
var spline1 = SPLINE(CUBIC_UBSPLINE(domain))(controls);
var spline2 = SPLINE(CUBIC_UBSPLINE(domain,3))(controls);
var spline3 = SPLINE(CUBIC_UBSPLINE(domain,4))(controls);
DRAW(STRUCT([COLOR([1,0,0])(spline1),COLOR([0,1,0])(spline2),COLOR([0,0,1])(spline3)]));




















