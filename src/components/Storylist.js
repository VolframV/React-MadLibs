import React, { Component } from 'react';
import Navbar from './Navbar';
import Banner from './Banner';
import InputPage from './InputPage';

//// THIS CLASS SIMPLY HOLD aLL OF THE STORY NAMES AND ITS STORY LOCATION AND SEND IT TO THE NAVBAR

export default class Storylist extends Component {

    render() {
        var storyNames = ['COMEDY', 'FAIRY TALE', 'FANTASY', 'SCIFY'];
        return (
            <div className="container">
                <div className="row">
                    <div className="jumbotron col-sm-12 card card-3">
                        <Banner storyName={"Comedy"} />
                    </div>
                    
                </div>
                 <Navbar storyNames={storyNames} />
                <div className="row">

                    <div className="col-sm-2 card card-3">
                       
                    </div>
                    <div className="col-sm-10 card card-3">
                        <InputPage storyName={"Comedy"} />
                    </div>
                </div>
            </div>
        )
    }
}
