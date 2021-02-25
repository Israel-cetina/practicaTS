(function () {
        /*
        Creando objeto avenger que tiene como propiedades
        el nombre, nombre clave y su poder
         */

        const avenger = {
            nombre: "steve",
            clave: "Capitán América",
            poder: "super fuerza"
        }
        /*
            desestructurar un objeto o un array es con la finalidad de utilizar
            sus propiedades como varibles o constantes
            independientes
         */
        //función que va a extraer las propiedades del objeto
        const extraer = ( {nombre, poder}: any ) => {
            console.log(nombre);
            console.log(poder);
        }

        // extraer(avenger);

        //arreglo con nombres de avengers
        const avengers: string[] = ["Thor", "Ironman", "spiderman"];

        /*
        la función tiene como argumentos variables nuevas, las cuales
        van a almacenar un dato de array dependiento la posición
        de esta forma thor recibirá el dato de la primera posición del
        array y así sucesivamente.
         */
        const extraerArr = ([thor, ironman, spiderman]: string[]) => {
            console.log(thor);
            console.log(ironman);
            console.log(spiderman);
        }

        extraerArr(avengers);
    }
)();