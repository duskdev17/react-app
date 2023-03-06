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



    // //JavaScript Classes
    // class Car{
    //     constructor(name, year){
    //         this.name = name;
    //         this.year = year;
    //     }
    // }

    // const myCar1 = new Car('BMW', 2015);
    // const myCar2 = new Car('Audi', 2016);


    // return(
    //     <>My cars are {myCar1.name} and {myCar2.name}. 
    //     I bought {myCar1.name} in {myCar1.year} and {myCar2.name} in {myCar2.year}.</>
    // )



    // // Javascript Promises
    // // returns a promise
    // let countValue = new Promise(function (resolve, reject) {
    //     reject('Promise rejected'); 
    // });
    
    // // executes when promise is resolved successfully
    // countValue.then(
    //     function successValue(result) {
    //         console.log(result); // Promise resolved
    //     },
    // )





    // // JS Symbol()
    // const person = {
    //     firstName: "John",
    //     lastName: "Doe",
    //     age: 50,
    //     eyeColor: "blue"
    //   };
      
    //   let id = Symbol('id');
    //   person[id] = 140353;
    //   // Now person[id] = 140353
    //   // but person.id is still undefined

    //   return(
    //     <>{person.id}</>
    //   )




    // //default parameters
    // function myFunction(x = 10, y = 10){
    //     return x + y;
    // }

    // let value = myFunction(2);

    // return(
    //     <>{value}</>
    // )



    // //rest parameter
    // function sum(...args) {
    //     let sum = 0;

    //     for(let arg of args)
    //         sum = sum + arg;
    //     return sum;
    // }

    // let x = sum(3, 4, 4, 3, 1, 6, 7, 3, 2, 7);


    // return(
    //     <h1>Summation is: {x}</h1>
    // )





    // // JS String.includes()
    // let msz = undefined;
    // let text = "Hello World. I am Null."

    // let result = text.includes("Hello");

    // if (result == true){
    //     msz = 'String found';
    // }
    // else{
    //     msz = 'String not found';
    // }


    // return(
    //     <h1>{msz}</h1>
    // )


    // // JS String.includes()
    // let msz = undefined;
    // let text = "Hello World. I am Null."

    // //let result = text.startsWith("am");
    // let result = text.endsWith(".");

    // if (result == true){
    //     msz = 'String found';
    // }
    // else{
    //     msz = 'String not found';
    // }


    // return(
    //     <h1>{msz}</h1>
    // )






    // //Arrays
    // let x = Array.from("ABCDEFG") 

    // return(
    //         <h1>{x}</h1>
    // )

    

    // // Array keys
    // let text = "";

    // const keyboards = ['keychron', 'Royal Kludge', 'Corsair', 'Mumre'];
    // const keys = keyboards.keys();

    // for( let x in keys ){
    //     text += x + "<br>";
    // }

    // return(
    //     <>{text}</>
    // )



    // //Array Find
    // function findFunction(value, index, array){
    //     return value > 20;
    // }

    // const numbers = [10, 20, 19, 90, 32, 14, 40, 60];
    // //let first = numbers.find(findFunction);
    // let first = numbers.findIndex(findFunction);


    // return(
    //     <>{first}</>
    // )



    // //Math
    // //let x = Math.sign(-4.5);
    // //let x = Math.trunc(4.5);
    // //let x = Math.cbrt(125);
    // //let x = Math.log2(2);
    // let x = Math.log10(10);

    // return(
    //     <>{x}</>
    // )





    // //Number 
    // //let x = Number.MAX_SAFE_INTEGER;
    // let x = Number.isInteger(10.1);

    // return(
    //     <>{x}</>
    // )
    


    // //Square(n) Sum

    // function squareSum(numbers){
    //     var temp=0;
        
    //     for(let i=0; i<numbers.length; i++){
    //       temp = temp + numbers[i]*numbers[i];
    //     } 

    //     document.write(temp);
    //   }
      
    //   var numbers = new Array(1, 2, 2);
      
      
    //   return(
    //     squareSum(numbers)
    //   )
      

      function opposite(number) {
        
        console.log(-number);
      }
      
      var number = -5;
      
      return(
        opposite(number)
      )


}

export default App;