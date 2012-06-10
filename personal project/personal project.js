// thumb, index, middle, ring, little

var alfa = 0.15
var finger_r = 2;
var littleFinger_l = 11; //4 - 3 - 2 - 2
var ringFinger_l = 12.7; //4.7 - 3.5 - 2.5 - 2
var middleFinger_l = 14.4; //5.2 - 4.2 - 3 - 2
var indexFinger_l = 12.7; //4.7 - 3.5 - 2.5 - 2

var thumbFinger_l = 8; //12

var color = [222/255, 184/255, 135/255];


function draw_MetacarpalsFalanges (bone_r, bone_l, color){

	var startX = 0;
	var startY = 0;
	var startZ = 0;
	var bone_r_2 = bone_r/1.5
	var diff = bone_l/40;

	var bone_r1 = bone_r/13
	var startY1 = bone_r/2 - bone_r1/2;
	var controls11 = [[startX,startY1,startZ], [startX,startY1,bone_r1/3], [startX,(startY1+bone_r1/2),bone_r1], [startX,startY1+bone_r1,bone_r1/3], [startX,startY1+bone_r1,startZ]];
	var controls12 = [[startX,startY1,startZ], [startX,startY1,-bone_r1/3], [startX,(startY1+bone_r1/2),-bone_r1], [startX,startY1+bone_r1,-bone_r1/3], [startX,startY1+bone_r1,startZ]];
	var c11 = BEZIER(S0)(controls11);
	var c12 = BEZIER(S0)(controls12);

	var nextX2 = startX+diff;
	var controls21 = [[nextX2,startY,startZ], [nextX2,startY,bone_r/3], [nextX2,(startY+bone_r/2),bone_r], [nextX2,startY+bone_r,bone_r/3], [nextX2,startY+bone_r,startZ]];
	var controls22 = [[nextX2,startY,startZ], [nextX2,startY,-bone_r/3], [nextX2,(startY+bone_r/2),-bone_r], [nextX2,startY+bone_r,-bone_r/3], [nextX2,startY+bone_r,startZ]];
	var c21 = BEZIER(S0)(controls21);
	var c22 = BEZIER(S0)(controls22);

	var nextX3 = nextX2+diff*4;
	var controls31 = [[nextX3,startY,startZ], [nextX3,startY,bone_r/3], [nextX3,(startY+bone_r/2),bone_r], [nextX3,startY+bone_r,bone_r/3], [nextX3,startY+bone_r,startZ]];
	var controls32 = [[nextX3,startY,startZ], [nextX3,startY,-bone_r/3], [nextX3,(startY+bone_r/2),-bone_r], [nextX3,startY+bone_r,-bone_r/3], [nextX3,startY+bone_r,startZ]];
	var c31 = BEZIER(S0)(controls31);
	var c32 = BEZIER(S0)(controls32);

	var nextX4 = nextX3+diff*2;
	var bone_r4 = bone_r/1.3
	var controls41 = [[nextX4,startY,startZ], [nextX4,startY,bone_r4/3], [nextX4,(startY+bone_r4/2),bone_r4], [nextX4,startY+bone_r4,bone_r4/3], [nextX4,startY+bone_r4,startZ]];
	var controls42 = [[nextX4,startY,startZ], [nextX4,startY,-bone_r4/3], [nextX4,(startY+bone_r4/2),-bone_r4], [nextX4,startY+bone_r4,-bone_r4/3], [nextX4,startY+bone_r4,startZ]];
	var c41 = BEZIER(S0)(controls41);
	var c42 = BEZIER(S0)(controls42);

	var nextX5 = nextX4+diff*2
	var bone_r5 = 0.01
	var startY5 = bone_r/2 - bone_r5;
	var controls51 = [[nextX5,startY5,startZ], [nextX5,startY5,bone_r5/3], [nextX5,(startY5+bone_r5/2),bone_r5], [nextX5,startY5+bone_r5,bone_r5/3], [nextX5,startY5+bone_r5,startZ]];
	var controls52 = [[nextX5,startY5,startZ], [nextX5,startY5,-bone_r5/3], [nextX5,(startY5+bone_r5/2),-bone_r5], [nextX5,startY5+bone_r5,-bone_r5/3], [nextX5,startY5+bone_r5,startZ]];
	var c51 = BEZIER(S0)(controls51);
	var c52 = BEZIER(S0)(controls52);

	var nextX6 = nextX5+diff*6
	var bone_r6 = bone_r/1.5
	var startY6 = bone_r/2 - bone_r6/2 + bone_r/6;
	var controls61 = [[nextX6,startY6,startZ], [nextX6,startY6,bone_r6/3], [nextX6,(startY6+bone_r6/2),bone_r_2], [nextX6,startY6+bone_r6,bone_r6/3], [nextX6,startY6+bone_r6,startZ]];
	var controls62 = [[nextX6,startY6,startZ], [nextX6,startY6,-bone_r6/3], [nextX6,(startY6+bone_r6/2),-bone_r_2], [nextX6,startY6+bone_r6,-bone_r6/3], [nextX6,startY6+bone_r6,startZ]];
	var c61 = BEZIER(S0)(controls61);
	var c62 = BEZIER(S0)(controls62);

	var nextX7 = nextX6+diff*4
	var bone_r7 = bone_r/2
	var startY7 = bone_r/2 - bone_r7/2;
	var controls71 = [[nextX7,startY7,startZ], [nextX7,startY7,bone_r7/3], [nextX7,(startY7+bone_r7/2),bone_r_2], [nextX7,startY7+bone_r7,bone_r7/3], [nextX7,startY7+bone_r7,startZ]];
	var controls72 = [[nextX7,startY7,startZ], [nextX7,startY7,-bone_r7/3], [nextX7,(startY7+bone_r7/2),-bone_r_2], [nextX7,startY7+bone_r7,-bone_r7/3], [nextX7,startY7+bone_r7,startZ]];
	var c71 = BEZIER(S0)(controls71);
	var c72 = BEZIER(S0)(controls72);

	var nextX8 = nextX7+diff*3
	var bone_r8 = bone_r/3
	var startY8 = bone_r/2 - bone_r8/2 + bone_r/4;
	var controls81 = [[nextX8,startY8,startZ], [nextX8,startY7,bone_r7/3], [nextX8,(startY8+bone_r8/2),bone_r_2], [nextX8,startY8+bone_r8,bone_r8/3], [nextX8,startY8+bone_r8,startZ]];
	var controls82 = [[nextX8,startY8,startZ], [nextX8,startY7,-bone_r7/3], [nextX8,(startY8+bone_r8/2),-bone_r_2], [nextX8,startY8+bone_r8,-bone_r8/3], [nextX8,startY8+bone_r8,startZ]];
	var c81 = BEZIER(S0)(controls81);
	var c82 = BEZIER(S0)(controls82);

	var nextX9 = nextX8+diff*2
	var bone_r9 = bone_r/1.5
	var startY9 = bone_r/2 - bone_r9/2 + bone_r/6;
	var controls91 = [[nextX9,startY9,startZ], [nextX9,startY9,bone_r9/3], [nextX9,(startY9+bone_r9/2),bone_r_2], [nextX9,startY9+bone_r9,bone_r9/3], [nextX9,startY9+bone_r9,startZ]];
	var controls92 = [[nextX9,startY9,startZ], [nextX9,startY9,-bone_r9/3], [nextX9,(startY9+bone_r9/2),-bone_r_2], [nextX9,startY9+bone_r9,-bone_r9/3], [nextX9,startY9+bone_r9,startZ]];
	var c91 = BEZIER(S0)(controls91);
	var c92 = BEZIER(S0)(controls92);

	var nextX10 = nextX9+diff*14;
	var controls101 = [[nextX10,startY,startZ], [nextX10,startY,bone_r/3], [nextX10,(startY+bone_r/2),bone_r_2], [nextX10,startY+bone_r/1.3,bone_r/3], [nextX10,startY+bone_r/1.3,startZ]];
	var controls102 = [[nextX10,startY,startZ], [nextX10,startY,-bone_r/3], [nextX10,(startY+bone_r/2),-bone_r_2], [nextX10,startY+bone_r/1.3,-bone_r/3], [nextX10,startY+bone_r/1.3,startZ]];
	var c101 = BEZIER(S0)(controls101);
	var c102 = BEZIER(S0)(controls102);

	var nextX11 = nextX10+diff*1;
	var controls111 = [[nextX11,startY,startZ], [nextX11,startY,bone_r/3], [nextX11,(startY+bone_r/2),bone_r], [nextX11,startY+bone_r,bone_r/3], [nextX11,startY+bone_r,startZ]];
	var controls112 = [[nextX11,startY,startZ], [nextX11,startY,-bone_r/3], [nextX11,(startY+bone_r/2),-bone_r], [nextX11,startY+bone_r,-bone_r/3], [nextX11,startY+bone_r,startZ]];
	var c111 = BEZIER(S0)(controls111);
	var c112 = BEZIER(S0)(controls112);

	var bone_r12 = bone_r/13
	var startY12 = bone_r/2 - bone_r1/2;
	var controls121 = [[bone_l,startY12,startZ], [bone_l,startY12,bone_r12/3], [bone_l,(startY12+bone_r12/2),bone_r12], [bone_l,startY12+bone_r12,bone_r12/3], [bone_l,startY12+bone_r12,startZ]];
	var controls122 = [[bone_l,startY12,startZ], [bone_l,startY12,-bone_r12/3], [bone_l,(startY12+bone_r12/2),-bone_r12], [bone_l,startY12+bone_r12,-bone_r12/3], [bone_l,startY12+bone_r12,startZ]];
	var c121 = BEZIER(S0)(controls121);
	var c122 = BEZIER(S0)(controls122);

	// surface
	var s1 = BEZIER(S1)([c11, c21, c31, c41, c51, c61, c71, c81, c91, c101, c111, c121]);
	var s2 = BEZIER(S1)([c12, c22, c32, c42, c52, c62, c72, c82, c92, c102, c112, c122]);

	// volume
	var domainV = DOMAIN([[0,1], [0,1], [0,1]])([25,25,2]);
	var v = BEZIER(S2)([s1, s2]);
	var volume = COLOR (color) (MAP(v)(domainV));

	return volume;
	}


