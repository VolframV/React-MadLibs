import React, { Component } from 'react';


class Navbar extends Component {
    constructor(props) {
        super(props);
      }
    render() {
        var stories = this.props.storyNames;
        return (
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">STORIES</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarText">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#">{stories[0]}<span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">{stories[1]}</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">{stories[2]}</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">{stories[3]}</a>
      </li>
    </ul>
  </div>
</nav>
        );
    }
}

export default Navbar;