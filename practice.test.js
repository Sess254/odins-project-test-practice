import {capitalize, reverseString} from './practice'


it('takes a string and captitalizes first character', () => {
    expect(capitalize('cat')).toEqual('Cat')
})

it('takes a string and reverses it', ()=> {
    expect(reverseString('hello')).toEqual('olleh')
})