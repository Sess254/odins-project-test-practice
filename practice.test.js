import {capitalize, 
        reverseString,
        calculator ,
        ceasarCipher,
        analyzeArray} from './practice'

describe('capitalize', () => { 
    it('takes a string and captitalizes first character', () => {
        expect(capitalize('cat')).toEqual('Cat')
    })
})

describe('reversString', ()=> {
    it('takes a string and reverses it', ()=> {
        expect(reverseString('hello')).toEqual('olleh')
    })

})

describe('calculator', () => {
    it('adds two numbers', () => {
        expect(calculator.add(2,3)).toBe(5)
    })

    it('subracts two numbers', () => {
        expect(calculator.sub(4, 2)).toBe(2)
    })

    it('multiplies two numbers', () => {
        expect(calculator.mul(4,2)).toBe(8)
    })

    it('divides two numbers', () => {
        expect(calculator.div(4,2)).toBe(2)
    })
})

describe('ceasarCipher', () => {
    it('that takes a string and a shift factor and returns it with each character “shifted”.', () => {
        expect(ceasarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!')
    })

})

describe('analyzeArray', () => {
    it('akes an array of numbers and returns an object with the specified properties', () => {
        expect(analyzeArray([1,8,3,4,2,6])).toBe(`object == {\n   average: 4,\n   min: 1,\n   max: 8,\n   length: 6\n};`)
    }) 
    
})