{

    function formatString(input: string, toUpper?: boolean | null) {

        if (toUpper === true || toUpper == null) {
            return input.toUpperCase()
        }
        else {
            return input.toLowerCase()
        }
    }

    const result = formatString('asdLKKJHasd', true)


}




{

    type BooksArray<T> = Array<T>

    type Book = {
        title: string;
        rating: number
    }
    const books: BooksArray<Book> = [
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
    ]

    function filterByRating(items: Book[]): { title: string; rating: number }[] {
        const output = items.filter(book => {
            if (book.rating >= 4) {
                return book
            }
        })
        return output
    }

    const result = filterByRating(books)


}




{


    type ConcateArray<T> = Array<T>

    const bros1: ConcateArray<string> = ['rifat', 'shawon', 'emon']
    const bros2: ConcateArray<string> = ['shakib', 'sabbir', 'udoy']
    const bros3: ConcateArray<string> = ['sabab', 'hasu']


    function concatenateArrays<T>(...arrays: T[][]): T[] {
        // return arrays.forEach((arr:T[])=>  console.log(`${arr}`))
        return arrays.reduce((current, next) => current.concat(next), [])
    }

    const result = concatenateArrays(bros1, bros2, bros3)

}



{


    class Vehicle {

        make: string;
        year: number

        constructor(make: string, year: number) {
            this.make = make;
            this.year = year;
        }

        getInfo() {
            console.log(`Make: ${this.make}, Year:${this.year} `);

        }

    }

    class Car extends Vehicle {
        private _model: string;
        constructor(make: string, year: number, model: string) {
            super(make, year)
            this._model = model
        }
        getModel() {
            console.log(`Model:${this._model}`);

        }
    }

    const myCar = new Car('toyota', 2020, 'corolla')


}


{




    function processValue(value: string | number): number {
        if (typeof value === 'string') {

            return value.length
        } else {
            const doubleValue = value * 2
            return doubleValue
        }

    }

    const result = processValue(3456)



}




{



    interface Product {
        name: string;
        price: number;
    }

    type ProductList<T> = Array<T>

    const products: ProductList<Product> = [
        { name: "Pen", price: 10 },
        { name: "Notebook", price: 25 },
        { name: "Bag", price: 50 }
    ]

    function getMostExpensiveProduct(products: Product[]): Product | null {

        if (products.length === 0) return null;

        const highestPrice = products.reduce((currentPrice, maxPrice) => maxPrice.price > currentPrice.price ? maxPrice : currentPrice)

        return highestPrice

    }



}



{



    enum Day {
        Monday,
        Tuesday,
        Wednesday,
        Thursday,
        Friday,
        Saturday,
        Sunday
    }


    function getDayType(day: Day): string {
        if (day === Day.Sunday) {
            return 'weekend'
        }
        else {
            return 'weekday'
        }
    }

    const typeday = getDayType(Day.Sunday)




}




{


    async function squareAsync(n: number): Promise<number> {
        return new Promise<number>((resolve, reject) => {
            if (n < 0) {
                reject('Error: Negative number not allowed')
            }
            else {
                setTimeout(() => {
                    resolve(n * n)
                }, 1000)

            }
        })
    }

    const result = squareAsync(-3)
        .then(console.log)
        .catch(console.error)



}