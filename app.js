"use strict";
(function () {
    var mifuncion = function (a) {
        return a.toUpperCase();
    };
    // eliminamos la palabra reservada function y al ser una función de una sola línea se pueden omitir las llaves
    var mifuncionF = function (a) { return a.toUpperCase(); }; //se reduce el tamaño de la función significativamente
    var sumaN = function (a, b) {
        return a + b;
    };
    var sumaF = function (a, b) { return a + b; };
    /*
        const hulk = {
            nombre: "Hulk",
           //smash es un método, básicamente es una función que puede invocar propiedades del objeto mismo al que pertenece
           // this lo que hace es apuntar hacia el objeto mismo al que pertenece, en ete caso hulk
            smash(){
                console.log(`${this.nombre} Smash!!!`);
            }
        }

        hulk.smash(); //imprimirá Hulk Smash!!!
        de esta forma no generará problemas, pero al agrgar una función como timeset si lo hará, ya que timeset necesita
        una función callback en sus parámetros, entonces el this ya no apuntará hacia el objeto hulk, sino a la función
        anónima, eso se soluciona con la función tipo flecha

    */
    var hulk = {
        nombre: "Hulk",
        smash: function () {
            var _this = this;
            setTimeout(//función que tiene como parámetros la funcíon flecha que llama a console.log y el tiempo en ms
            function () { console.log(_this.nombre + " Smash!!!"); }, 1000);
        }
    };
    hulk.smash();
})();
