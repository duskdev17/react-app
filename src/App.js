import { useEffect } from 'react';

const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=f9b9c0bb';

const App = () => {

    const searchMovies = async (title) => {
        const response = await fetch('${API_URL}&s=${title}');
        const data = await response.json();

        console.log(data);
    }

    useEffect(() => {
        searchMovies('John');
    }, []);


    return(
        <h1>My App</h1>
    );
}

export default App;