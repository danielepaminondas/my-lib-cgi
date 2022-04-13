exports.hello = function(){
    console.log("Hello people!");
}

exports.soma = function(n1,n2){
    return total = n1 + n2;
}

exports.multiplyMatrix = function(m1,m2){
    mfinal = [[],[],[]];
    for (lin = 0;lin<3;lin++){
        for(col=0;col<3;col++){
            for(k = 0; k<3;k++){
                mfinal[lin][col]=mfinal.push(mfinal[lin][col] + m1[lin][col] * m2[lin][col]);
            }
        }
    }
    return mfinal;
}

exports.produtoEscalar = function(v1,v2){
    resultado = ((v1[0]*v2[0])+(v1[1]*v2[1])+(v1[2]*v2[2]));
    return resultado;
}

exports.normavetor = function(v){
    norma = Math.sqrt(Math.pow(v[0],2)+Math.pow(v[1],2)+Math.pow(v[2],2));

    return norma;
}

exports.transposta = function(matriz,L,C){
    transp = [[],[],[]];
    for(lin=0;lin<matriz.length;lin++){
        for(col=0; col<matriz.length;col++){
            transp[col][lin] = matriz[lin][col]; 
        }
    }
    return transp;
}

exports.crossProduct = function(vect_A, vect_B,cross_P){

    cross_P[0] = vect_A[1] * vect_B[2] - vect_A[2] * vect_B[1];
    cross_P[1] = vect_A[2] * vect_B[0] - vect_A[0] * vect_B[2];  
    cross_P[2] = vect_A[0] * vect_B[1] - vect_A[1] * vect_B[0];
}

function cofator(a, linha, coluna) {
    var sub_matriz = [],
        ordem = a.length,
        m = 0;

    for (var i = 1; i < ordem; i++) {
        sub_matriz[m] = [];

        for (var j = 0; j < ordem; j++) {
            if (j !== coluna) {
                sub_matriz[m].push(a[i][j]);
            }
        }
        m++;
    }

    //return Math.pow(-1, linha + coluna) * determinante(sub_matriz);
    return (coluna % 2 ? -1 : 1) * determinante(sub_matriz);
}

exports.determinante = function(a) {
    var ordem = a.length;

    if (ordem === 1) {
        return a[0][0];
    }

    if (ordem === 2) {
        return a[0][0] * a[1][1] - a[0][1] * a[1][0];
    }

    var det = 0;

    for (var j = 0; j < ordem; j++) {
        det += a[0][j] * cofator(a, 0, j);
    }

    return det;
}