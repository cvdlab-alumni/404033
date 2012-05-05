//Exercise 2
//Produce the model of the fuselage (local coordinate system).

//NOTA - In questo esercizio il codice commentato non e' stato volutamente tolto per mostrare i passaggi fatti per arrivare a questo risultato

// fuselage part1 structure
var fuselage_domain = INTERVALS (1)(8);
var fuselage_controls1 = [[4,2.5,0],[4,2.5,-1],[4,5,-5],[4,7.5,-1],[4,7.5,0]];
var fuselage_c1 = BEZIER(S0)(fuselage_controls1);
//var fuselage_curve1 = MAP (fuselage_c1) (fuselage_domain);
//DRAW (fuselage_curve1);

var fuselage_controls2 = [[4,2.5,0],[4,2.5,1],[4,5,5],[4,7.5,1],[4,7.5,0]];
var fuselage_c2 = BEZIER(S0)(fuselage_controls2);
//var fuselage_curve2 = MAP (fuselage_c2) (fuselage_domain);
//DRAW (fuselage_curve2);

var fuselage_controls3 = fuselage_controls1.map(function(p){return [p[0]+4, p[1]-1, p[2]]});
var fuselage_c3 = BEZIER(S0)(fuselage_controls3);

//var fuselage_curve3 = MAP (fuselage_c3) (fuselage_domain);  
//DRAW (fuselage_curve3);

var fuselage_controls4 = fuselage_controls2.map(function(p){return [p[0]+4, p[1]-1, p[2]]});
var fuselage_c4 = BEZIER(S0)(fuselage_controls4);
//var fuselage_curve4 = MAP (fuselage_c4) (fuselage_domain);
//DRAW (fuselage_curve4);

var fuselage_controls5 = [[14,2,0],[14,2,-0.2],[14,2.5,-0.5],[14,3,-0.2],[14,2.5,0]];
var fuselage_c5 = BEZIER(S0)(fuselage_controls5);
//var fuselage_curve5 = MAP (fuselage_c5) (fuselage_domain);
//DRAW (fuselage_curve5);

var fuselage_controls6 = [[14,2,0],[14,2,0.2],[14,2.5,0.5],[14,3,0.2],[14,2.5,0]];
var fuselage_c6 = BEZIER(S0)(fuselage_controls6);
//var fuselage_curve6 = MAP (fuselage_c6) (fuselage_domain);
//DRAW (fuselage_curve6);


// fuselage part1 surface
var fuselage_domain2 = DOMAIN([[0,1],[0,1]])([8,20]);
var fuselage_s1 = BEZIER(S1)([fuselage_c1, fuselage_c3, fuselage_c5]);
var fuselage_s2 = BEZIER(S1)([fuselage_c2, fuselage_c4, fuselage_c6]);
//var fuselage_surf1 = MAP(fuselage_s1)(fuselage_domain2);
//var fuselage_surf2 = MAP(fuselage_s2)(fuselage_domain2);
//DRAW (COLOR ([91/255, 51/255, 45/255]) (fuselage_surf1));
//DRAW (COLOR ([91/255, 51/255, 45/255]) (fuselage_surf2));


// fuselage part1 volume
var fuselage_domain3 = DOMAIN([[0,1],[0,1],[0,1]])([8,20,20]);
var fuselage_v = BEZIER(S2)([fuselage_s1, fuselage_s2]);
var fuselage_volume = MAP(fuselage_v)(fuselage_domain3);
DRAW (COLOR ([91/255, 51/255, 45/255]) (fuselage_volume));



// fuselage part2 structure ---> space for pilot
var fuselage_domain = INTERVALS (1)(8);
var fuselage_controls201 = [[3,2.75,0],[3,2.75,-1],[3,5.25,-5],[3,7.75,-1],[3,7.75,0]];
var fuselage_c201 = BEZIER(S0)(fuselage_controls201);
//var fuselage_curve201 = MAP (fuselage_c201) (fuselage_domain);
//DRAW (fuselage_curve201);

var fuselage_controls202 = [[3,2.75,0],[3,2.75,1],[3,5.25,5],[3,7.75,1],[3,7.75,0]];
var fuselage_c202 = BEZIER(S0)(fuselage_controls202);
//var fuselage_curve202 = MAP (fuselage_c202) (fuselage_domain);
//DRAW (fuselage_curve202);

