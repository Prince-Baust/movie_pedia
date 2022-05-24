import React, {useEffect} from 'react';

const API_URL = 'http://www.omdbapi.com/?apikey=5656a896';

const App = () => {

  const searchMovie = async (title) => {
    const url = `${API_URL}&s=${title}`;

    const res = await fetch(url);
    const data = await res.json();

    console.log(data.Search);
  }

  useEffect(() => {
      searchMovie('spider-man');
  }, []);

  return (
    <div>
      <h1>App</h1>
    </div>
  );
};

export default App;
