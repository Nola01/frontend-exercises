/*
    Ejercicio 1
    Dado un array de objetos, obtener el objeto con el id 3
    const arrNames = [
    {id: 1, name: 'Pepe'},
    {id: 2, name: 'Juan'},
    {id: 3, name: 'Alba'},
    {id: 4, name: 'Toby'},
    {id: 5, name: 'Lala'}
    ]

*/

const arrNames = [
    {id: 1, name: 'Pepe'},
    {id: 2, name: 'Juan'},
    {id: 3, name: 'Alba'},
    {id: 4, name: 'Toby'},
    {id: 5, name: 'Lala'}
]

const name3 = arrNames.filter(name => name.id === 3);

console.log('Ejercicio 1: ', name3);



/*
    Ejercicio 2
    Dado un array de valores, devolver un array truthy (sin valores nulos, vacíos, no números, indefinidos o falsos)

    const arrDirty = [NaN, 0, 5, false, -1, '',undefined, 3, null, 'test']


*/

const arrDirty = [NaN, 0, 5, false, -1, '',undefined, 3, null, 'test']

const arrClean = arrDirty.filter(e => e)

console.log('Ejercicio 2: ', arrClean);



/**
    Ejercicio 3
    Dado un array de ciudades, sacar todas las ciudades de España que no sean capitales
    const arrCities = [
    {city: 'Logroño', country: 'Spain', capital: false},
    {city: 'Paris', country: 'France', capital: true},
    {city: 'Madrid', country: 'Spain', capital: true},
    {city: 'Rome', country: 'Italy', capital: true},
    {city: 'Oslo', country: 'Norway', capital: true},
    {city: 'Jaén', country: 'Spain', capital: false}
    ]

 */

const arrCities = [
    {city: 'Logroño', country: 'Spain', capital: false},
    {city: 'Paris', country: 'France', capital: true},
    {city: 'Madrid', country: 'Spain', capital: true},
    {city: 'Rome', country: 'Italy', capital: true},
    {city: 'Oslo', country: 'Norway', capital: true},
    {city: 'Jaén', country: 'Spain', capital: false}
]

const arrNoCapital = arrCities.filter(city => !city.capital)

console.log('Ejercicio 3: ', arrNoCapital);


/**
    Ejercicio 4
    Dado tres arrays de números, sacar en un nuevo array la intersección de estos. 
    const arrNumber1 = [1,2,3];
    const arrNumber2 = [1,2,3,4,5];
    const arrNumber3 = [1,4,7,2];


 */

const arrNumber1 = [1,2,3];
const arrNumber2 = [1,2,3,4,5];
const arrNumber3 = [1,4,7,2];

const intersection = arrNumber2.filter(n2 => {
    if (arrNumber1.includes(n2) && arrNumber3.includes(n2)) {
        return n2;
    }
})

console.log('Ejercicio 4: ', intersection);


/*
    Ejercicio 5
    Dado un array de ciudades, sacar en un nuevo array las ciudades no capitales con unos nuevos parámetros que sean city y isSpain. 
    El valor de isSpain será un booleano indicando si es una ciudad de España.
    Ejemplo: {city: "Logroño", isSpain: "true"}

    const arrCities2 = [
    {city: 'Logroño', country: 'Spain', capital: false},
    {city: 'Bordeaux', country: 'France', capital: false},
    {city: 'Madrid', country: 'Spain', capital: true},
    {city: 'Florence', country: 'Italy', capital: true},
    {city: 'Oslo', country: 'Norway', capital: true},
    {city: 'Jaén', country: 'Spain', capital: false}
    ]



*/

const arrCities2 = [
    {city: 'Logroño', country: 'Spain', capital: false},
    {city: 'Bordeaux', country: 'France', capital: false},
    {city: 'Madrid', country: 'Spain', capital: true},
    {city: 'Florence', country: 'Italy', capital: true},
    {city: 'Oslo', country: 'Norway', capital: true},
    {city: 'Jaén', country: 'Spain', capital: false}
]

const noCapital = arrCities2.filter(city => !city.capital && city.country === 'Spain')

const spanishCities = noCapital.map(city => {
    return ({
        city: city.city,
        isSpain: true
    })
})

console.log('Ejercicio 5: ', spanishCities);


/**
    Ejercicio 6
    Crea una función que redondee un número float a un número específico de decimales. 
    La función debe tener dos parámetros: 
    Primer parámetro es un número float con x decimales
    Segundo parámetro es un int que indique el número de decimales al que redondear
    Evitar usar el método toFixed()

    Ejemplo de uso de la función:

    const roundedResult = roundTo(2.123, 2);
    console.log(roundedResult); // 2.12
    
    const roundedResult = roundTo(1.123456789, 6);
    console.log(roundedResult); // 1.123457

 */