function draw_lastFalanges (bone_r, bone_lung, color){

	var bone_l = bone_lung*3/4;
	var startX = 0;
	var startY = 0;
	var startZ = 0;
	var bone_r_2 = bone_r/1.5
	var diff = bone_l/20;

	var bone_r1 = bone_r/13
	var startY1 = bone_r/2 - bone_r1/2;
	var controls11 = [[startX,startY1,startZ], [startX,startY1,bone_r1/3], [startX,(startY1+bone_r1/2),bone_r1], [startX,startY1+bone_r1,bone_r1/3], [startX,startY1+bone_r1,startZ]];
	var controls12 = [[startX,startY1,startZ], [startX,startY1,-bone_r1/3], [startX,(startY1+bone_r1/2),-bone_r1], [startX,startY1+bone_r1,-bone_r1/3], [startX,startY1+bone_r1,startZ]];
	var c11 = BEZIER(S0)(controls11);
	var c12 = BEZIER(S0)(controls12);

	var nextX2 = startX+diff;
	var controls21 = [[nextX2,startY,startZ], [nextX2,startY,bone_r/3], [nextX2,(startY+bone_r/2),bone_r], [nextX2,startY+bone_r,bone_r/3], [nextX2,startY+bone_r,startZ]];
	var controls22 = [[nextX2,startY,startZ], [nextX2,startY,-bone_r/3], [nextX2,(startY+bone_r/2),-bone_r], [nextX2,startY+bone_r,-bone_r/3], [nextX2,startY+bone_r,startZ]];
	var c21 = BEZIER(S0)(controls21);
	var c22 = BEZIER(S0)(controls22);

	var nextX3 = nextX2+diff*2;
	var controls31 = [[nextX3,startY,startZ], [nextX3,startY,bone_r/3], [nextX3,(startY+bone_r/2),bone_r], [nextX3,startY+bone_r,bone_r/3], [nextX3,startY+bone_r,startZ]];
	var controls32 = [[nextX3,startY,startZ], [nextX3,startY,-bone_r/3], [nextX3,(startY+bone_r/2),-bone_r], [nextX3,startY+bone_r,-bone_r/3], [nextX3,startY+bone_r,startZ]];
	var c31 = BEZIER(S0)(controls31);
	var c32 = BEZIER(S0)(controls32);

	var nextX4 = nextX3+diff*2;
	var bone_r4 = 0.01
	var startY4 = bone_r/2 - bone_r4/2;
	var controls41 = [[nextX4,startY4,startZ], [nextX4,startY4,bone_r4/3], [nextX4,(startY4+bone_r4/2),bone_r4], [nextX4,startY4+bone_r4,bone_r4/3], [nextX4,startY4+bone_r4,startZ]];
	var controls42 = [[nextX4,startY4,startZ], [nextX4,startY4,-bone_r4/3], [nextX4,(startY4+bone_r4/2),-bone_r4], [nextX4,startY4+bone_r4,-bone_r4/3], [nextX4,startY4+bone_r4,startZ]];
	var c41 = BEZIER(S0)(controls41);
	var c42 = BEZIER(S0)(controls42);

	var nextX5 = nextX4+diff;
	var bone_r5 = bone_r/3
	var startY5 = bone_r/2 - bone_r5/2;
	var controls51 = [[nextX5,startY5,startZ], [nextX5,startY5,bone_r5/3], [nextX5,(startY5+bone_r5/2),bone_r5], [nextX5,startY5+bone_r5,bone_r5/3], [nextX5,startY5+bone_r5,startZ]];
	var controls52 = [[nextX5,startY5,startZ], [nextX5,startY5,-bone_r5/3], [nextX5,(startY5+bone_r5/2),-bone_r5], [nextX5,startY5+bone_r5,-bone_r5/3], [nextX5,startY5+bone_r5,startZ]];
	var c51 = BEZIER(S0)(controls51);
	var c52 = BEZIER(S0)(controls52);

	var nextX6 = nextX5+diff*8;
	var bone_r6 = bone_r/4
	var startY6 = bone_r/2 - bone_r6/2;
	var controls61 = [[nextX6,startY6,startZ], [nextX6,startY6,bone_r6/3], [nextX6,(startY6+bone_r6/2),bone_r6], [nextX6,startY6+bone_r6,bone_r6/3], [nextX6,startY6+bone_r6,startZ]];
	var controls62 = [[nextX6,startY6,startZ], [nextX6,startY6,-bone_r6/3], [nextX6,(startY6+bone_r6/2),-bone_r6], [nextX6,startY6+bone_r6,-bone_r6/3], [nextX6,startY6+bone_r6,startZ]];
	var c61 = BEZIER(S0)(controls61);
	var c62 = BEZIER(S0)(controls62);

	var nextX7 = nextX6+diff/2;
	var bone_r7 = bone_r/6
	var startY7 = bone_r/2 - bone_r7/2;
	var controls71 = [[nextX7,startY7,startZ], [nextX7,startY7,0.01], [nextX7,(startY7+bone_r7/2),0.01], [nextX7,startY7+bone_r7,0.01], [nextX7,startY7+bone_r7,startZ]];
	var controls72 = [[nextX7,startY7,startZ], [nextX7,startY7,-0.01], [nextX7,(startY7+bone_r7/2),-0.01], [nextX7,startY7+bone_r7,-0.01], [nextX7,startY7+bone_r7,startZ]];
	var c71 = BEZIER(S0)(controls71);
	var c72 = BEZIER(S0)(controls72);

	var nextX8 = nextX7+diff/2;
	var bone_r8 = bone_r/8
	var startY8 = bone_r/2 - bone_r8/2;
	var controls81 = [[nextX8,startY8,startZ], [nextX8,startY8,0.01], [nextX8,(startY8+bone_r8/2),0.01], [nextX8,startY8+bone_r8,0.01], [nextX8,startY8+bone_r8,startZ]];
	var controls82 = [[nextX8,startY8,startZ], [nextX8,startY8,-0.01], [nextX8,(startY8+bone_r8/2),-0.01], [nextX8,startY8+bone_r8,-0.01], [nextX8,startY8+bone_r8,startZ]];
	var c81 = BEZIER(S0)(controls81);
	var c82 = BEZIER(S0)(controls82);

	var nextX9 = nextX8+diff/2;
	var bone_r9 = bone_r/10
	var startY9 = bone_r/2 - bone_r9/2;
	var controls91 = [[nextX9,startY9,startZ], [nextX9,startY9,0.01], [nextX9,(startY9+bone_r9/2),0.01], [nextX9,startY9+bone_r9,0.01], [nextX9,startY9+bone_r9,startZ]];
	var controls92 = [[nextX9,startY9,startZ], [nextX9,startY9,-0.01], [nextX9,(startY9+bone_r9/2),-0.01], [nextX9,startY9+bone_r9,-0.01], [nextX9,startY9+bone_r9,startZ]];
	var c91 = BEZIER(S0)(controls91);
	var c92 = BEZIER(S0)(controls92);

	var nextX10 = nextX9+diff/2;
	var bone_r10 = bone_r/2
	var startY10 = bone_r/2 - bone_r10/2;
	var controls101 = [[nextX10,startY10,startZ], [nextX10,startY10,bone_r/2], [nextX10,(startY10+bone_r10/2),bone_r], [nextX10,startY10+bone_r10,bone_r/2], [nextX10,startY10+bone_r10,startZ]];
	var controls102 = [[nextX10,startY10,startZ], [nextX10,startY10,-bone_r/2], [nextX10,(startY10+bone_r10/2),-bone_r], [nextX10,startY10+bone_r10,-bone_r/2], [nextX10,startY10+bone_r10,startZ]];
	var c101 = BEZIER(S0)(controls101);
	var c102 = BEZIER(S0)(controls102);

	var bone_r11 = 0.01
	var startY11 = bone_r/2 - bone_r11/2;
	var controls111 = [[bone_l,startY11,startZ], [bone_l,startY11,bone_r11/3], [bone_l,(startY11+bone_r11/2),bone_r11], [bone_l,startY11+bone_r11,bone_r11/3], [bone_l,startY11+bone_r11,startZ]];
	var controls112 = [[bone_l,startY11,startZ], [bone_l,startY11,-bone_r11/3], [bone_l,(startY11+bone_r11/2),-bone_r11], [bone_l,startY11+bone_r11,-bone_r11/3], [bone_l,startY11+bone_r11,startZ]];
	var c111 = BEZIER(S0)(controls111);
	var c112 = BEZIER(S0)(controls112);

	// surface
	var s1 = BEZIER(S1)([c11, c21, c31, c41, c51, c61, c71, c81, c91, c101, c111]);
	var s2 = BEZIER(S1)([c12, c22, c32, c42, c52, c62, c72, c82, c92, c102, c112]);

	// volume
	var domainV = DOMAIN([[0,1], [0,1], [0,1]])([25,25,2]);
	var v = BEZIER(S2)([s1, s2]);
	var volume = COLOR (color) (MAP(v)(domainV));

	return volume;
	}


