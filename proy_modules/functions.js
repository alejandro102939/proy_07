const { magenta } = require("colors");

const functions = {};

const signo = (numero)=> {
    if(numero >= 0){
        return 'positivo'
    } else{
        return 'negativo'
    }

}

const encontrtoCararter = (caracter) => {
    const datos =['A', 'B', 'C', 'D', 'E'];
    if(datos.includes(caracter)) {
        return' se encuentra';
    } else{
        return' no se encuentra';
    }
}

const busquedaBebida=(Bebida) => {
    const bebidas =['vino', 'cerveza', 'gaseosa', 'agua'];
    if(bebidas.includes(Bebida)){
        return' esta disponible';
    } else {
        return'no esta disponible por favor dirijase a la tienda';
    }
}

const mediotransporte = (Medio) => {
    const medios= ['avion', 'flota', 'carro', 'bicicleta'];
    switch (Medio) {
        case "avion":
          return(" recuerda tener dinero");
          break;
        case "flota":
          return(" recuerda tener dinero");
          break;
        case "carro":
          return(" recuerda llevar ropa");
          break;
        case "bicicleta":
          return(" recuerda llevar ropa");
          break;
        default:
          return(" transporte no encontrado");
          break;
      }
}

const facturaproducto = (cantidad, precio, descuento) => {
    if (cantidad<= 0 || precio <= 0 || descuento < 0 || descuento > 100) {
        return "Error: Los valores proporcionados no son válidos.";
    }

    const descuentos = (precio * descuento) / 100 * cantidad;
    const precioVenta = precio- descuento;

    return precioVenta;
}

const bebidaComida = (menú) => {
    const MENÙ = ['carne', 'pescado', 'verdura']
    switch (menú) {
        case "carne":
          return("-vino tinto");
          break;
        case "pescado":
          return(" -vino blanco");
          break;
        case "verdura":
          return(" -agua");
          break;
        default:
          return(" -Para cualquier otro menu recomiendo agua");
          break;
      }
}

const salaJuegos = (pago) => {
    const pagos = [4000, 3000, 2000, 1000]
    switch (pago) {
        case 4000:
          return(" accedes a:consolas, juegos2D, juegos3D, realidad virtual");
          break;
        case 3000:
          return(" accedes a:consolas, juegos2D, juegos3D");
          break;
        case 2000:
          return(" accedes a consolas y juegos 2D");
          break;
          case 1000:
          return(" accedes a consolas");
          break;
        default:
          return(" debes ingresar mas dinero");
          break;

}
}

const contarNumero = (número) => {
    if (número <= 0) {
        console.log("Por favor ingresa un número entero positivo.");
        return;
    }

    for (let i = 1; i <= número; i++) {
        console.log(i);
    } 
}

const numerosPares = (numero) => {
    if (numero <= 0) {
        console.log("Por favor ingresa un número entero positivo.");
        return;
    }

    for (let i = 2; i <= numero; i += 2) {
        console.log(i);
    }
}

const tablaMultiplicar= (number)=> {
    console.log(`Tabla de multiplicar del ${number}:`);
    
    for (let i = 1; i <= 10; i++) {
        const resultado = number * i;
        console.log(`${number} x ${i} = ${resultado}`);
    }


}

