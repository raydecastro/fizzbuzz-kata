import FizzConvertable from "./fizzConvertable";

class FizzFizzConvertable extends FizzConvertable {
    convert(aNumber) {
        if (this.isDivisibleByThree(aNumber) || this.isContainingThree(aNumber)) {
            return this.text;
        }

        return aNumber;
    }

    isContainingThree(aNumber) {
        return (aNumber.toString().indexOf('3') > -1);
    }
}

export default FizzFizzConvertable; 
