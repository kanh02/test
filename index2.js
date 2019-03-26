const obj = {
    p1: {
        p2: 'value'
    }
}
//
//get(obj, null, 'p1.p2') // ---> returns 'value'
//const obj = {
//    p1: {
//        p2: 'value'
//    }
//}
//
//get(obj, 'default', 'p1.p2.p3') // ---> returns 'default'
//const obj = {
//    p1: {
//        p2: 'value'
//    }
//}
//
//get(obj, null, 'p5.p2') // ---> returns null
//const obj = {
//    p1: {
//        p2: 'value'
//    }
//}

function get(obj, path, separador) {
    try {
        separador = separador || '.';
    
        return path.
                replace('[', separador).replace(']','').
                split(separador).
                reduce(
                    function (objeto, propiedad) { 
                        return objeto[propiedad];
                    }, obj
                );
                    
    } catch (err) {
        return undefined;
    }   
}



//Implementar un método que permita acceder de forma segura a propiedades de un objeto, incluso cuando dichas propiedades no existen.
//
//La función debe admitir tres parametros: el objeto al que se va a acceder;
//el valor por defecto que va a devolver la función en caso de que la propiedad no exista dentro del objeto;
//y por último, un string indicando el path de la propiedad a consultar.
//
//El path delimitará el camino en el cual se encuentra la propiedad a consultar.Los distintos niveles de profundidad se delimitarán con puntos.Además este último parametro es opcional.En caso de no proveerse, la función devolverá otra función que esperará ser invocada con el path de la propiedad como argumento.
