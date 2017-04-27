import {expect} from "chai";
import Generator from "../source/generator";
import FizzBuzzWhizzFizzConvertable from "../source/convertables/fizzBuzzWhizzFizzConvertable";

describe("FizzBuzzWhizzFizzGenerator", () => {
    it("shall create an array of numbers until a max number and convert numbers that are multiples of three or contains three to 'Fizz',\n" +
    "multiples of five to 'Buzz', multiples of seven to 'Whizz' and multiples of three and five to 'FizzBuzz'", () => {
        let generator = new Generator();
        generator.converter = new FizzBuzzWhizzFizzConvertable();

        expect(generator.generate(15)).to.deep.equal([1,2,'Fizz',4,'Buzz','Fizz','Whizz',8,'Fizz','Buzz',11,'Fizz','Fizz','Whizz','FizzBuzz']);
    });
});