//Exercise 1
//Produce the model of a single wing in a local coordinate system.

//NOTA - In questo esercizio il codice commentato non e' stato volutamente tolto per mostrare i passaggi fatti per arrivare a questo risultato

// wing structure
var wing_domain = INTERVALS(1)(30);
var wing_pCont0 = [[1.8,1,0],[0.4,1.4,0],[4,2.8,0],[6,0.85,0],[6.5,0.9,0],[6.7,1,0],[1.8,1,0]];
var wing_pCont1 = [[1.2,1,0],[0.2,1.5,0],[4,2.8,0],[6,0.85,0],[6.5,0.9,0],[6.9,1,0],[7,1,0],[1.2,1,0]];
var wing_pContCenter = [[1,1,0],[0,1.5,0],[4,2.8,0],[6,0.85,0],[6.5,0.9,0],[6.9,1,0],[7,1,0],[1,1,0]];
var wing_pCont5 = [[1.2,1,0],[0.2,1.4,0],[4,2.5,0],[6,0.85,0],[6.5,0.9,0],[6.9,1,0],[7,1,0],[1.2,1,0]];
var wing_pCont6 = [[1.4,1,0],[0.4,1.3,0],[4,2,0],[6,0.85,0],[6.5,0.9,0],[6.9,1,0],[7,1,0],[1.4,1,0]];
var wing_pCont7 = [[1.6,1,0],[0.6,1.2,0],[4,1.5,0],[6,0.85,0],[6.5,0.9,0],[6.9,1,0],[7,1,0],[1.6,1,0]];
var wing_pCont8 = [[1.9,1,0],[0.9,1.1,0],[4,1.3,0],[6,1,0],[6.5,1,0],[6.9,1,0],[7,1,0],[1.9,1,0]];
var wing_pCont9 = [[2.3,1,0],[2,1.05,0],[4,1.2,0],[6,1,0],[8.5,1,0],[2.3,1,0]];
var wing_pCont10 = [[2.8,1,0],[2,1.05,0],[4,1.1,0],[6,1,0],[7.3,1,0],[2.8,1,0]];
var wing_pCont11 = [[3.5,1,0],[2,1.05,0],[8,1,0],[3.3,1,0]];
var wing_pContEnd = [[4.3,1,0],[4.31,1,0]];

var wing_p1 = wing_pCont1.map(function(p){return [p[0], p[1]+0.1, p[2]+1]});
var wing_p2 = wing_pContCenter.map(function(p){return [p[0], p[1]+0.2, p[2]+2]});
var wing_p3 = wing_pContCenter.map(function(p){return [p[0], p[1]+0.4, p[2]+4]});
var wing_p4 = wing_pContCenter.map(function(p){return [p[0], p[1]+0.6, p[2]+6]});
var wing_p5 = wing_pCont5.map(function(p){return [p[0], p[1]+0.7, p[2]+7]});
var wing_p6 = wing_pCont6.map(function(p){return [p[0], p[1]+0.8, p[2]+8]});
var wing_p7 = wing_pCont7.map(function(p){return [p[0], p[1]+0.9, p[2]+9]});
var wing_p8 = wing_pCont8.map(function(p){return [p[0], p[1]+0.95, p[2]+9.5]});
var wing_p9 = wing_pCont9.map(function(p){return [p[0], p[1]+1, p[2]+10]});
var wing_p10 = wing_pCont10.map(function(p){return [p[0], p[1]+1.03, p[2]+10.3]});
var wing_p11 = wing_pCont11.map(function(p){return [p[0], p[1]+1.06, p[2]+10.6]});
var wing_pEnd = wing_pContEnd.map(function(p){return [p[0], p[1]+1.063, p[2]+10.63]});

/*var wing_c0 = BEZIER(S0)(wing_pCont0);
var wing_c1 = BEZIER(S0)(wing_p1);
var wing_c2 = BEZIER(S0)(wing_p2);
var wing_c3 = BEZIER(S0)(wing_p3);
var wing_c4 = BEZIER(S0)(wing_p4);
var wing_c5 = BEZIER(S0)(wing_p5);
var wing_c6 = BEZIER(S0)(wing_p6);
var wing_c7 = BEZIER(S0)(wing_p7);
var wing_c8 = BEZIER(S0)(wing_p8);
var wing_c9 = BEZIER(S0)(wing_p9);
var wing_c10 = BEZIER(S0)(wing_p10);
var wing_c11 = BEZIER(S0)(wing_p11);
var wing_cEnd = BEZIER(S0)(wing_pEnd);*/
// ^^^ code cleaning
var wing_c = AA( BEZIER(S0)) ([wing_pCont0, wing_p1, wing_p2, wing_p3, wing_p4, wing_p5, wing_p6, wing_p7, wing_p8, wing_p9, wing_p10, wing_p11, wing_pEnd]);


//var wingStructure = STRUCT( CONS( AA(MAP) ([wing_c0, wing_c1, wing_c2, wing_c3, wing_c4, wing_c5, wing_c6, wing_c7, wing_c8, wing_c9, wing_c10, 
			//wing_c11, wing_cEnd]) ) (wing_domain) );
// ^^^ code cleaning
//var wing_structure = STRUCT( CONS( AA(MAP) (wing_c) ) (wing_domain) );
//DRAW(wing_structure);



// wing surface
var wing_domain2 = DOMAIN([[0,1],[0,1]])([50,50]);
var wing_ps1 = [[1.8,1,0],[0.4,1.4,0],[4,2.8,0],[6,0.85,0],[6.5,0.9,0],[6.7,1,0],[1.8,1,0]];
var wing_ps2 = [[1.8,1,0],[6.7,1,0],[1.8,1,0]];
var wing_cs1 = BEZIER(S0)(wing_ps1);
var wing_cs2 = BEZIER(S0)(wing_ps2);
var wing_ts = BEZIER(S1)([wing_cs1, wing_cs2]);
var wing_tsurf = MAP(wing_ts)(wing_domain2);
DRAW (COLOR ([91/255, 48/255, 43/255]) (wing_tsurf));
//var wing_s = BEZIER(S1)([wing_c0, wing_c1, wing_c2, wing_c3, wing_c4, wing_c5, wing_c6, wing_c7, wing_c8, wing_c9, wing_c10, wing_c11, wing_cEnd]);
// ^^^ code cleaning
var wing_s = BEZIER(S1)(wing_c);
var wing_surf = MAP(wing_s)(wing_domain2);
DRAW (COLOR ([91/255, 51/255, 45/255]) (wing_surf));