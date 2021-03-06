import React from "react";
import "./App.css";
import { Movies } from "./Movies";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      searchInput: ""
    };
  }

  componentDidMount() {
    fetch(
      "https://api.themoviedb.org/3/movie/now_playing?api_key=2b027bc49d150a496c2d18aa06377c6e&language=en-US&page=1"
    )
      .then(res => {
        return res.json();
      })
      .then(myJson => {
        this.setState({ movies: myJson.results });
        console.log(this.state.movies);
      });
  }

  handleChanges = e => {
    this.setState({ searchInput: e.target.value });
  };

  render() {
    return (
      <div className="App">
        <h1> Movies</h1>
        <div>
          <input
            type="text"
            name="searchBar"
            placeholder="Search"
            onChange={this.handleChanges}
          />
        </div>
        <Movies movies={this.state.movies} />
      </div>
    );
  }
}

export default App;