// finger metacarpals
	var littleFinger_Metacarpals = T ([0,1,2]) ([-0.3,0,-(finger_r)]) (R ([0,2]) ([alfa*2]) (draw_MetacarpalsFalanges (finger_r, (littleFinger_l*4/11), color)));
	var ringFinger_Metacarpals = T ([0,1,2]) ([0,0,-(finger_r/2)]) (R ([0,2]) ([alfa]) (draw_MetacarpalsFalanges (finger_r, (ringFinger_l*4.7/13.5), color)));
	var middleFinger_Metacarpals = draw_MetacarpalsFalanges (finger_r, (middleFinger_l*5.2/15.5), color); 
	var indexFinger_Metacarpals = T ([0,1,2]) ([0,0,(finger_r/2)]) (R ([0,2]) ([-alfa]) (draw_MetacarpalsFalanges (finger_r, (indexFinger_l*4.7/13.5), color)));

	DRAW (littleFinger_Metacarpals);
	DRAW (ringFinger_Metacarpals);
	DRAW (middleFinger_Metacarpals);
	DRAW (indexFinger_Metacarpals);


// finger 1 falanges
	var lf_diffX1 = littleFinger_l*4/11*Math.cos(alfa*2) - 0.3;
	var rf_diffX1 = ringFinger_l*4.7/13.5*Math.cos(alfa) + 0.02;
	var mf_diffX1 = middleFinger_l*5.2/15.5 + 0.01;
	var if_diffX1 = indexFinger_l*4.7/13.5*Math.cos(alfa) + 0.02;
	var lf_diffY1 = -(finger_r + littleFinger_l*4/11*Math.sin(alfa*2) + 0.05);
	var rf_diffY1 = -(finger_r/2 + ringFinger_l*4.7/13.5*Math.sin(alfa));
	var mf_diffY1 = 0;
	var if_diffY1 = finger_r/2 + indexFinger_l*4.7/13.5*Math.sin(alfa);
	var littleFinger_Falanges1 = T ([0,1,2]) ([lf_diffX1,0,lf_diffY1]) (R ([0,2]) ([alfa*2]) (draw_MetacarpalsFalanges (finger_r/1.2, (littleFinger_l*3/11), color)));
	var ringFinger_Falanges1 = T ([0,1,2]) ([rf_diffX1,0,rf_diffY1]) (R ([0,2]) ([alfa]) (draw_MetacarpalsFalanges (finger_r/1.2, (ringFinger_l*3.5/13.5), color)));
	var middleFinger_Falanges1 = T ([0,1,2]) ([mf_diffX1,0,mf_diffY1]) (draw_MetacarpalsFalanges (finger_r/1.2, (middleFinger_l*4.2/15.5), color)); 
	var indexFinger_Falanges1 = T ([0,1,2]) ([if_diffX1,0,if_diffY1]) (R ([0,2]) ([-alfa]) (draw_MetacarpalsFalanges (finger_r/1.2, (indexFinger_l*3.5/13.5), color)));

	DRAW (littleFinger_Falanges1);
	DRAW (ringFinger_Falanges1);
	DRAW (middleFinger_Falanges1);
	DRAW (indexFinger_Falanges1);


