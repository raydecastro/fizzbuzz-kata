import {expect} from "chai";
import Generator from "../source/generator";

describe("Generator", () => {
    it("shall exist", () => {
        let generator = new Generator();

        expect(generator).to.be.defined;
    });
});