import { Example } from './example'

describe("test example class",function(){

    it("test example function",function(){
        let ex = new Example();
        let result = ex.example("Hello!");
        expect(result).toEqual("Argument is Hello!");
    });
});