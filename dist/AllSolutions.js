"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
{
    function formatString(input, toUpper) {
        if (toUpper === true || toUpper == null) {
            return input.toUpperCase();
        }
        else {
            return input.toLowerCase();
        }
    }
    const result = formatString('asdLKKJHasd', true);
}
{
    const books = [
        {
            title: 'book1',
            rating: 3.4
        },
        {
            title: 'book2',
            rating: 4
        },
        {
            title: 'book3',
            rating: 4.2
        },
        {
            title: 'book4',
            rating: 4.8
        }
    ];
    function filterByRating(items) {
        const output = items.filter(book => {
            if (book.rating >= 4) {
                return book;
            }
        });
        return output;
    }
    const result = filterByRating(books);
}
{
    const bros1 = ['rifat', 'shawon', 'emon'];
    const bros2 = ['shakib', 'sabbir', 'udoy'];
    const bros3 = ['sabab', 'hasu'];
    function concatenateArrays(...arrays) {
        // return arrays.forEach((arr:T[])=>  console.log(`${arr}`))
        return arrays.reduce((current, next) => current.concat(next), []);
    }
    const result = concatenateArrays(bros1, bros2, bros3);
}
{
    class Vehicle {
        constructor(make, year) {
            this.make = make;
            this.year = year;
        }
        getInfo() {
            console.log(`Make: ${this.make}, Year:${this.year} `);
        }
    }
    class Car extends Vehicle {
        constructor(make, year, model) {
            super(make, year);
            this._model = model;
        }
        getModel() {
            console.log(`Model:${this._model}`);
        }
    }
    const myCar = new Car('toyota', 2020, 'corolla');
}
{
    function processValue(value) {
        if (typeof value === 'string') {
            return value.length;
        }
        else {
            const doubleValue = value * 2;
            return doubleValue;
        }
    }
    const result = processValue(3456);
}
{
    const products = [
        { name: "Pen", price: 10 },
        { name: "Notebook", price: 25 },
        { name: "Bag", price: 50 }
    ];
    function getMostExpensiveProduct(products) {
        if (products.length === 0)
            return null;
        const highestPrice = products.reduce((currentPrice, maxPrice) => maxPrice.price > currentPrice.price ? maxPrice : currentPrice);
        return highestPrice;
    }
}
{
    let Day;
    (function (Day) {
        Day[Day["Monday"] = 0] = "Monday";
        Day[Day["Tuesday"] = 1] = "Tuesday";
        Day[Day["Wednesday"] = 2] = "Wednesday";
        Day[Day["Thursday"] = 3] = "Thursday";
        Day[Day["Friday"] = 4] = "Friday";
        Day[Day["Saturday"] = 5] = "Saturday";
        Day[Day["Sunday"] = 6] = "Sunday";
    })(Day || (Day = {}));
    function getDayType(day) {
        if (day === Day.Sunday) {
            return 'weekend';
        }
        else {
            return 'weekday';
        }
    }
    const typeday = getDayType(Day.Sunday);
}
{
    function squareAsync(n) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                if (n < 0) {
                    reject('Error: Negative number not allowed');
                }
                else {
                    setTimeout(() => {
                        resolve(n * n);
                    }, 1000);
                }
            });
        });
    }
    const result = squareAsync(-3)
        .then(console.log)
        .catch(console.error);
}