// finger 2 falanges
	var lf_diffX2 = littleFinger_l*3/11*Math.cos(alfa*2) + lf_diffX1 + 0.05;
	var rf_diffX2 = ringFinger_l*3.5/13.5*Math.cos(alfa) + rf_diffX1 + 0.02;
	var mf_diffX2 = middleFinger_l*4.2/15.5 + mf_diffX1 + 0.01;
	var if_diffX2 = indexFinger_l*3.5/13.5*Math.cos(alfa) + if_diffX1 + 0.02;
	var lf_diffY2 = -(finger_r + lf_diffX2*Math.sin(alfa*2) + 0.15);
	var rf_diffY2 = -(finger_r/2 + rf_diffX2*Math.sin(alfa));
	var mf_diffY2 = 0;
	var if_diffY2 = finger_r/2 + if_diffX2*Math.sin(alfa);
	var littleFinger_Falanges2 = T ([0,1,2]) ([lf_diffX2,0,lf_diffY2]) (R ([0,2]) ([alfa*2]) (draw_MetacarpalsFalanges (finger_r/1.4, (littleFinger_l*2/11), color)));
	var ringFinger_Falanges2 = T ([0,1,2]) ([rf_diffX2,0,rf_diffY2]) (R ([0,2]) ([alfa]) (draw_MetacarpalsFalanges (finger_r/1.4, (ringFinger_l*2.5/13.5), color)));
	var middleFinger_Falanges2 = T ([0,1,2]) ([mf_diffX2,0,mf_diffY2]) (draw_MetacarpalsFalanges (finger_r/1.4, (middleFinger_l*3/15.5), color)); 
	var indexFinger_Falanges2 = T ([0,1,2]) ([if_diffX2,0,if_diffY2]) (R ([0,2]) ([-alfa]) (draw_MetacarpalsFalanges (finger_r/1.4, (indexFinger_l*2.5/13.5), color)));

	DRAW (littleFinger_Falanges2);
	DRAW (ringFinger_Falanges2);
	DRAW (middleFinger_Falanges2);
	DRAW (indexFinger_Falanges2);


