import React, {Component} from 'react';
import {MenuItem, SelectField} from 'material-ui';

export default class TeamDropdown extends Component {

    constructor(props){
        super(props);
        this.state = {
            players: null,
            childAPICall: 'api/players',
            selected: 'All Teams'
        }
    }

    handleChange = (event, index, value) => {
        event.preventDefault();
        this.setState({childAPICall: value}, () => {
            if(value === "api/players"){
                this.setState({selected: "All Teams"}, ()=>{
                    this.props.updateApiCall(this.state.childAPICall)
                })
            }else{
                this.setState({selected: value.split("api/players?team=")[1]}, ()=>{
                    this.props.updateApiCall(this.state.childAPICall)
                });
            }
        });
    };

    render(){
        return(
            <SelectField
                floatingLabelText={this.state.selected}
                onChange={this.handleChange}
            >
                <MenuItem value={"api/players"} primaryText="All Teams" />
                <MenuItem value={"api/players?team=Atlanta United FC"} primaryText="Atlanta United FC" />
                <MenuItem value={"api/players?team=Chicago Fire"} primaryText="Chicago Fire" />
                <MenuItem value={"api/players?team=Colorado Rapids"} primaryText="Colorado Rapids" />
                <MenuItem value={"api/players?team=Columbus Crew SC"} primaryText="Columbus Crew SC" />
                <MenuItem value={"api/players?team=D.C. United"} primaryText="D.C. United" />
                <MenuItem value={"api/players?team=FC Dallas"} primaryText="FC Dallas" />
                <MenuItem value={"api/players?team=Houston Dynamo"} primaryText="Houston Dynamo" />
                <MenuItem value={"api/players?team=LA Galaxy"} primaryText="LA Galaxy"/>
                <MenuItem value={"api/players?team=Los Angeles Football Club"} primaryText="Los Angeles Football Club"/>
                <MenuItem value={"api/players?team=Montreal Impact"} primaryText="Montreal Impact" />
                <MenuItem value={"api/players?team=New England Revolution"} primaryText="New England Revolution"/>
                <MenuItem value={"api/players?team=New York Red Bulls"} primaryText="New York Red Bulls" />
                <MenuItem value={"api/players?team=New York City FC"} primaryText="New York City FC" />
                <MenuItem value={"api/players?team=Orlando City SC"} primaryText="Orlando City SC"/>
                <MenuItem value={"api/players?team=Philadelphia Union"} primaryText="Philadelphia Union" />
                <MenuItem value={"api/players?team=Portland Timbers"} primaryText="Portland Timbers" />
                <MenuItem value={"api/players?team=Real Salt Lake"} primaryText="Real Salt Lake"/>
                <MenuItem value={"api/players?team=San Jose Earthquakes"} primaryText="San Jose Earthquakes" />
                <MenuItem value={"api/players?team=Seattle Sounders FC"} primaryText="Seattle Sounders FC"/>
                <MenuItem value={"api/players?team=Sporting Kansas City"} primaryText="Sporting Kansas City"/>
                <MenuItem value={"api/players?team=Toronto FC"} primaryText="Toronto FC" />
                <MenuItem value={"api/players?team=Vancouver Whitecaps FC"} primaryText="Vancouver Whitecaps FC" />
            </SelectField>
        );
    }
};

