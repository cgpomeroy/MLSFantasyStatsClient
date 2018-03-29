import React, { Component } from 'react';
import FlatButton from 'material-ui/FlatButton';

export default class SuperButton extends Component {

    constructor(props){
        super(props);
        this.state = {
          direction: "▲",
          dir: 1
        };
    }

    addSort = () => {
        var sortProp = this.props.text.toLowerCase();
        if(sortProp === "age"){
            sortProp = "dob";
        }
        let query = sortProp+"="+this.state.dir;
        this.props.addSort(query);
    };

    changeDirection = () => {

        if(this.state.direction === "▲")
            this.setState({direction: "▼", dir: -1 }, ()=>{this.addSort()});
        else
            this.setState({direction: "▲", dir: 1 }, ()=>{this.addSort()})
    };

    render(){
        const fullText = this.props.text+" "+this.state.direction;
        return(
            <FlatButton onClick={this.changeDirection}>{fullText}</FlatButton>
        )

    }
}