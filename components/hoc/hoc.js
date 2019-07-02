import React, { Component } from 'react';

export default function HoCComponent(AppComponent, data) {
    return class extends Component {
        constructor(props) {
            super(props);
            this.state = {
                data: data
            };
        }
        
        render() {
            return (
                <AppComponent data= {this.state.data} />
            );
        }
    };
}