// finger 3 falanges
	var lf_diffX3 = littleFinger_l*2/11*Math.cos(alfa*2) + lf_diffX2 + 0.05;
	var rf_diffX3 = ringFinger_l*2.5/13.5*Math.cos(alfa) + rf_diffX2 + 0.02;
	var mf_diffX3 = middleFinger_l*3/15.5 + mf_diffX2 + 0.01;
	var if_diffX3 = indexFinger_l*2.5/13.5*Math.cos(alfa) + if_diffX2 + 0.02;
	var lf_diffY3 = -(finger_r + lf_diffX3*Math.sin(alfa*2) + 0.15);
	var rf_diffY3 = -(finger_r/2 + rf_diffX3*Math.sin(alfa));
	var mf_diffY3 = 0;
	var if_diffY3 = finger_r/2 + if_diffX3*Math.sin(alfa);
	var littleFinger_Falanges3 = T ([0,1,2]) ([lf_diffX3,0,lf_diffY3]) (R ([0,2]) ([alfa*2]) (draw_lastFalanges (finger_r/1.7, (littleFinger_l*2/11), color)));
	var ringFinger_Falanges3 = T ([0,1,2]) ([rf_diffX3,0,rf_diffY3]) (R ([0,2]) ([alfa]) (draw_lastFalanges (finger_r/1.7, (ringFinger_l*2/13.5), color)));
	var middleFinger_Falanges3 = T ([0,1,2]) ([mf_diffX3,0,mf_diffY3]) (draw_lastFalanges (finger_r/1.7, (middleFinger_l*2/15.5), color)); 
	var indexFinger_Falanges3 = T ([0,1,2]) ([if_diffX3,0,if_diffY3]) (R ([0,2]) ([-alfa]) (draw_lastFalanges (finger_r/1.7, (indexFinger_l*2/13.5), color)));

	DRAW (littleFinger_Falanges3);
	DRAW (ringFinger_Falanges3);
	DRAW (middleFinger_Falanges3);
	DRAW (indexFinger_Falanges3);
