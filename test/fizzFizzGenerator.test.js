import {expect} from "chai";
import Generator from "../source/generator";
import FizzFizzConvertable from "../source/convertables/fizzFizzConvertable";

describe("FizzFizzGenerator", () => {
    it("shall create an array of numbers until a max number and convert numbers that are multiples of three " +
       "or contains the number three to 'Fizz'", () => {
        let generator = new Generator();
        generator.converter = new FizzFizzConvertable();

        expect(generator.generate(15)).to.deep.equal([1,2,'Fizz',4,5,'Fizz',7,8,'Fizz',10,11,'Fizz','Fizz',14,'Fizz']);
    });
});