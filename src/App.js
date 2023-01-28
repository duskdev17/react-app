import {useEffect} from "react";

const API_URL = 'https://www.omdbapi.com?apikey=f9b9c0bb';

const App = () => {

    const searchMovies = async (title) => {
        const response = await fetch('${API_URL}&s=${title}');
        const data = await response.json();

        console.log(data.Search);
    }

    useEffect(() => {
        searchMovies('Spiderman');
    }, []);


    return(
        <h1>My App</h1>
    );
}

export default App;