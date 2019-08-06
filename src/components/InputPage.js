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

        var n1 = document.getElementById("noun1");
        var n2 = document.getElementById("noun2");
        var aj1 = document.getElementById("adj1");
        var aj2 = document.getElementById("adj2");
        var nam1 = document.getElementById("name1");
        var numb1 = document.getElementById("num1");

        if(n1.value == '') n1.style.cssText = " border: 1px solid red";
        else n1.style.cssText = "";
        if(n2.value == '') n2.style.cssText = " border: 1px solid red";
        else n2.style.cssText = "";
        if(aj1.value == '') aj1.style.cssText = "border: 1px solid red";
        else aj1.style.cssText = "";        
        if(aj2.value == '') aj2.style.cssText = " border: 1px solid red";
        else aj2.style.cssText = "";      
        if(nam1.value == '')nam1.style.cssText = "border: 1px solid red";
        else nam1.style.cssText = "";              
        if(numb1.value == '')numb1.style.cssText = " border: 1px solid red";
        else numb1.style.cssText = "";      
        
        if (n1.value != '' && n2.value != '' && aj1.value != '' && aj2.value != '' && nam1.value != '' && numb1.value != ''){
            document.getElementById('str1').style.display = 'block';
            document.getElementById('anouncer').style.display = 'none';
            }
            else{
                document.getElementById('anouncer').innerHTML= "Please Fill In The Missing Boxes.";
                document.getElementById('anouncer').className = "alert alert-danger";
            }
    }

    render() {
        var storyName = this.props.storyName;
        return (
            <div className="row">
                <div className="col-sm-12 card card-3">
                    <br />
                    <div class="alert alert-primary" id="anouncer" role="alert">
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
                                        id="noun1"
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
                                        id="adj1"
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
                                        id="noun2"
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
                                        id="adj2"
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
                                        id="name1"
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
                                        type="number"
                                        name="num1"
                                        id="num1"
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

