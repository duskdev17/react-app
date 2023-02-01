import React from "react";

//const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=f9b9c0bb';

const App = () => {

    // const searchMovies = async (title) => {
    //     const response = await fetch('${API_URL}&s=${title}');
    //     const data = await response.json();

    //     console.log(data);
    // }

    // useEffect(() => {
    //     searchMovies('John');
    // }, []);


    // return(
    //     <h1>My App</h1>
    // );


    // var x = 10;

    // {
    //     let x = 2;
    //     console.log('Value of X inside indent: ', x);
    // }

    // console.log('Value: ', x);


    // //constant
    // var x = 10

    // {
    //     const x = 2
    //     console.log('Value inside indent: ', x);
    // }

    // console.log('Value: ', x);



    // //arrow function => es6
    // const x = (x, y) => x*y;
    // const y = (m, n) => { return m*n };

    // console.log(x(2, 5));
    // console.log(y(30, 4));


    // //spread operator
    // const num = [10, 20, 54, 12, 34]
    // let maxValue = Math.max(...num)

    // return(
    //     <h1>Max Number: {maxValue}</h1>
    // );


    // const mechanical = ['Keychron', 'Razer', 'Corsair', 'Royal Kludge']
    // let text = '';

    // for (let x of mechanical){
    //     text += x + '';
    // }

    // let language = "JavaScript";
    // let text2 = "";
    
    // for (let x of language) {
    //     text2 += x + " ";
    // }
    


    // return(
    //     <>Mechanical Keyboards: {text2}</>
    // )



    // //Javascript Maps
    // const keyboards = new Map([
    //     ['Corsair', 1000],
    //     ['Razer', 2000],
    //     ['Royal Kludge', 3000],
    //     ['Keychron', 5000],
    //     ['Dareu', 1000]
    // ]);

    // return(
    //     <>Keyboards: {keyboards.get('Razer')}</>
    // )

    

    // //JavaScript Sets
    // const myName = new Set();

    // myName.add('A');
    // myName.add('n');
    // myName.add('i');
    // myName.add('k');

    // return(
    //     <>My name is: {myName}</>
    // )



    //JavaScript Classes
    class Car{
        constructor(name, year){
            this.name = name;
            this.year = year;
        }
    }

    const myCar1 = new Car('BMW', 2015);
    const myCar2 = new Car('Audi', 2016);


    return(
        <>My cars are {myCar1.name} and {myCar2.name}. 
        I bought {myCar1.name} in {myCar1.year} and {myCar2.name} in {myCar2.year}.</>
    )



}

export default App;