//Exercise 3
//Produce the model of horizontal and vertical stabilizers (local coordinate system).

var posAirplane = 0;
var hAirplane = 0;


// horizontal stabilizers structure
//var hStab_domain = INTERVALS(1)(30);
var hStab_base0 = [[posAirplane,hAirplane,-2],[posAirplane-4,hAirplane+0.05,-2],[posAirplane-3,hAirplane+0.05,-2],[posAirplane-3,hAirplane+0.05,2],[posAirplane-4,hAirplane+0.05,2],[posAirplane,hAirplane,2]];
var hStab_b0 = BEZIER(S0)(hStab_base0);
//var hStab_c0 = MAP (hStab_b0) (hStab_domain);
//DRAW (hStab_c0);

var hStab_base1 = [[posAirplane,hAirplane,-2],[posAirplane,hAirplane,2]];
var hStab_b1 = BEZIER(S0)(hStab_base1);
//var hStab_c1 = MAP (hStab_b1) (hStab_domain);
//DRAW (hStab_c1);

var hStab_base2 = [[posAirplane+0.05,hAirplane,0],[posAirplane+2,hAirplane-0.3,0],[posAirplane+1,hAirplane-0.3,0],[posAirplane+1,hAirplane-0.3,2],[posAirplane+2,hAirplane-0.3,2],[posAirplane+0.05,hAirplane,2]];
var hStab_b2 = BEZIER(S0)(hStab_base2);
//var hStab_c2 = MAP (hStab_b2) (hStab_domain);
//DRAW (hStab_c2);

var hStab_base3 = [[posAirplane+0.05,hAirplane,0],[posAirplane+0.05,hAirplane,2]];
var hStab_b3 = BEZIER(S0)(hStab_base3);
//var hStab_c3 = MAP (hStab_b3) (hStab_domain);
//DRAW (hStab_c3);

var hStab_base4 = [[posAirplane+0.05,hAirplane,-2],[posAirplane+2,hAirplane-0.3,-2],[posAirplane+1,hAirplane-0.3,-2],[posAirplane+1,hAirplane-0.3,0],[posAirplane+2,hAirplane-0.3,0],[posAirplane+0.05,hAirplane,0]];
var hStab_b4 = BEZIER(S0)(hStab_base4);
//var hStab_c4 = MAP (hStab_b4) (hStab_domain);
//DRAW (hStab_c4);

var hStab_base5 = [[posAirplane+0.05,hAirplane,-2],[posAirplane+0.05,hAirplane,0]];
var hStab_b5 = BEZIER(S0)(hStab_base5);
//var hStab_c5 = MAP (hStab_b5) (hStab_domain);
//DRAW (hStab_c5);


// horizontal stabilizers surface
var hStab_domain2 = DOMAIN([[0,1],[0,1]])([20,20]);
var hStab_s1 = BEZIER(S1)([hStab_b0, hStab_b1]);
var hStab_s2 = BEZIER(S1)([hStab_b2, hStab_b3]);
var hStab_s3 = BEZIER(S1)([hStab_b4, hStab_b5]);
var hStab_surf1 = MAP(hStab_s1)(hStab_domain2);
var hStab_surf2 = MAP(hStab_s2)(hStab_domain2);
var hStab_surf3 = MAP(hStab_s3)(hStab_domain2);
DRAW (COLOR ([91/255, 51/255, 45/255]) (hStab_surf1));
DRAW (COLOR ([91/255, 51/255, 45/255]) (hStab_surf2));
DRAW (COLOR ([91/255, 51/255, 45/255]) (hStab_surf3));



// vertical stabilizers structure
//var vStab_domain = INTERVALS(1)(30);
var vStab_base0 = [[posAirplane,hAirplane+1.5,0],[posAirplane-3,hAirplane+1.5,0],[posAirplane-3,hAirplane-0.5,0],[posAirplane-3,hAirplane,0],[posAirplane,hAirplane,0]];
var vStab_b0 = BEZIER(S0)(vStab_base0);
//var vStab_c0 = MAP (vStab_b0) (vStab_domain);
//DRAW (vStab_c0);

var vStab_base1 = [[posAirplane,hAirplane+1.5,0],[posAirplane,hAirplane,0]];
var vStab_b1 = BEZIER(S0)(vStab_base1);
//var vStab_c1 = MAP (vStab_b1) (vStab_domain);
//DRAW (vStab_c1);

var vStab_base2 = [[posAirplane+0.05,hAirplane+1.5,0],[posAirplane+1.5,hAirplane+0.75,-0.5],[posAirplane+0.05,hAirplane,0]];
var vStab_b2 = BEZIER(S0)(vStab_base2);
//var vStab_c2 = MAP (vStab_b2) (vStab_domain);
//DRAW (vStab_c2);

var vStab_base3 = [[posAirplane+0.05,hAirplane+1.5,0],[posAirplane+0.05,hAirplane,0]];
var vStab_b3 = BEZIER(S0)(vStab_base3);
//var vStab_c3 = MAP (vStab_b3) (vStab_domain);
//DRAW (vStab_c3);


// vertical stabilizers surface
var vStab_domain2 = DOMAIN([[0,1],[0,1]])([20,20]);
var vStab_s1 = BEZIER(S1)([vStab_b0, vStab_b1]);
var vStab_s2 = BEZIER(S1)([vStab_b2, vStab_b3]);
var vStab_surf1 = MAP(vStab_s1)(vStab_domain2);
var vStab_surf2 = MAP(vStab_s2)(vStab_domain2);
DRAW (COLOR ([91/255, 51/255, 45/255]) (vStab_surf1));
DRAW (COLOR ([0/255, 69/255, 121/255]) (vStab_surf2));