require('colors')

const functions = require('./proy_modules/functions.js')

const contador = 10;

const main = async() =>{

   // console.clear();

    const numero = 10;
    functions.interfazSigno(numero);

    const caracter = 'd';
    functions.interfazEncontroCaracter(caracter);

    const Bebida = 'vino'
    functions.interfazbusquedaBebida(Bebida);

    const Medio='carro'
    functions.interfazmediotransporte(Medio)

    const precio= 100;
    const descuento = 20;
    const cantidad = 12;
    functions.interfazfacturaproducto(cantidad, precio, descuento);

    const menú= 'carne'
    functions.interfazbedidaComida(menú);

    const pago= 2000;
    functions.interfazsalaJuegos(pago);

    const numeroLimite = 10; 
    functions.interfazcontarNumero(numeroLimite);

    const numeroLimites= 20;
    functions.interfaznumerosPares(numeroLimites);

    const numeroTabla = 5;
    functions.tablaMultiplicar(numeroTabla);

    const char = "hola ";   // Carácter a repetir
    const repeticiones = 5; // Número de repeticiones
    functions.interfazrepetirCaracter(char, repeticiones);
    
    const baseNumerica = 4; // Cambia este valor al número deseado
    functions.interfazcontadorBase(baseNumerica);

   const claveUsuario = "acceso concedido"; // Cambia esta clave según sea necesario
    functions.interfazinicioSesion(claveUsuario);

    const minimoMaximo = [7, 12, -3, 8, 18, 2, 24]; //bcaracteres, a buscar minimo y maximo
    functions.interfazminimoMaximo(minimoMaximo);

    const numerosPares1 = [16]; // de aqui sale los numeros del 0 al 16 que son pares 
    functions.interfaznumerosPares1(numerosPares1);
}

main();