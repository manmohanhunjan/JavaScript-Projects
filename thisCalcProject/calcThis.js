const calculator = {  // object literal
    value: 0,
    add: function (num) {  // method
        this.value += num; // this refers to the object itself
        return this;    // return the object itself
    },
    subtract: function (num) {
        this.value -= num;
        return this;
    },
    multiply: function (num) {
        this.value *= num;
        return this;
    },
    divide: function (num) {
        this.value /= num;
        return this;
    },
    clear: function () {
        this.value = 0;
        return this;    // return the object itself to allow chaining of methods how?  
    },
    getValue: function () {
        return this.value;
    }
};

const result = calculator.add(5).multiply(3).subtract(2).divide(4).getValue();