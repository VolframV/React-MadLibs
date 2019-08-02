import React, { Component } from 'react'
import Stories from './Stories';


/// BREAK THIS INTO MORE COMPONETS 
//
//
//
//

export default class InputPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            noun1: '',
            adj1: '',
            noun2: '',
            adj2: '',
            name1: '',
            num1: ''
        };

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });


    }

    gsVisable() {
        var str1Dom = document.getElementById('str1');
        str1Dom.style.display = 'block';
    }


    render() {
        var storyName = this.props.storyName;
        return (
            <div className="row">
                <div className="col-sm-12 card card-3">
                    <br />
                    <div class="alert alert-primary" role="alert">
                        Please input your answers', once you're done click "Next".
                    </div>
                    <br />
                    <h1>{this.props.storyName}</h1>
                    <form>
                        <div className="row">
                            <div className="col-sm-6">
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="inputGroup-sizing-default">Noun: </span>
                                    </div>
                                    <input
                                        type="text"
                                        name="noun1"
                                        className="form-control"
                                        value={this.noun1}
                                        onChange={this.handleInputChange} />

                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="inputGroup-sizing-default">Adjective: </span>
                                    </div>
                                    <input
                                        type="text"
                                        name="adj1"
                                        className="form-control"
                                        value={this.adj1}
                                        onChange={this.handleInputChange} />
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="inputGroup-sizing-default">Noun: </span>
                                    </div>
                                    <input
                                        type="text"
                                        name="noun2"
                                        className="form-control"
                                        value={this.noun2}
                                        onChange={this.handleInputChange} />

                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="inputGroup-sizing-default">Adjective: </span>
                                    </div>
                                    <input
                                        type="text"
                                        name="adj2"
                                        className="form-control"
                                        value={this.adj2}
                                        onChange={this.handleInputChange} />
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="inputGroup-sizing-default">Name: </span>
                                    </div>
                                    <input
                                        type="text"
                                        name="name1"
                                        className="form-control"
                                        value={this.name1}
                                        onChange={this.handleInputChange} />

                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="inputGroup-sizing-default">Number: </span>
                                    </div>
                                    <input
                                        type="text"
                                        name="num1"
                                        className="form-control"
                                        value={this.num1}
                                        onChange={this.handleInputChange} />

                                </div>
                            </div>
                        </div>
                    </form>
                    <hr />
                    <Stories storyName={this.props.storyName} noun1={this.state.noun1} adj1={this.state.adj1} noun2={this.state.noun2} adj2={this.state.adj2} name1={this.state.name1} num1={this.state.num1} />
                    <h1 />
                    <button type="button" className="btn btn-dark" onClick={this.gsVisable} > Next</button>
                    <h1 />
                </div>
            </div>

        )

    }
}

