import {expect} from "chai";
import Generator from "../source/generator";
import FizzBuzzWhizzConvertable from "../source/convertables/fizzBuzzWhizzConvertable";

describe("FizzBuzzWhizzGenerator", () => {
    it("shall create an array of numbers until a max number and convert numbers that are multiples of three to 'Fizz',\n" +
    "multiples of five to 'Buzz', multiples of seven to 'Whizz' and multiples of three and five to 'FizzBuzz'", () => {
        let generator = new Generator();
        generator.converter = new FizzBuzzWhizzConvertable();

        expect(generator.generate(15)).to.deep.equal([1,2,'Fizz',4,'Buzz','Fizz','Whizz',8,'Fizz','Buzz',11,'Fizz',13,'Whizz','FizzBuzz']);
    });
});