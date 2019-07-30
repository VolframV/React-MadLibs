import React, { Component } from 'react';
import bnrimg1 from '../img/img6.jpg'
import InputPage from './InputPage';

// START CREATING SKELETONS FOR DATABASE
// Main > NavBar > Stories > Story > InputPage > GeneratedStory
// Stories: Data file storing only the Arrays and Vars of different stories
// Story: Takes the params passed from Stories and Formats it into HTML and send it to InputPage

// ALTERNATIVE: Main> NavBar > InputPage > Stories > Story > GeneratedStory


export default class Main extends Component {

    render() {
        return (
            <div className="container">
                <Banner />
                <NavBar stories={['Comedy', 'Fairy Tale', 'Fantasy', 'SciFy']} />
            </div>
        )
    }
}

////////////////////////////////////////// BANNER ////////////////////////////////////////
class Banner extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <img src={bnrimg1} class="img-fluid " alt="..." />
                </div>
            </div>
        )
    }
}

/////////////////////////////////////////NAVBAR///////////////////////////////////////////
class NavBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            UserPick: ''
        };

        this.handleNavClick = this.handleNavClick.bind(this);
    }

    handleNavClick(event){
        event.preventDefault();
        const target = event.target;
        const name = target.name;

        this.setState(state =>({
            UserPick: name
        }));
        
    }

    render() {
        return (
            <div>
                <div className="row justify-content-center">
                    <nav class="navbar navbar-expand-lg  navbar-dark bg-dar col-dd-12 ">

                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarText">
                            <ul class="navbar-nav mr-auto ">
                                <li class="nav-item active">
                                    <a class="nav-link" 
                                    onClick={this.handleNavClick} 
                                    name={this.props.stories[0]}
                                    href="">
                                    {this.props.stories[0]}
                                    <span class="sr-only">(current)</span></a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link"
                                    onClick={this.handleNavClick} 
                                    name={this.props.stories[1]}
                                     href="#">
                                     {this.props.stories[1]}</a>
                                </li>
                                <a class="navbar-brand"
                                 href="#">STORIES</a>
                                <li class="nav-item">
                                    <a class="nav-link" 
                                    onClick={this.handleNavClick} 
                                    name={this.props.stories[2]}
                                    href="#">{this.props.stories[2]}</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" 
                                    onClick={this.handleNavClick} 
                                    name={this.props.stories[3]}
                                    href="#">{this.props.stories[3]}</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
                <InputPage storyName={this.state.UserPick}/>
            </div>
        )
    }
}

