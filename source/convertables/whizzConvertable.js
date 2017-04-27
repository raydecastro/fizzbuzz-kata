import Convertable from "./convertable";

class WhizzConvertable extends Convertable {
    constructor() {
        super();

        this.text = "Whizz";
    }

    convert(aNumber) {
        if (this.isDivisibleBySeven(aNumber)) {
            return this.text;
        }

        return aNumber;
    }

    isDivisibleBySeven(aNumber) {
        return (aNumber % 7) === 0;
    }
}

export default WhizzConvertable; 