var fuselage_controls203 = fuselage_controls201.map(function(p){return [p[0]+0.3, p[1]-0.3/4, p[2]]});
var fuselage_c203 = BEZIER(S0)(fuselage_controls203);
//var fuselage_curve203 = MAP (fuselage_c203) (fuselage_domain);
//DRAW (fuselage_curve203);

var fuselage_controls204 = fuselage_controls202.map(function(p){return [p[0]+0.3, p[1]-0.3/4, p[2]]});
var fuselage_c204 = BEZIER(S0)(fuselage_controls204);
//var fuselage_curve204 = MAP (fuselage_c204) (fuselage_domain);
//DRAW (fuselage_curve204);

var fuselage_controls205 = fuselage_controls201.map(function(p){return [p[0]+0.7, p[1]-0.7/4, p[2]]});
var fuselage_c205 = BEZIER(S0)(fuselage_controls205);
//var fuselage_curve205 = MAP (fuselage_c205) (fuselage_domain);
//DRAW (fuselage_curve205);

var fuselage_controls206 = fuselage_controls202.map(function(p){return [p[0]+0.7, p[1]-0.7/4, p[2]]});
var fuselage_c206 = BEZIER(S0)(fuselage_controls206);
//var fuselage_curve206 = MAP (fuselage_c206) (fuselage_domain);
//DRAW (fuselage_curve206);

var fuselage_controls207 = fuselage_controls201.map(function(p){return [p[0]+1, p[1]-1/4, p[2]]});
var fuselage_c207 = BEZIER(S0)(fuselage_controls207);
//var fuselage_curve207 = MAP (fuselage_c207) (fuselage_domain);
//DRAW (fuselage_curve207);

var fuselage_controls208 = fuselage_controls202.map(function(p){return [p[0]+1, p[1]-1/4, p[2]]});
var fuselage_c208 = BEZIER(S0)(fuselage_controls208);
//var fuselage_curve208 = MAP (fuselage_c208) (fuselage_domain);
//DRAW (fuselage_curve208);

var fuselage_controls209 = [[3.3,2.75-0.3/4,0],[3.3,2.75-0.3/4,-1],[3.3,5.25-0.3/4,-5],[3.3,7.75-0.3/4,-1],[3.3,7.5-0.3/4,-0.3]];
var fuselage_c209 = BEZIER(S0)(fuselage_controls209);
//var fuselage_curve209 = MAP (fuselage_c209) (fuselage_domain);
//DRAW (fuselage_curve209);

var fuselage_controls210 = [[3.3,2.75-0.3/4,0],[3.3,2.75-0.3/4,1],[3.3,5.25-0.3/4,5],[3.3,7.75-0.3/4,1],[3.3,7.5-0.3/4-0.3/4,0.3]];
var fuselage_c210 = BEZIER(S0)(fuselage_controls210);
//var fuselage_curve210 = MAP (fuselage_c210) (fuselage_domain);
//DRAW (fuselage_curve210);

var fuselage_controls211 = fuselage_controls209.map(function(p){return [p[0]+0.4, p[1]-0.4/4, p[2]]});
var fuselage_c211 = BEZIER(S0)(fuselage_controls211);
//var fuselage_curve211 = MAP (fuselage_c211) (fuselage_domain);
//DRAW (fuselage_curve211);

var fuselage_controls212 = fuselage_controls210.map(function(p){return [p[0]+0.4, p[1]-0.4/4, p[2]]});
var fuselage_c212 = BEZIER(S0)(fuselage_controls212);
//var fuselage_curve212 = MAP (fuselage_c212) (fuselage_domain);
//DRAW (fuselage_curve212);


