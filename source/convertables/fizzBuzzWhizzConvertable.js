import FizzBuzzConvertable from "./fizzBuzzConvertable";
import WhizzConvertable from "./whizzConvertable";

class FizzBuzzWhizzConvertable extends FizzBuzzConvertable {
    constructor() {
        super();
        
        this.whizz = new WhizzConvertable();
    }

    convert(aNumber) {
        aNumber = this.convertToFizzBuzz(aNumber);
        aNumber = this.fizz.convert(aNumber);
        aNumber = this.buzz.convert(aNumber);
        aNumber = this.whizz.convert(aNumber);
        
        return aNumber;
    }
}

export default FizzBuzzWhizzConvertable;
