const calculator = {
    value: 0,
    add: function (num) {
        this.value += num;
        return this;
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
        return this;
    },
    getValue: function () {
        return this.value;
    }
};

const result = calculator.add(5).multiply(3).subtract(2).divide(4).getValue();