// fuselage part2 surface
var fuselage_domain2 = DOMAIN([[0,1],[0,1]])([8,20]);
var fuselage_s21 = BEZIER(S1)([fuselage_c201, fuselage_c203]);
var fuselage_s22 = BEZIER(S1)([fuselage_c202, fuselage_c204]);
var fuselage_s23 = BEZIER(S1)([fuselage_c205, fuselage_c207]);
var fuselage_s24 = BEZIER(S1)([fuselage_c206, fuselage_c208]);
var fuselage_s25 = BEZIER(S1)([fuselage_c209, fuselage_c211]);
var fuselage_s26 = BEZIER(S1)([fuselage_c210, fuselage_c212]);
//var fuselage_surf21 = MAP(fuselage_s21)(fuselage_domain2);
//var fuselage_surf22 = MAP(fuselage_s22)(fuselage_domain2);
//var fuselage_surf23 = MAP(fuselage_s23)(fuselage_domain2);
//var fuselage_surf24 = MAP(fuselage_s24)(fuselage_domain2);
var fuselage_surf25 = MAP(fuselage_s25)(fuselage_domain2);
var fuselage_surf26 = MAP(fuselage_s26)(fuselage_domain2);

//DRAW (COLOR ([91/255, 51/255, 45/255]) (fuselage_surf21));
//DRAW (COLOR ([91/255, 51/255, 45/255]) (fuselage_surf22));
//DRAW (COLOR ([91/255, 51/255, 45/255]) (fuselage_surf23));
//DRAW (COLOR ([91/255, 51/255, 45/255]) (fuselage_surf24));
DRAW (COLOR ([91/255, 51/255, 45/255]) (fuselage_surf25));
DRAW (COLOR ([91/255, 51/255, 45/255]) (fuselage_surf26));


// fuselage part2 volume
var fuselage_domain3 = DOMAIN([[0,1],[0,1],[0,1]])([8,20,20]);
var fuselage_v21 = BEZIER(S2)([fuselage_s21, fuselage_s22]);
var fuselage_v22 = BEZIER(S2)([fuselage_s23, fuselage_s24]);
var fuselage_volume21 = MAP(fuselage_v21)(fuselage_domain3);
var fuselage_volume22 = MAP(fuselage_v22)(fuselage_domain3);
DRAW (COLOR ([91/255, 51/255, 45/255]) (fuselage_volume21));
DRAW (COLOR ([91/255, 51/255, 45/255]) (fuselage_volume22));



// fuselage part3 structure ---> space for engine
var fuselage_domain = INTERVALS (1)(8);
var fuselage_controls31 = [[2.1,2.75+0.9/4,0],[2.1,2.75+0.9/4,-1],[2.1,5.25+0.9/4,-5],[2.1,7.75+0.9/4,-1],[2.1,7.75+0.9/4,0]];
var fuselage_c31 = BEZIER(S0)(fuselage_controls31);
//var fuselage_curve31 = MAP (fuselage_c31) (fuselage_domain);
//DRAW (fuselage_curve31);

var fuselage_controls32 = [[2.1,2.75+0.9/4,0],[2.1,2.75+0.9/4,1],[2.1,5.25+0.9/4,5],[2.1,7.75+0.9/4,1],[2.1,7.75+0.9/4,0]];
var fuselage_c32 = BEZIER(S0)(fuselage_controls32);
//var fuselage_curve32 = MAP (fuselage_c32) (fuselage_domain);
//DRAW (fuselage_curve32);

var fuselage_controls33 = fuselage_controls31.map(function(p){return [p[0]+0.9, p[1]-0.9/4, p[2]]});
var fuselage_c33 = BEZIER(S0)(fuselage_controls33);
//var fuselage_curve33 = MAP (fuselage_c33) (fuselage_domain);
//DRAW (fuselage_curve33);

var fuselage_controls34 = fuselage_controls32.map(function(p){return [p[0]+0.9, p[1]-0.9/4, p[2]]});
var fuselage_c34 = BEZIER(S0)(fuselage_controls34);
//var fuselage_curve34 = MAP (fuselage_c34) (fuselage_domain);
//DRAW (fuselage_curve34);

var fuselage_controls35 = [[2,3.25,0],[2,3.25,-1],[2,5.5,-4.5],[2,7.75,-1],[2,7.75,0]];
var fuselage_c35 = BEZIER(S0)(fuselage_controls35);
//var fuselage_curve35 = MAP (fuselage_c35) (fuselage_domain);
//DRAW (fuselage_curve35);

