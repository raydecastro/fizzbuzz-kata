import FizzBuzzWhizzConvertable from "./fizzBuzzWhizzConvertable";
import FizzFizzConvertable from "./fizzFizzConvertable";

class FizzBuzzWhizzFizzConvertable extends FizzBuzzWhizzConvertable {
    constructor() {
        super();
        
        this.fizz = new FizzFizzConvertable();
    }
}

export default FizzBuzzWhizzFizzConvertable;