const repetirCaracter = (caracter, veces) => {
    if (veces <= 0) {
        console.log("Por favor ingresa un número entero positivo para las repeticiones.");
        return;
    }

    const resultado = caracter.repeat(veces);
    console.log(resultado);
}
const contadorBase =(base)=> {
    if (base <= 1) {
        console.log("Por favor ingresa una base válida (mayor que 1).");
        return;
    }

    for (let i = 0; i < base; i++) {
        for (let j = 0; j < base; j++) {
            const numero = i * base + j;
            console.log(numero);
        }
    }
}
const inicioSesion = (clave) => {
    const acceso = ["clave1", "clave2", "clave3"];
    let intentos = 0;
    
    if (acceso.includes(clave)) {
        console.log("¡Acceso concedido!");
    } else {
        intentos++;
        if (intentos < 3) {
            console.log("Clave incorrecta. Intenta de nuevo.");
        } else {
            console.log("¡Intruso detectado! Alerta de seguridad activada.");
        }
    }
}
const minimoMaximo = (numeros) =>  {

        console.log(`El valor minimo del arreglo de numero es ${Math.min(...numeros)}`);
        console.log(`El valor mayor del arreglo de numero es ${Math.max(...numeros)}`);
        console.log(`El valor promedio es ${(Math.min(...numeros) + Math.max(...numeros)) / 2}`);
}
const numerosPares1 = (pares) => {
    if (pares == null || pares == '') {

        alert('Debes introducir un valor');
      }
      
      for (let i = 0; i <= pares; i++) {
        if (i % 2 == 0) {
          console.log(i);
        }
      
      }
}
const interfazSigno = (numero) => {
    //console.clear();
    console.log('*************************************'.green);
    console.log('*          FUNCION SIGNO            *'.bgYellow);
    console.log('*************************************'.green);
    console.log(`*     el numero ${numero} es ` + functions.signo(numero)+`.     *`);
    console.log(`*************************************\n`.green);

}

const interfazEncontroCaracter = (caracter) => {
    //console.clear();
    console.log('************************************'.cyan);
    console.log('*     FUNCION ENCONTRO CARACTER    *'.bgGreen);
    console.log('************************************'.cyan);
    console.log(`*     el caracter ${caracter.toUpperCase()}` + functions.encontrtoCararter(caracter.toUpperCase())+`   *`);
    console.log(`************************************\n`.cyan);
}
const interfazbusquedaBebida = (Bebida) => {

    //console.clear();
    console.log('*************************************'.yellow);
    console.log('*      FUNCION VENTA DE BEBIDAS     *'.bgBlue);
    console.log('*************************************'.yellow);
    console.log(`*  La bebida ${Bebida} ` + functions.busquedaBebida(Bebida)+`  *`);
    console.log(`*************************************\n`.yellow);

}
const interfazmediotransporte = (Medio) => {
    //console.clear();
    console.log('******************************************'.grey);
    console.log('*         FUNCION TRANSPORTE             *'.bgRed);
    console.log('******************************************'.grey);
    console.log(`*el transporte ${Medio}` + functions.mediotransporte(Medio)+`*`);
    console.log(`******************************************\n`.grey);

}
const interfazfacturaproducto = (cantidad, precio, descuento) => {
    //console.clear();
    console.log('*************************************'.red);
    console.log('*         FUNCION PRODUCTO          *'.bgMagenta);
    console.log('*************************************'.red);
    console.log(`*           FACTURA ${cantidad, precio, descuento}` + functions.facturaproducto(cantidad, precio, descuento)+`            *`);
    console.log(`*************************************\n`.red);

}

const interfazbedidaComida = (menú) => {
    //console.clear();
    console.log('*************************************'.magenta);
    console.log('*         FUNCION MENÙ              *'.bgGreen);
    console.log('*************************************'.magenta);
    console.log(`* bebida recomedada ${menú}` + functions.bebidaComida(menú)+`*`);
    console.log(`*************************************\n`.magenta);
}

const interfazsalaJuegos = (pago) => {
    //console.clear();
    console.log('**************************************'.red);
    console.log('*         FUNCION VIDEO JUEGOS       *'.bgYellow);
    console.log('**************************************'.red);
    console.log(`* ${pago}` + functions.salaJuegos(pago)+`*`);
    console.log(`**************************************\n`.red);
}

