class Printer {
    constructor() {
        this.history = [];
    }
    
    print(text) {
        this.history.push(text);
        console.log(text);
        return text;
    }

    getHistory(textNumber) {
        return this.history[textNumber - 1];
    }
}

export default Printer;
