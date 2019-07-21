import React, { Component } from 'react'
import GeneratedStory from './GeneratedStory';

export default class InputPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
          noun1: '',
          syn1: '',
          noun2: '',
          syn2: '',
          noun3: '',
          syn3: ''
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

      gsVisable(){
          var str1Dom = document.getElementById('str1');
          str1Dom.style.display = 'block';
          if(str1Dom.style.display =='block'){
            str1Dom = 'none';
          }
        
      }


    render() {
        var storyName = this.props.storyName;
        return (
            <div > 
                <br/>
                <h2>LET'S PLAY!</h2>
                <hr/>
                <h5>Please input the Nouns and Synonym's, once you're done click "Next".</h5>
                <br/><form>
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
                        onChange={this.handleInputChange}/>
                    
            </div>
            </div> 
             <div className="col-sm-6">   
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="inputGroup-sizing-default">Synonym: </span>
                    </div>
                        <input 
                        type="text" 
                        name="syn1"
                        className="form-control"
                        value={this.syn1}
                        onChange={this.handleInputChange}  />           
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
                        onChange={this.handleInputChange}/>
                    
            </div>
            </div> 
             <div className="col-sm-6">   
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="inputGroup-sizing-default">Synonym: </span>
                    </div>
                        <input 
                        type="text" 
                        name="syn2"
                        className="form-control"
                        value={this.syn2}
                        onChange={this.handleInputChange}  />           
                </div>
            </div>
            <div className="col-sm-6">   
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="inputGroup-sizing-default">Noun: </span>
                    </div>
                        <input 
                        type="text" 
                        name="noun3"  
                        className="form-control"  
                        value={this.noun3}
                        onChange={this.handleInputChange}/>
                    
            </div>
            </div> 
             <div className="col-sm-6">   
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="inputGroup-sizing-default">Synonym: </span>
                    </div>
                        <input 
                        type="text" 
                        name="syn3"
                        className="form-control"
                        value={this.syn3}
                        onChange={this.handleInputChange}  />  
                              
                </div>
            </div>   
            </div> 
            </form>
            <hr/>
            <GeneratedStory noun1={this.state.noun1} syn1={this.state.syn1} noun2={this.state.noun2} syn2={this.state.syn2} noun3={this.state.noun3} syn3={this.state.syn3}/>
            <h1/>
            <button type="button" className="btn btn-dark" onClick={this.gsVisable} > Next</button>
            <h1/>
           </div>

        )
        
    }
}
