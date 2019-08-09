<<<<<<< HEAD
import React, { Component } from 'react'

export default class Stories extends Component {

    constructor(props) {
        super(props)

        this.state = {

        }

    }

    storySwitch() {
        ///////////////////////////////////////////////////////////////////////////////
        var comedy = 'Bob was a nice person who had a lot of ' + this.props.noun1 + 's, he was also a bit ' + this.props.adj1 + '. However having a lot of \
        '+ this.props.noun2 + 's and knowing ' + this.props.name1 + ' never stoped him from being a little \
        '+ this.props.adj2 + ' and at times scared of number \
        '+ this.props.num1 + '. Ofcourse as one might imagine owning all those \
        '+ this.props.noun1 + 's never trully stopped him but instead made his fear of number \
        '+ this.props.num1 + ' even stronger!  ';
        ///////////////////////////////////////////////////////////////////////////////
        var fairyTale = 'Once Uppon A Time there was a Kingdom Far Far Away. It was a wonderful place that had alot of '+this.props.noun2+'s made from chocolate.\
        Rivers were '+this.props.adj1+' and flowed all around the kingdom. There also lived a wizzard whose name was '+this.props.name1+', it was a strange name for\
         a wizzard, but he was a strange wizzard. '+this.props.name1+' had a magical '+this.props.noun1+', it was impressive and above all else it was '+this.props.adj2+'.\
        Everyone knew the wizzard lived '+this.props.num1+' floors above the library in the castle, but no one has ever seen him there.';
        ///////////////////////////////////////////////////////////////////////////////
        var fantasy = "The skies are flooded with flying "+this.props.noun1+'s, there apears to be no end to them and their evil. \
        All seemed hopeless untill the hero '+this.props.adj2+' '+this.props.name1+' arived to our village of Kreikee, that arival brought hope at a time when it was needed most.\
        Unfortunately our hero died that day to one of the flying ' +this.props.noun1+"s carrying "+this.props.num1+' rocks, they apear to have slipped out during flight or so it was told.\
        Now we must put our hope into a new hero, the '+this.props.adj1+' '+this.props.noun2+'.';
        ///////////////////////////////////////////////////////////////////////////////
        var scifi = "It has been "+ this.props.num1 +' years since the discovery of the '+ this.props.noun1 + ' and the begining of the technological boom that followed it. \
        No one could have foresaw that '+this.props.adj1 +' '+this.props.noun1+" would be the reason for our advancement into the next golden age. \
        Soon after that we paid the price, with the arival of Space "+this.props.noun2+'s and their desire to steal our '+this.props.adj1 +' '+this.props.noun1+', the blood \
        and horror that followed that war was only stopped thanks to ' +this.props.name1+'. 10 years after the conflict has started neither side saw an end, \
        untill '+this.props.adj2+' '+this.props.name1+' saw the only solution and destoryed the ' +this.props.adj1 +' '+this.props.noun1+ ' before \
        it could bring the end to both sides.' ;
        ///////////////////////////////////////////////////////////////////////////////
 
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

=======
import React, { Component } from 'react'

export default class Stories extends Component {

    constructor(props) {
        super(props)

        this.state = {

        }

    }

    storySwitch() {
        ///////////////////////////////////////////////////////////////////////////////
        var comedy = 'Bob was a nice person who had a lot of ' + this.props.noun1 + 's, he was also a bit ' + this.props.adj1 + '. However having a lot of \
        '+ this.props.noun2 + 's and knowing ' + this.props.name1 + ' never stoped him from being a little \
        '+ this.props.adj2 + ' and at times scared of number \
        '+ this.props.num1 + '. Ofcourse as one might imagine owning all those \
        '+ this.props.noun1 + 's never trully stopped him but instead made his fear of number \
        '+ this.props.num1 + ' even stronger!  ';
        ///////////////////////////////////////////////////////////////////////////////
        var fairyTale = 'Once Uppon A Time there was a Kingdom Far Far Away. It was a wonderful place that had alot of '+this.props.noun2+'s made from chocolate.\
        Rivers were '+this.props.adj1+' and flowed all around the kingdom. There also lived a wizzard whose name was '+this.props.name1+', it was a strange name for\
         a wizzard, but he was a strange wizzard. '+this.props.name1+' had a magical '+this.props.noun1+', it was impressive and above all else it was '+this.props.adj2+'.\
        Everyone knew the wizzard lived '+this.props.num1+' floors above the library in the castle, but no one has ever seen him there.';
        ///////////////////////////////////////////////////////////////////////////////
        var fantasy = "The skies are flooded with flying "+this.props.noun1+'s, there apears to be no end to them and their evil. \
        All seemed hopeless untill the hero '+this.props.adj2+' '+this.props.name1+' arived to our village of Kreikee, that arival brought hope at a time when it was needed most.\
        Unfortunately our hero died that day to one of the flying ' +this.props.noun1+"s carrying "+this.props.num1+' rocks, they apear to have slipped out during flight or so it was told.\
        Now we must put our hope into a new hero, the '+this.props.adj1+' '+this.props.noun2+'.';
        ///////////////////////////////////////////////////////////////////////////////
        var scifi = "It has been "+ this.props.num1 +' years since the discovery of the '+ this.props.noun1 + ' and the begining of the technological boom that followed it. \
        No one could have foresaw that '+this.props.adj1 +' '+this.props.noun1+" would be the reason for our advancement into the next golden age. \
        Soon after that we paid the price, with the arival of Space "+this.props.noun2+'s and their desire to steal our '+this.props.adj1 +' '+this.props.noun1+', the blood \
        and horror that followed that war was only stopped thanks to ' +this.props.name1+'. 10 years after the conflict has started neither side saw an end, \
        untill '+this.props.adj2+' '+this.props.name1+' saw the only solution and destoryed the ' +this.props.adj1 +' '+this.props.noun1+ ' before \
        it could bring the end to both sides.' ;
        ///////////////////////////////////////////////////////////////////////////////
 
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

>>>>>>> ea8f0f65d6da27d3b691cde3d32709e7c66a5493
