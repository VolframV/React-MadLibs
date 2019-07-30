import React, { Component } from 'react'
import InputPage from './InputPage';

export default class Stories extends Component {

    constructor(props) {
        super(props)

        var storyList={Comedy : 'Bob was a nice person who had a lot of [user_input], \
         he was also a bit [user_input]. However having a lot of [user_input] and [user_input] \
         never stoped him from being a little [user_input] \
         and maybe just maybe at times a bit [user_input]. Ofcourse as one might imagine \
         [user_input] never trully stopped him but instead made his \
         [user_input] behaviour even stronger!' };
    
        this.state = {
             
        }
    }
    
    render() {
        return (
            <div>
                <Storie storyName={this.props.storyName}/>
            </div>
        )
    }
}
class Storie extends Component {
    render() {
        return (
            <div>
                <InputPage storyName={this.props.storyName}/>
            </div>
        )
    }
}

