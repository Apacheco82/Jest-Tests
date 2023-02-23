// importar la función sum del archivo app.js
const {sum} = require('./app.js');

// comienza tu primera prueba
test('adds 14 + 9 to equal 23', () => {
    //dentro de la prueba llamamos a nuestra función sum con 2 números
    let total = sum(14, 9);

    // esperamos que la suma de esos 2 números sea 23
    expect(total).toBe(23);
});

test("One euro should be 1.206 dollars", function(){
    // importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js')
    
    // hago mi comparacion (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro son 1.2 dolares, entonces 3.5 euros deberian ser = (3.5 * 1.2)
})
// tenemos que incluir la funcion en el exports para que sea exportada a otros archivos como test.js

test("One dollar to Yen" , function(){
    const {fromDollarToYen} = require("./app.js")
    const expected = (10/1.2) * 127.9
    expect(fromDollarToYen(10)).toBe(expected)

})

test("One Yen to Pound", function(){
const {fromYenToPound} = require("./app.js")
const expected = (10 / 127.9) * 0.8
expect(fromYenToPound(10)).toBe(expected)
})