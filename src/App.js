import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { v4 as uuidv4 } from 'uuid';
import React, { useState } from 'react';
import Filter from './Component/Filter.js'
import MovieList from './Component/MovieList.js'
import AddMovie from './Component/AddMovie.js'
import Details from './Component/Details.js';
import Nav from './Component/Nav.js';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function App() {

  const MovieData = [
    {
      id: uuidv4(),
      title: "Mowgli : la légende de la jungle",
      description: "Un jeune orphelin élevé par des animaux au cœur de la jungle prend en main son destin en affrontant un dangereux ennemi... et sa propre nature humaine.",
      posterURL: "https://fr.web.img5.acsta.net/pictures/18/11/08/15/18/4191048.jpg",
      trailer: "https://www.youtube.com/embed/ZZGQ0zftr-w",
      rate: 6
    },
    {
      id: uuidv4(),
      title: "Kenshin : L’achèvement",
      description: "En 1879, Kenshin se bat avec ses alliés contre son plus grand ennemi : son ancien beau-frère Enishi Yukishiro, entouré de ses sbires qui ont juré de se venger.",
      posterURL: "https://www.au-cine.com/wp-content/uploads/2021/06/Kenshin-Lache%CC%80vement-Affiche-e1622899073874.jpg.webp",
      trailer: "https://www.youtube.com/embed/yqOPf-Rag50",
      rate: 4
    },
    {
      id: uuidv4(),
      title: "Spider-Man: Homecoming",
      description: "Peter Parker reprend la routine au lycée jusqu'à l'arrivée du Vautour qui lui donne l'occasion de faire ses preuves grâce à ses super-pouvoirs d'homme-araignée.",
      posterURL: "https://occ-0-1009-1001.1.nflxso.net/dnm/api/v6/XsrytRUxks8BtTRf9HNlZkW2tvY/AAAABfvitXqHjhfVuTM3WX_vwLHCoUJr65_99k3fYV23ChEQthfWY439S2ddxinpxbAohIyvI53a3QXZ4haOx6qs2C9kQcHrspnX0Q.jpg",
      trailer: "https://www.youtube.com/embed/39udgGPyYMg",
      rate: 5
    },
    {
      id: uuidv4(),
      title: "Gladiator",
      description: "Évincé du pouvoir après la mort du souverain, un général romain se retrouve condamné à mort par le fils jaloux de l'empereur.",
      posterURL: "https://occ-0-4609-784.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABeHw4XWlMlCUhtmW0WQvwZZlqdlFGGsYMXKHu0Ign5Jg7Ma2xbQQq7NBbwSQiNn3RC3R-0DYbeP2YWgdm_UNIXIoBdfo.jpg?r=ec8%22",
      trailer: "https://www.youtube.com/embed/owK1qxDselE",
      rate: 3
    }

  ];
  const [movies, setMovies] = useState(MovieData);
  const [search, setSearch] = useState('');
  const [rate, setRate] = useState(0);

  const searching = (s) => {
    setSearch(s)
  }
  const rating = (r) => {
    setRate(r)
  }

  const handleAddMovie = (newMovie) => {
    setMovies([...movies, newMovie])
  }


  return (
    <Router>

      <div >
        <Nav />
        <div className='movie-list'>
          <Filter
            title={searching} rate={rating} />
          <h1>Movies List</h1>
          <AddMovie handleAddMovie={handleAddMovie} />
        </div>
        <Switch>
          <Route exact path="/" />
          <Route exact path="/details/:id" render={(props) => <Details {...props} movies={movies} />} />
        </Switch>

        <div className="movie-app">
          <div className='row'>
            <MovieList
              movies={movies.filter((elm) => (elm.title.toLowerCase().match(search.toLowerCase().trim())) && (elm.rate >= rate))} />
          </div>
        </div>
      </div >
    </Router>

  );
}

export default App;