var fuselage_controls36 = [[2,3.25,0],[2,3.25,1],[2,5.5,4.5],[2,7.75,1],[2,7.75,0]];
var fuselage_c36 = BEZIER(S0)(fuselage_controls36);
//var fuselage_curve36 = MAP (fuselage_c36) (fuselage_domain);
//DRAW (fuselage_curve36);


// fuselage part3 surface
var fuselage_domain2 = DOMAIN([[0,1],[0,1]])([30,30]);
var fuselage_s31 = BEZIER(S1)([fuselage_c35, fuselage_c31, fuselage_c33]);
var fuselage_s32 = BEZIER(S1)([fuselage_c36, fuselage_c32, fuselage_c34]);
//var fuselage_surf31 = MAP(fuselage_s31)(fuselage_domain2);
//var fuselage_surf32 = MAP(fuselage_s32)(fuselage_domain2);
//DRAW (COLOR ([146/255, 142/255, 140/255]) (fuselage_surf31));
//DRAW (COLOR ([146/255, 142/255, 140/255]) (fuselage_surf32));


// fuselage part3 volume
var fuselage_domain3 = DOMAIN([[0,1],[0,1],[0,1]])([40,10,10]);
var fuselage_v3 = BEZIER(S2)([fuselage_s31, fuselage_s32]);
var fuselage_volume3 = MAP(fuselage_v3)(fuselage_domain3);
DRAW (COLOR ([146/255, 142/255, 140/255]) (fuselage_volume3));



// fuselage part4 structure ---> space for engine2
var fuselage_domain = INTERVALS (1)(8);
var fuselage_controls41 = [[1.1,3.25+0.9/4,0],[1.1,3.25+0.9/4,-1],[1.1,5.5+0.9/4,-4.5],[1.1,7.75+0.9/4,-1],[1.1,7.75+0.9/4,0]];
var fuselage_c41 = BEZIER(S0)(fuselage_controls41);
//var fuselage_curve41 = MAP (fuselage_c41) (fuselage_domain);
//DRAW (fuselage_curve41);

var fuselage_controls42 = [[1.1,3.25+0.9/4,0],[1.1,3.25+0.9/4,1],[1.1,5.5+0.9/4,4.5],[1.1,7.75+0.9/4,1],[1.1,7.75+0.9/4,0]];
var fuselage_c42 = BEZIER(S0)(fuselage_controls42);
//var fuselage_curve42 = MAP (fuselage_c42) (fuselage_domain);
//DRAW (fuselage_curve42);

var fuselage_controls43 = fuselage_controls41.map(function(p){return [p[0]+0.9, p[1]-0.9/4, p[2]]});
var fuselage_c43 = BEZIER(S0)(fuselage_controls43);
//var fuselage_curve43 = MAP (fuselage_c43) (fuselage_domain);
//DRAW (fuselage_curve43);

var fuselage_controls44 = fuselage_controls42.map(function(p){return [p[0]+0.9, p[1]-0.9/4, p[2]]});
var fuselage_c44 = BEZIER(S0)(fuselage_controls44);
//var fuselage_curve44 = MAP (fuselage_c44) (fuselage_domain);
//DRAW (fuselage_curve44);

var fuselage_controls45 = [[1,3.75,0],[1,3.75,-1],[1,5.75,-4],[1,7.75,-1],[1,7.75,0]];
var fuselage_c45 = BEZIER(S0)(fuselage_controls45);
//var fuselage_curve45 = MAP (fuselage_c45) (fuselage_domain);
//DRAW (fuselage_curve45);

var fuselage_controls46 = [[1,3.75,0],[1,3.75,1],[1,5.75,4],[1,7.75,1],[1,7.75,0]];
var fuselage_c46 = BEZIER(S0)(fuselage_controls46);
//var fuselage_curve46 = MAP (fuselage_c46) (fuselage_domain);
//DRAW (fuselage_curve46);


// fuselage part4 surface
var fuselage_domain2 = DOMAIN([[0,1],[0,1]])([30,30]);
var fuselage_s41 = BEZIER(S1)([fuselage_c45, fuselage_c41, fuselage_c43]);
var fuselage_s42 = BEZIER(S1)([fuselage_c46, fuselage_c42, fuselage_c44]);
//var fuselage_surf41 = MAP(fuselage_s41)(fuselage_domain2);
//var fuselage_surf42 = MAP(fuselage_s42)(fuselage_domain2);
//DRAW (COLOR ([146/255, 142/255, 140/255]) (fuselage_surf41));
//DRAW (COLOR ([146/255, 142/255, 140/255]) (fuselage_surf42));


