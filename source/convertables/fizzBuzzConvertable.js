import Convertable from "./convertable";
import FizzConvertable from "./fizzConvertable";
import BuzzConvertable from "./buzzConvertable";

class FizzBuzzConvertable extends Convertable {
    constructor() {
        super();
        
        this.fizz = new FizzConvertable();
        this.buzz = new BuzzConvertable();

        this.text = this.fizz.text + this.buzz.text;
    }

    convert(aNumber) {
        aNumber = this.convertToFizzBuzz(aNumber);
        aNumber = this.fizz.convert(aNumber);
        aNumber = this.buzz.convert(aNumber);
        
        return aNumber;
    }

    convertToFizzBuzz(aNumber) {
        if (this.fizz.isDivisibleByThree(aNumber) && this.buzz.isDivisibleByFive(aNumber)) {
            return this.text;
        }

        return aNumber;
    }
}

export default FizzBuzzConvertable;
