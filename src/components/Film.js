import React, {Component, Fragment} from 'react';

class Film extends Component {
  render() {
    return(
      <Fragment>
      <div class="film_div">
        <h3 class="film-name">
          <ul>
            <li>{this.props.name}</li>
          </ul>
        </h3>
      </div>
      </Fragment>
    );
  }
}

export default Film;