// fuselage part4 volume
var fuselage_domain4 = DOMAIN([[0,1],[0,1],[0,1]])([40,10,10]);
var fuselage_v4 = BEZIER(S2)([fuselage_s41, fuselage_s42]);
var fuselage_volume4 = MAP(fuselage_v4)(fuselage_domain4);
DRAW (COLOR ([146/255, 142/255, 140/255]) (fuselage_volume4));


    
// Front
  // Front structure		
  	var front_controls1 = [[0,5.7,0],[0,5.7,-0.03],[0,5.75,-0.1],[0,5.8,-0.03],[0,5.8,0]];
	var front_c1 = BEZIER(S0)(front_controls1);

	var front_controls2 = [[0,5.7,0],[0,5.7,0.03],[0,5.75,0.1],[0,5.8,0.03],[0,5.8,0]];
	var front_c2 = BEZIER(S0)(front_controls2);

	var front_controls3 = [[0.9,3.7,0],[0.9,3.7,-1],[0.9,5.75,-4.5],[0.9,7.8,-1],[0.9,7.8,0]];
	var front_c3 = BEZIER(S0)(front_controls3);

	var front_controls4 = [[0.9,3.7,0],[0.9,3.7,1],[0.9,5.75,4.5],[0.9,7.8,1],[0.9,7.8,0]];
	var front_c4 = BEZIER(S0)(front_controls4);

	var front_controls5 = [[1,4.7,0],[1,4.7,-0.7],[1,5.75,-2.1],[1,6.8,-0.7],[1,6.8,0]];
	var front_c5 = BEZIER(S0)(front_controls5);

	var front_controls6 = [[1,4.7,0],[1,4.7,0.7],[1,5.75,2.1],[1,6.8,0.7],[1,6.8,0]];
	var front_c6 = BEZIER(S0)(front_controls6);

// front surface
	var front_s1 = BEZIER(S1)([front_c1, front_c3, front_c5]);
	var front_s2 = BEZIER(S1)([front_c2, front_c4, front_c6]);

// front volume
	var front_domain = DOMAIN([[0,1],[0,1],[0,1]])([30,10,10]);
	var front_v = BEZIER(S2)([front_s1, front_s2]);
	var front_volume = MAP(front_v)(front_domain);
	DRAW (COLOR ([146/255, 142/255, 140/255]) (front_volume));

// Elix
  	//right elix
		var r_elix_controls1 = [[0.4,6,0],[0.2,4.7,-4.5],[0.6,6.3,-4.5],[0.4,5.4,0]];
		var r_elix_c1 = BEZIER(S0)(r_elix_controls1);

		var r_elix_controls2 = [[0.4,6,0],[0.4,5.4,0]];
		var r_elix_c2 = BEZIER(S0)(r_elix_controls2);

		var r_elix_controls3 = [[0.5,6,0],[0.3,4.7,-4.5],[0.7,6.3,-4.5],[0.5,5.4,0]];
		var r_elix_c3 = BEZIER(S0)(r_elix_controls3);

		var r_elix_controls4 = [[0.5,6,0],[0.5,5.4,0]];
		var r_elix_c4 = BEZIER(S0)(r_elix_controls4);

		var r_elix_s1 = BEZIER(S1)([r_elix_c1, r_elix_c2]);
		var r_elix_s2 = BEZIER(S1)([r_elix_c3, r_elix_c4]);
		
		var r_elix_domain = DOMAIN([[0,1],[0,1],[0,1]])([10,10,10]);
		var r_elix_v = BEZIER(S2)([r_elix_s1, r_elix_s2]);
		var r_elix_volume = MAP(r_elix_v)(r_elix_domain);
		DRAW (COLOR ([146/255, 142/255, 140/255]) (r_elix_volume));
		
	//left elix
		var l_elix_controls1 = [[0.4,6,0],[0.2,4.7,4.5],[0.6,6.3,4.5],[0.4,5.4,0]];
		var l_elix_c1 = BEZIER(S0)(l_elix_controls1);

		var l_elix_controls2 = [[0.4,6,0],[0.4,5.4,0]];
		var l_elix_c2 = BEZIER(S0)(l_elix_controls2);

		var l_elix_controls3 = [[0.5,6,0],[0.3,4.7,4.5],[0.7,6.3,4.5],[0.5,5.4,0]];
		var l_elix_c3 = BEZIER(S0)(l_elix_controls3);

		var l_elix_controls4 = [[0.5,6,0],[0.5,5.4,0]];
		var l_elix_c4 = BEZIER(S0)(l_elix_controls4);

		var l_elix_s1 = BEZIER(S1)([l_elix_c1, l_elix_c2]);
		var l_elix_s2 = BEZIER(S1)([l_elix_c3, l_elix_c4]);
		
		var l_elix_domain = DOMAIN([[0,1],[0,1],[0,1]])([10,10,10]);
		var l_elix_v = BEZIER(S2)([l_elix_s1, l_elix_s2]);
		var l_elix_volume = MAP(l_elix_v)(l_elix_domain);
		DRAW (COLOR ([146/255, 142/255, 140/255]) (l_elix_volume));	


