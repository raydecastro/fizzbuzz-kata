import Generator from "./generator";
import FizzBuzzConvertable from "./convertables/fizzBuzzConvertable";
import Printer from "./printer";

class FizzBuzz {
    constructor() {
        this.printer = new Printer();
    }

    print(maxCount) {
        let self = this;
        let generator = new Generator();
        
        generator.converter = new FizzBuzzConvertable();
        
        return generator.generate(maxCount).map(aValue => self.printer.print(aValue));
    }
}

export default FizzBuzz;
