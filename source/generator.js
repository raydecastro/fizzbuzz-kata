class Generator {
    constructor() {
        this.converter = undefined;
    }
    
    generate(maxNumber) {
        return this.generateArray(maxNumber, this.converter);
    }

    generateArray(maxNumber, converter) {
        let list = [];

        for (let i = 1; i <= maxNumber; i++) {
            list.push(converter.convert(i));
        }

        return list;
    }
}

export default Generator;
