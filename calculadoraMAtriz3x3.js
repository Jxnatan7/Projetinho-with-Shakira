function calcularMatriz() {
 
const valoresDeXis = [3, 21, 2]
const valoresDeYpslon = [4, 3, 4]

const xis = Number(valoresDeXis.slice(0, 1))
const x1 = Number(valoresDeXis.slice(1, 2))
const x2 = Number(valoresDeXis.slice(2, 3))

const ypslon = Number(valoresDeYpslon.slice(0,1))
const y1 = Number(valoresDeYpslon.slice(1, 2))
const y2 = Number(valoresDeYpslon.slice(2, 3))

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
 
const calcularDeterminante1 = () => {
J1 = a1 * b2 * c3
J2 = b1 * c2 * d3
J3 = c1 * d2 * e3
J4 = (a3 * b2 * c1) * (-1)
J5 = (b3 * c2 * d1) * (-1)
J6 = (c3 * d2 * e1) * (-1)

console.log(J1 + J2 + J3 + J4 + J5 + J6)
}

const calcularDeterminante2 = () => {

    J1 = `${(b2*c3)}x `
    J2 = b1*c2*d3
    J3 = c1*d2*e3
    J4 = (a3 * b2 * c1) * (-1)
    J5 = `${(b3 * c2 ) * (-1)}x`
    J6 = (c3*d2*e1) * (-1)

    return `${J1} ${J2} ${J3} ${J4} ${J5} ${J6}`

}

const calcularDeterminante3 = () => {
    J1 = a1 * b2 * c3
    J2 = `${c2 * d3}y`
    J3 = c1 * d2 * e3
    J4 = (a3 * b2 * c1) * (-1)
    J5 = (b3 * c2 * d1) * (-1)
    J6 = `${(c3 * d2) * (-1)}y`

    return `${J1} ${J2} ${J3} ${J4} ${J5} ${J6}`
}

const calcularDeterminante4 = () => {
    J1 = `${(b2*c3)}x `
    J2 = `${(c2*d3)}y `
    J3 = c1*d2*e3
    J4 = (a3 * b2 * c1) * (-1)
    J5 = `${(b3 * c2 ) * (-1)}x`
    J6 = `${(c3*d2) * (-1)}y`

    return `${J1} ${J2} ${J3} ${J4} ${J5} ${J6}`
}

function eSe() {

if(typeof a1 == 'number' && typeof b1 == 'number') {
    return calcularDeterminante1()
} if(typeof a1 != 'number'){
    return calcularDeterminante2()
} if(typeof b1 != 'number') {
    return calcularDeterminante3()
}
if(typeof a1 != 'number' && typeof b1 != 'number') {
    return calcularDeterminante4
}
}

let retorno = eSe()
// x
function seTiverX() {
    retorno = retorno.split(" ") 
    function separaX(listaDeRetrono) {
        let xis = []
        let nXis = []
            for(let i = 0; i < retorno.length; i++) {
                if (retorno[i].includes("x", 0)) {
                xis.push(retorno[i])
                }else {
                    nXis.push(retorno[i])
                }
            }
            let resultado = [xis, nXis]
            return resultado;
    }
    function separaNegativosPositivos(listaComX) {  
        let negativos = []
        let positivos = []
        listaComX = listaComX[0]
            for(let i = 0; i < listaComX.length; i++) {
                if (listaComX[i].includes("-")) {
                negativos.push(listaComX[i].replace("x", ""))
                } else {
                        positivos.push(listaComX[i].replace("x", ""))
                        }
            }
            let resultado = [positivos, negativos]
            return resultado;
    }
    function somaX(listaResultadoPosNEg) {
        let pos = listaResultadoPosNEg[0]
        let neg = listaResultadoPosNEg[1]
        let poss = 0 
        let negg = 0 
        for(let i = 0; i < pos.length; i++) {
            poss +=Number(pos[i])
        }
        for(let i = 0; i < neg.length; i++) {
            negg +=Number(neg[i])
        }
        let soma = poss+negg
        let resultado = `${soma}x`
            return resultado;
    }
    function somaNXis(NXis) {
        let nXis = NXis[1]
        let soma = 0
        for(let i = 0; i < nXis.length; i++) {
            soma += Number(nXis[i])
        }
            return soma
    }
    const resultado = separaX(retorno)[1]
    resultado.push(somaX(separaNegativosPositivos(separaX(retorno))))

    
    console.log("retorno:", resultado)
    console.log(somaNXis(separaX(retorno)), somaX(separaNegativosPositivos(separaX(retorno))))}
// y

function seTiverY() {
   
retorno = retorno.split(" ") 
function separaY(listaDeRetrono) {
    let ypslons = []
    let nYpslons = []
        for(let i = 0; i < retorno.length; i++) {
            if (retorno[i].includes("y", 0)) {
            ypslons.push(retorno[i])
            }else {
                nYpslons.push(retorno[i])
            }
        }
        let resultado = [ypslons, nYpslons]
        return resultado;
}
function separaNegativosPositivos(listaComY) {
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
function somaY(listaResultadoPosNEg) {
    let pos = listaResultadoPosNEg[0]
    let neg = listaResultadoPosNEg[1]
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
function somaNYpslons(NYpslons) {
    let nYpslons = NYpslons[1]
    let soma = 0
    for(let i = 0; i < nYpslons.length; i++) {
        soma += Number(nYpslons[i])
    }
        return soma
}
let resultado = separaY(retorno)[1]
resultado.push(somaY(separaNegativosPositivos(separaY(retorno))))
console.log("retorno:", resultado)
console.log(somaNYpslons(separaY(retorno)), somaY(separaNegativosPositivos(separaY(retorno))))}

if (typeof xis == 'number' && typeof ypslon == 'number') {
    return calcularDeterminante1
}
    if(eSe().includes('x')) {
        return seTiverX()
    } if(eSe().includes('y')) {
        return seTiverY()
    }  
}

calcularMatriz()
