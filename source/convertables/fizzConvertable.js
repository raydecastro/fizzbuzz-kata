import Convertable from "./convertable";

class FizzConvertable extends Convertable {
    constructor () {
        super();

        this.text = "Fizz";
    }

    convert(aNumber) {
        if (this.isDivisibleByThree(aNumber)) {
            return this.text;
        }

        return aNumber;
    }

    isDivisibleByThree(aNumber) {
        return (aNumber % 3) === 0;
    }
}

export default FizzConvertable; 