// Wheels
	var wheel_controls1 = [[0.2,1,-1.4],[0.3,0.2,-1.4],[1.6,1,-1.4],[0.3,1.8,-1.4],[0.2,1,-1.4]];
	var wheel_c1 = BEZIER(S0)(wheel_controls1);

	var wheel_controls2 = [[0.1,1,-1.5],[0.2,0,-1.5],[2,1,-1.5],[0.2,2,-1.5],[0.1,1,-1.5]];
	var wheel_c2 = BEZIER(S0)(wheel_controls2);

	var wheel_controls3 = [[0.1,1,-1.6],[0.2,0,-1.6],[2,1,-1.6],[0.2,2,-1.6],[0.1,1,-1.6]];
	var wheel_c3 = BEZIER(S0)(wheel_controls3);

	var wheel_controls4 = [[0.2,1,-1.7],[0.3,0.2,-1.7],[1.6,1,-1.7],[0.3,1.8,-1.7],[0.2,1,-1.7]];
	var wheel_c4 = BEZIER(S0)(wheel_controls4);

	var wheel_domain2 = DOMAIN([[0,1],[0,1]])([20,20]);
	var wheel_s = BEZIER(S1)([wheel_c1, wheel_c2, wheel_c3, wheel_c4]);
	var wheel_surf = MAP(wheel_s)(wheel_domain2);
	DRAW (COLOR ([0, 0, 0]) (T([0,1,2])([1.5,0.5,0])( wheel_surf) ));

	DRAW( T([0,1,2])([0.48+1.5,1+0.5,-1.42])(DISK(0.29)(20)));
	DRAW( T([0,1,2])([0.48+1.5,1+0.5,-1.68])(DISK(0.29)(20)));

	var wheel2_surf = S([2])([-1])(wheel_surf);
	DRAW (COLOR ([0, 0, 0]) (T([0,1,2])([1.5,0.5,0])(wheel2_surf)));
	DRAW( T([0,1,2])([0.48+1.5,1+0.5,1.42])(DISK(0.29)(20)));
	DRAW( T([0,1,2])([0.48+1.5,1+0.5,1.68])(DISK(0.29)(20)));

	var linkWheels = SIMPLEX_GRID ([[-0.48-1.5,0.05],[-1-0.5,0.05],[0,3]]);
	DRAW (T([0,1,2])([0,0,-1.5])(linkWheels));

	var linkWheelsAirplane = SIMPLEX_GRID ([[-0.48-1.5,0.05],[-1-0.5,4],[-0.5,0.05]]);
	DRAW (T([0,1,2])([0,0,-1.5])(linkWheelsAirplane));

	var linkWheelsAirplane2 = SIMPLEX_GRID ([[-0.48-1.5,0.05],[-1-0.5,4],[-2.5,0.05]]);
	DRAW (T([0,1,2])([0,0,-1.5])(linkWheelsAirplane2));