const round = (number, roundTo) => {
    let output = []
    let int =  Math.round(number)
    const decimals = number.toString().split('.')[1]
    for (let i = 0, len = decimals.length; i < len; i += 1) {
        output.push(+decimals.charAt(i));
    }
    
    if (roundTo === 0) {
    return int
    } else {
    int = int.toString() + '.'
    for (let i = 0; i < roundTo; i++) {
        int = int + output[i]
    }
    //console.log(parseFloat(int))
    return parseFloat(int)
    }
}
// round(2.1233, 3)
console.log('Ejercicio 6: ', round(2.1233, 2));


/**

    Ejercicio 7
    Crea una función que retorne los campos de un objeto que equivalgan a un valor “falsy” después de ser ejecutados por una función específica.

    La función debe tener dos parámetros:
    Primer parámetro es un objeto con x número de campos y valores
    Segundo parametro es una funcion que retorne un booleano, que se tiene que aplicar al objeto del primer parámetro

    Ejemplo de uso de la función:
    const result = returnFalsyValues({ a: 1, b: '2', c: 3 }, x => typeof x === 'string')
    
    console.log(result); // {a: 1, c: 3}

 */


const falsyValues = (obj, f) => {

    for (const key in obj) {
        if (Object.hasOwnProperty.call(obj, key)) {
            // console.log('objeto', obj)
            if (!f(obj[key])) {
                delete obj[key]
            }
        }
    }

    return obj
}

const result = falsyValues({a: 0, b: '', c: 22}, x => x)

console.log('Ejercicio 7: ', result);


/**
    Ejercicio 8
    Crea una función que convierta un número de bytes en un formato con valores legibles ('B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB')

    La función debe tener 2 parámetros:
    Primer parámetro debe ser el número de bytes
    Segundo parámetro debe ser un número especificando la cantidad de dígitos a los que se debe truncar el 
    resultado (esto se puede hacer con Number.prototype.toPrecision()). Por defecto, este parámetro debe de tener un valor de 3.

    Ejemplo de uso de la función:
    const result = fromBytesToFormattedSizeUnits(1000);
    console.log(result); // 1KB
    
    const result = fromBytesToFormattedSizeUnits(123456789);
    console.log(result); // 123MB
    
    const result = fromBytesToFormattedSizeUnits(-12145489451.5932, 5);
    console.log(result); // -12.145GB
 

 */

const formatBytes = (bytes, truncTo = 3) => {
    const f = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']
    let i = 0
    for (i = 0; bytes >= 1024 || bytes <= -1024; i++) {
        bytes = bytes / 1024
    }
    
    return (bytes.toPrecision(truncTo) + f[i]);
        console.log(i)
}

console.log('Ejercicio 8: ', formatBytes(123456789));
console.log('Ejercicio 8: ', formatBytes(-12145489451.5932, 5));

/**
    Ejercicio 9
    Crea una función que a partir de un objeto de entrada, retorne un objeto asegurándose que las claves del objeto estén en lowercase.
    La función debe tener un objeto como único parámetro.

    Ejemplo de uso de la función:
    const myObject = { NamE: 'Charles', ADDress: 'Home Street' };
    const myObjLowercase = toLowercaseKeys(myObject);
    console.log(myObjLowercase); // { name: 'Charles', address: 'Home Street' }

 */

const keysToLowerCase = (obj) => {
    for (const key in obj) {
        if (Object.hasOwnProperty.call(obj, key)) {
            const newKey = key.toLowerCase()
                // console.log(newKey)
                    obj[newKey] = obj[key]
                // console.log('new', obj)
            delete obj[key]
                
        }
    }

    return obj
}

console.log('Ejercicio 9: ', keysToLowerCase({ NamE: 'Charles', ADDress: 'Home Street' }))




/**
    Ejercicio 10
    Crea una función que elimine las etiquetas html o xml de un string.
    La función debe tener un string como único parámetro.

    Ejemplo de uso de la función:
    const result = removeHTMLTags('<div><span>lorem</span> <strong>ipsum</strong></div>');
    
    console.log(result); // lorem ipsum

 */

    



/**
    Ejercicio 11
    Crea una función que tome un array como parametro y lo divida en arrays nuevos con tantos elementos como sean especificados.
    La función debe tener dos parámetros:
    El primer parámetro es el array entero que se quiere dividir.
    El segundo parámetro es el número de elementos que deben tener los arrays en los que se divida el array original del primer parámetro.

    Ejemplo de uso de la función:
    const result = splitArrayIntoChunks([1, 2, 3, 4, 5, 6, 7], 3);
    console.log(result); // [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7 ] ]

 */


