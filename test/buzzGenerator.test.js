import {expect} from "chai";
import Generator from "../source/generator";
import BuzzConvertable from "../source/convertables/buzzConvertable";

describe("BuzzGenerator", () => {
    it("shall create an array of numbers until a max number and convert numbers that are multiples of five to 'Buzz'", () => {
        let generator = new Generator();
        generator.converter = new BuzzConvertable();

        expect(generator.generate(15)).to.deep.equal([1,2,3,4,'Buzz',6,7,8,9,'Buzz',11,12,13,14,'Buzz']);
    });
});