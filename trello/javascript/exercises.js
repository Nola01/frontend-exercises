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

console.log(name3);



/*
Ejercicio 2
Dado un array de valores, devolver un array truthy (sin valores nulos, vacíos, no números, indefinidos o falsos)

const arrDirty = [NaN, 0, 5, false, -1, '',undefined, 3, null, 'test']


*/

const arrDirty = [NaN, 0, 5, false, -1, '',undefined, 3, null, 'test']

const arrClean = arrDirty.filter(e => e)

console.log(arrClean);





