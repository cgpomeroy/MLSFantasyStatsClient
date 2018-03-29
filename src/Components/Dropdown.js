import React, { Component } from 'react';
import { RaisedButton, Toolbar } from 'material-ui';

export default class Dropdown extends Component {
    render(){
        return (
            <Toolbar>
                <div>

                </div>
                <div>
                    <a href="/">
                        <RaisedButton label="View all Players" primary={true} style={{marginTop: 10}} />
                    </a>
                    <a href="/add-player">
                        <RaisedButton label="Add a Player" primary={true} style={{marginTop: 10, marginLeft: 5}} />
                    </a>
                </div>
            </Toolbar>
        )
    }
}