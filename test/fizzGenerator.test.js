import {expect} from "chai";
import Generator from "../source/generator";
import FizzConvertable from "../source/convertables/fizzConvertable";

describe("FizzGenerator", () => {
    it("shall create an array of numbers until a max number and convert numbers that are multiples of three to 'Fizz'", () => {
        let generator = new Generator();
        generator.converter = new FizzConvertable();

        expect(generator.generate(15)).to.deep.equal([1, 2,'Fizz',4,5,'Fizz',7,8,'Fizz',10,11,'Fizz',13,14,'Fizz']);
    });
});