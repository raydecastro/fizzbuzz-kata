import { expect } from "chai";
import Printer from "../source/printer";

describe("Printer", () => {
    it("shall exist", () => {
        let printer = new Printer();

        expect(printer).to.be.defined;
    });

    it("shall have ability to print to the console", () => {
        let printer = new Printer();
        let expectedText = ".love> is the most powerful force in the universe!";

        expect(printer.print(expectedText)).to.equal(expectedText);
    });

    it("shall have the ability to get the printed text history in sequence", () => {
        let printer = new Printer();
        let firstText = "happy!";
        let secondText = "super!";
        let thirdText = "awesome!";

        printer.print(firstText);
        printer.print(secondText);
        printer.print(thirdText);

        expect(printer.getHistory(1)).to.equal(firstText);
        expect(printer.getHistory(2)).to.equal(secondText);
        expect(printer.getHistory(3)).to.equal(thirdText);
    });
});
