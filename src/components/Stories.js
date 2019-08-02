import React, { Component } from 'react'

export default class Stories extends Component {

    constructor(props) {
        super(props)

        this.state = {

        }

    }

    storySwitch() {
        var comedy = 'Bob was a nice person who had a lot of ' + this.props.noun1 + ', he was also a bit ' + this.props.adj1 + '. However having a lot of \
        '+ this.props.noun2 + ' and ' + this.props.name1 + 'never stoped him from being a little \
        '+ this.props.adj2 + ' and maybe just maybe at times a bit \
        '+ this.props.num1 + '. Ofcourse as one might imagine \
        '+ this.props.noun1 + ' never trully stopped him but instead made his \
        '+ this.props.num1 + ' behaviour even stronger!  ';

        var fairyTale = 'Once Uppon A Time there was a prince name Will, he loved his '+this.props.noun1+' \
        becuase it was '+this.props.adj1+'. \
        However there was an evil wizzard who dispised Will for his famous '+this.props.adj1 +' '+this.props.noun1+ '.';
        var fantasy = "KNIGHTS!!!";
        var scifi = "SPACE!!!";

        switch (this.props.storyName) {
            case 'Comedy': return comedy;
            case 'Fairy Tale': return fairyTale;
            case 'Fantasy': return fantasy;
            case 'SciFi': return scifi;
        }
        return "Pick a Story";
    }

    render() {


        return (
            <div>
                <Storie generatedStory={this.storySwitch()} storyName={this.props.storyName} />
            </div>
        )
    }
}
class Storie extends Component {
    render() {
        return (
            <div id="str1">
                <div class="card">
                    <div class="card-header">
                        Story
                         </div>
                    <div class="card-body">
                        <blockquote class="blockquote mb-0">
                            <p>{this.props.generatedStory}</p>
                            <footer class="blockquote-footer">Your version of <cite title="Source Title">{this.props.storyName}</cite></footer>
                        </blockquote>
                    </div>
                </div>
            </div>
        )
    }
}

