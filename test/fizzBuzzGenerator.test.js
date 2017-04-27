import {expect} from "chai";
import Generator from "../source/generator";
import FizzBuzzConvertable from "../source/convertables/fizzBuzzConvertable";

describe("FizzBuzzGenerator", () => {
    it("shall create an array of numbers until a max number and convert numbers that are multiples of three to 'Fizz',\n" +
    "multiples of five to 'Buzz', and multiples of three and five to 'FizzBuzz'", () => {
        let generator = new Generator();
        generator.converter = new FizzBuzzConvertable();

        expect(generator.generate(15)).to.deep.equal([1,2,'Fizz',4,'Buzz','Fizz',7,8,'Fizz','Buzz',11,'Fizz',13,14,'FizzBuzz']);
    });
});