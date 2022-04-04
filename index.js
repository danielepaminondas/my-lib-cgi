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