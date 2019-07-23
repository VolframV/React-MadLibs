import React, { Component } from 'react';
import InputPage from './InputPage';
import bnrimg2 from '../img/img5.jpg'

//// THIS CLASS SIMPLY HOLD aLL OF THE STORY NAMES AND ITS STORY LOCATION AND SEND IT TO THE NAVBAR

export default class Storylist extends Component {

    render() {
        var stories = ['COMEDY', 'FAIRY TALE', 'FANTASY', 'SCIFY'];
        return (
            <div className="container">

                <div className="row">
                    <img src={bnrimg2} class="img-fluid " alt="..." />

                </div>
                <div className="row">
                    <nav class="navbar navbar-expand-lg navbar-dark bg-dar col-dd-12">
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
                </div>
                <div className="row">

                    <div className="col-sm-12 card card-3">
                        <InputPage storyName={"Comedy"} />
                    </div>
                </div>

            </div>
        )
    }
}
