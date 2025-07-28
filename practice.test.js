import {capitalize, 
        reverseString,
        calculator } from './practice'

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