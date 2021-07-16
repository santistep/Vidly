import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";

class Movies extends Component {
  state = {
    movies: getMovies(),
  };

  // Metodo que genera un nuevo arreglo filtrando la pelicula del event onClick!
  handleDelete = (movie) => {
    const movies = this.state.movies.filter((m) => m._id !== movie._id);
    this.setState({ movies: movies });
  };

  render() {
    const tableHeader = ["Title", "Genre", "Stock", "Rate", ""];
    const { length: movCount } = this.state.movies;
    if (movCount === 0) return <h3>There are no movies in stock!</h3>;

    return (
      <React.Fragment>
        <h3>Showing {movCount} movies in the database</h3>
        <table className="table">
          <thead>
            <tr>
              {tableHeader.map((title) => (
                <th>{title}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {this.state.movies.map((movie) => (
              <tr key={movie._id}>
                <td>{movie.title}</td>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                <td>
                  <button
                    onClick={() => this.handleDelete(movie)}
                    className="btn btn-danger btn-sm"
                    style={{ fontWeight: "bold" }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

// tabla hecha para desplegar titulos de columnas.
{
  /*     <table>
          <thead>
            <tr>{tableHeader.map((title) => `${title}`)}</tr>
          </thead>
          <tbody></tbody>
        </table> */
}

export default Movies;