const interfazcontarNumero = (número) => {
    console.log('*************************************'.yellow);
    console.log('*       FUNCION ENTEROS POSITIVOS   *'.bgRed);
    console.log('*************************************'.yellow);
    console.log(`*          Numero ${número}                *       `);
    console.log('*************************************\n'.yellow);
    
    functions.contarNumero(número); 
}
const interfaznumerosPares = (numeros) => {
    console.log('*************************************'.magenta);
    console.log('*       FUNCION NUMEROS PARES       *'.bgCyan);
    console.log('*************************************'.magenta);
    console.log(`*            Numero ${numeros}              *`);
    console.log('*************************************\n'.magenta);

    functions.numerosPares(numeros); // Llamada a la función numerosPares
}
const interfazrepetirCaracter = (caracter, veces) => {
    console.log('*************************************'.cyan);
    console.log('*         FUNCION  CARACTER         *'.bgMagenta);
    console.log('*************************************'.cyan);
    console.log(`*    ${caracter.repeat(veces)}      *`); 
    console.log('*************************************\n'.cyan);
}
const interfazcontadorBase = (base) => {
    console.log('*************************************'.red);
    console.log('*          FUNCION CONTADOR         *'.bgBlue);
    console.log('*************************************'.red);
    console.log(`*            en base ${base}             *`);
    console.log('*************************************\n'.red);

    contadorBase(base); // Llamada a la función contadorBase
}
const interfazinicioSesion = (clave) => {
    console.log('**************************************'.yellow);
    console.log('*          FUNCION ACCESO            *'.bgGreen);
    console.log('**************************************'.yellow);
    console.log(`*          ${clave} `+`         *`); // Llamada a la función inicioSesion
    console.log(`**************************************\n`.yellow);
}
const interfazminimoMaximo = (numeros) => {
    console.log('**************************************'.green);
    console.log('*     FUNCION MINIMO Y MAXIMO        *'.bgCyan);
    console.log('**************************************'.green);
    console.log(`*     el numero menor es: ${Math.min(...numeros)}         *`);
    console.log(`*     el numero mayor es: ${Math.max(...numeros)}         *`);
    console.log(`*     el promedio es: ${(Math.min(...numeros) + Math.max(...numeros)) / 2}           *`);
    console.log('**************************************'.green);
}
const interfaznumerosPares1 = (pares) => {
    console.log('**************************************'.blue);
    console.log('*    FUNCION CONTAR NUEMROS PARES    *'.bgGreen);
    console.log('**************************************'.blue);
    console.log(`* `+ functions.numerosPares1(pares)+`*`);
    console.log('**************************************'.blue);
}


functions.signo = signo;
functions.interfazSigno = interfazSigno;
functions.encontrtoCararter = encontrtoCararter;
functions.interfazEncontroCaracter = interfazEncontroCaracter;
functions.busquedaBebida = busquedaBebida;
functions.interfazbusquedaBebida = interfazbusquedaBebida;
functions.mediotransporte = mediotransporte;
functions.interfazmediotransporte = interfazmediotransporte;
functions.facturaproducto=facturaproducto;
functions.interfazfacturaproducto = interfazfacturaproducto;
functions.bebidaComida = bebidaComida;
functions.interfazbedidaComida = interfazbedidaComida;
functions.salaJuegos = salaJuegos;
functions.interfazsalaJuegos = interfazsalaJuegos;
functions.contarNumero = contarNumero;
functions.interfazcontarNumero = interfazcontarNumero;
functions.numerosPares = numerosPares;
functions.interfaznumerosPares= interfaznumerosPares;
functions.tablaMultiplicar=tablaMultiplicar;
functions.tablaMultiplicar=tablaMultiplicar;
functions.repetirCaracter= repetirCaracter;
functions.interfazrepetirCaracter=interfazrepetirCaracter;
functions.contadorBase=contadorBase;
functions.interfazcontadorBase=interfazcontadorBase;
functions.inicioSesion=inicioSesion;
functions.interfazinicioSesion=interfazinicioSesion;
functions.minimoMaximo=minimoMaximo;
functions.interfazminimoMaximo=interfazminimoMaximo;
functions.numerosPares1=numerosPares1;
functions.interfaznumerosPares1=interfaznumerosPares1;


module.exports = functions;