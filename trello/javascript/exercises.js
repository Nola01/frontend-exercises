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
    Según parámetro es un int que indique el número de decimales al que redondear
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
round(2.1233, 3)
// console.log(round(2.1233, 2));





