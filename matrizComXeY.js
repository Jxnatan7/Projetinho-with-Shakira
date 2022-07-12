
function calcularMatriz() {

    const valoresDeXis = ["x", 7, 8]
    const valoresDeYpslon = ["y", 8, 7]
    
    const xis = valoresDeXis[0]
    const x1 = valoresDeXis[1]
    const x2 = valoresDeXis[2]
    
    const ypslon = valoresDeYpslon[0]
    const y1 = valoresDeYpslon[1]
    const y2 = valoresDeYpslon[2]
    
    const a1 = xis
    const a2 = x1
    const a3 = x2
    
    const b1 = ypslon
    const b2 = y1
    const b3 = y2
    
    const c1 = 1
    const c2 = 1
    const c3 = 1
    
    const d1 = a1
    const d2 = a2
    const d3 = a3
    
    const e1 = b1
    const e2 = b2
    const e3 = b3

    j1 = [a1, b2, c3]
    j2 = [b1, c2, d3]
    j3 = [c1, d2, e3]
    j4 = [a3, b2, c1, -1]
    j5 = [b3, c2, d1, -1]
    j6 = [c3, d2, e1, -1]

    const jotas = [j1, j2, j3, j4, j5, j6]

    let resultado = []
  
    for (let k = 0; k < jotas.length; k++) {
        let multiplicacao = 1
        let variavel = ""

        for (let i = 0; i < jotas[k].length; i++) {
            if (typeof(jotas[k][i]) == "number") {
                multiplicacao *= jotas[k][i]
            }else {
                variavel = variavel.concat(jotas[k][i])
            }

        }
        jotas[k] = multiplicacao+variavel
        resultado.push(jotas[k])      

}

    return resultado

}

const retorno = calcularMatriz()

function separaYX(listaDeRetrono) {
    /* 
    inclui os elementos que possuem "y" em uma lista especial
    e elementos sem "y" em outra lista
    devonvendo depois dessa filtragem um array que comtém dois arrays(ypslons e nYpslons).
    */ 

    let ypslons = []
    let nYpslons = []
    let xis = []
        for(let i = 0; i < retorno.length; i++) {
            if (retorno[i].includes("y", 0)) {
            ypslons.push(retorno[i])
            }else if ((retorno[i].includes("x", 0))) {
                xis.push(retorno[i])
            } else {
                nYpslons.push(retorno[i])
            }
        }
        let resultado = [ypslons, nYpslons, xis]
        return resultado;
}


function separaNegativosPositivosY(listaComY) {
    /*
    recebe um array e usa apenas o valor necessário,
    remove o caracter "y" de cada elemento da lista
    e separa os elemento em positivos e negativos.
    */
    let negativos = []
    let positivos = []
    listaComY = listaComY[0]

        for(let i = 0; i < listaComY.length; i++) {
            if (listaComY[i].includes("-")) {
            negativos.push(listaComY[i].replace("y", ""))
            } else {
                    positivos.push(listaComY[i].replace("y", ""))
                    }
        }
        let resultado = [positivos, negativos]
        return resultado;
}


function separaNegativosPositivosX(listaComX) {
    /*
    recebe um array e usa apenas o valor necessário,
    remove o caracter "x" de cada elemento da lista
    e separa os elemento em positivos e negativos.
    */
    let negativosX = []
    let positivosX = []
    listaComX = listaComX[2]

        for(let i = 0; i < listaComX.length; i++) {
            if (listaComX[i].includes("-")) {
            negativosX.push(listaComX[i].replace("x", ""))
            } else {
                    positivosX.push(listaComX[i].replace("x", ""))
                    }
        }
        let resultado = [positivosX, negativosX]
        return resultado;
}




function somaY(listaResultadoPosNEgY) {
    /*
    recebe um array com dois novos arrays,
    o primeiro com elementos positivos
    e os segundo elementos negativos.
    Logo após retorna a soma dos elementos junto ao caracter "y".
    */
    let pos = listaResultadoPosNEgY[0]
    let neg = listaResultadoPosNEgY[1]
    let poss = 0 
    let negg = 0 
    for(let i = 0; i < pos.length; i++) {
        poss +=Number(pos[i])
    }
    for(let i = 0; i < neg.length; i++) {
        negg +=Number(neg[i])
    }
    let soma = poss+negg
    let resultado = `${soma}y`
        return resultado;
}


function somaX(listaResultadoPosNEgX) {
    /*
    recebe um array com dois novos arrays,
    o primeiro com elementos positivos
    e os segundo elementos negativos.
    Logo após retorna a soma dos elementos junto ao caracter "x".
    */

    let posX = listaResultadoPosNEgX[0]
    let negX = listaResultadoPosNEgX[1]
    let possX = 0 
    let neggX = 0 
    for(let i = 0; i < posX.length; i++) {
        possX +=Number(posX[i])
    }
    for(let i = 0; i < negX.length; i++) {
        neggX +=Number(negX[i])
    }
    let somaX = possX+neggX
    let resultado = `${somaX}x`
        return resultado;
}


function somaNYpslons(NYpslons) {
    /*
    recebe um array com dois novos arrays,
    o primeiro com elementos com "y"
    e os segundo elementos sem "y".
    Logo após retorna a soma dos elementos quie não possuem o caracter "y".
    */
    let nYpslons = NYpslons[1]
    let soma = 0
    for(let i = 0; i < nYpslons.length; i++) {
        soma += Number(nYpslons[i])
    }
        return soma
}

//    Devolve os valores com "y", "x" e os valores sem "y".

let resultado = separaYX(retorno)[1]
resultado.push(somaY(separaNegativosPositivosY(separaYX(retorno))))
resultado.push(somaX(separaNegativosPositivosX(separaYX(retorno))))

/*

console.log(retorno)
console.log(separaY(retorno))
console.log(separaNegativosPositivos(separaY(retorno)))
console.log(somaY(separaNegativosPositivos(separaY(retorno))))

*/

console.log("RESULTADO:", resultado)

// Retorna a soma de todos elementos

console.log(somaX(separaNegativosPositivosX(separaYX(retorno))),somaNYpslons(separaYX(retorno)), somaY(separaNegativosPositivosY(separaYX(retorno))))

