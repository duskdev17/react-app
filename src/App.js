import React from "react";

const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=f9b9c0bb';

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



    //arrow function => es6
    const x = (x, y) => x*y;
    const y = (m, n) => { return m*n };

    console.log(x(2, 5));
    console.log(y(3, 4));






}

export default App;