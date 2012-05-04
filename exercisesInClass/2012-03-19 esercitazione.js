var apply = function(array){
  var fun = array[0];
  var arg = array[1];
  return fun(arg);
}


// aa(function (x) {return x*2;})([1,3,5,7,9]); //[2,6,10,14,18]
var aa = function(fun){
  return function(array){
    var ret;
    ret = array.map(fun);
    return ret;
  }
}


// comp2 ([f, g])(x) --> f(g(x))
var comp2 = function (arrArgs){
  var f = arrArgs[0];
  var g = arrArgs[1];
  return function(x){
    return f(g(x));
  }	
} 


// compN - array di funzioni che vengono applicate in sequenza a se stesse e infine all'argomento x
var compN = function (arrArgs){
  var finalFunction = arrArgs.reduce (function (f, g) {
    return function (x) {
      return f(g(x));
    };
  });  
  return function(x){
    return finalFunction(x);     
  };	
} 


// cons - riceve un array di funzioni e un valore, e ritorna un array di valori con la funzioni appliclate
var cons = function (arrFunct){
  return function(x){
    return arrFunct.map(function (item) {
      return item (x);	
    });
  }
}


// distil - riceve un valore e un array e restituisce un array di coppie valore, arr[x]
var distil = function (pair){
  var value = pair[0];
  var array = pair[1];
  return array.map (function (el){
  	return [value, el];
  });    	
}


// trans - accetta una matrice e ritorna la sua trasposta
var trans = function (matrice){
  var result = [];
  matrice.foreach (function (row, i){
    row.foreach (function (value, j) {
      (result[i]) = result[j]	
    })	
  })
// DA FINIRE
}







