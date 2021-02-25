"use strict";
(function () {
    /*
    Creando objeto avenger que tiene como propiedades
    el nombre, nombre clave y su poder
     */
    var avenger = {
        nombre: "steve",
        clave: "Capitán América",
        poder: "super fuerza"
    };
    /*
        desestructurar un objeto o un array es con la finalidad de utilizar sus propiedades como varibles o constantes
        independientes
     */
    //función que va a extraer las propiedades del objeto
    var extraer = function (_a) {
        var nombre = _a.nombre, poder = _a.poder;
        console.log(nombre);
        console.log(poder);
    };
    // extraer(avenger);
    //arreglo con nombres de avengers
    var avengers = ["Thor", "Ironman", "spiderman"];
    /*
    la función tiene como argumentos variables nuevas, las cuales
    van a almacenar un dato de array dependiento la posición
    de esta forma thor recibirá el dato de la primera posición del
    array y así sucesivamente.
     */
    var extraerArr = function (_a) {
        var thor = _a[0], ironman = _a[1], spiderman = _a[2];
        console.log(thor);
        console.log(ironman);
        console.log(spiderman);
    };
    extraerArr(avengers);
})();
