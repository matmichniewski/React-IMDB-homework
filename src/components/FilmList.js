import React, { Component, Fragment } from 'react';
import Film from './Film.js';

class FilmList extends Component {
  render() {
    const filmNodes = this.props.films.map((film) => {
      return (
        <Film key={film.id} name={film.name}>
          {film.name}
        </Film>
      );
    });

    return (
      <div class="list_div">
        <h2 class="title">Upcoming Film Releases for UK</h2>
          <hr/>
          {filmNodes}
          <hr/>
          <div class="link-div">
            <h2 class="link"><a href="https://www.imdb.com/calendar/?region=gb">View more upcoming releases >> </a></h2>
          </div>
      </div>
    );
  }
}

export default FilmList;
