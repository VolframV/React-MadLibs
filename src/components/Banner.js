import React, { Component } from 'react'

export default class Banner extends Component {
    render() {
        return (
            <div className>
                <h1> {this.props.storyName.toUpperCase()}</h1>
            </div>
        )
    }
}
