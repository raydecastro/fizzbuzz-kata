import Convertable from "./convertable";

class BuzzConvertable extends Convertable {
    constructor() {
        super();

        this.text = "Buzz";
    }

    convert(aNumber) {
        if (this.isDivisibleByFive(aNumber)) {
            return this.text;
        }

        return aNumber;
    }

    isDivisibleByFive(aNumber) {
        return (aNumber % 5) === 0;
    }
}

export default BuzzConvertable; 
