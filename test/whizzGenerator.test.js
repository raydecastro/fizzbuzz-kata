import {expect} from "chai";
import Generator from "../source/generator";
import WhizzConvertable from "../source/convertables/whizzConvertable";

describe("WhizzGenerator", () => {
    it("shall create an array of numbers until a max number and convert numbers that are multiples of seven to 'Whizz'", () => {
        let generator = new Generator();
        generator.converter = new WhizzConvertable();

        expect(generator.generate(15)).to.deep.equal([1,2,3,4,5,6,'Whizz',8,9,10,11,12,13,'Whizz',15]);
    });
});