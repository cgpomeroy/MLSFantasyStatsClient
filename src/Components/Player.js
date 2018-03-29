import React, {Component} from 'react';
import {Card, CardHeader, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';

export default class Player extends Component {

    constructor(props) {
        super(props);
        this.state = {
            expanded: false
        };
    }

    handleExpandChange = (expanded) => {
        this.setState({expanded: expanded});
    };

    handleToggle = (event, toggle) => {
        if(this.state.expanded === false){
            this.setState({expanded: true});
        }else{
            this.setState({expanded: false});
        }

    };

    handleExpand = () => {
        this.setState({expanded: true});
    };

    handleReduce = () => {
        this.setState({expanded: false});
    };

    displayRealName = () => {
        if(this.props.realName){
            return this.props.realName;
        }else{
            return this.props.firstName+" "+this.props.lastName;
        }
    };

    displayBirthdateInfo = () => {
        let dob = new Date(this.props.dob);
        dob = new Date(dob.valueOf() + dob.getTimezoneOffset() * 60000);
        let dif = Date.now() - dob.getTime();
        let age = new Date(dif);
        age = Math.abs(age.getUTCFullYear() - 1970);

        return age+" ("+(dob.getMonth() + 1) + '/' + dob.getDate() + '/' +  dob.getFullYear()+")";
    };

    displaySocialInfo = () => {
        if(this.props.social){
            if(this.props.social.indexOf("twitter.com") >= 0){
                const twitterHandle = this.props.social.split("https://twitter.com/");
                return (
                    <a href={this.props.social} style={{textDecoration: 'none', color: '#00aced'}}>
                        <div style={{display: 'flex', alignItems: 'center', fontSize: 20}}>
                            <img src={"../../img/Twitter_Logo_Blue.png"} alt="Twitter"  style={{height: 50, marginLeft: '-10px'}}/>@{twitterHandle}
                        </div>
                    </a>
                );
            }
        }
    };

    renderCardHeader = () => {

        if(!this.state.expanded){
            return (
                <CardHeader
                    title={this.props.firstName + " " +this.props.lastName}
                    subtitle={this.props.team}
                />
            )
        }
    };

    render(){
        return (
            <Card
                expanded={this.state.expanded}
                onExpandChange={this.handleExpandChange}
                onClick={this.handleToggle}
                >

                {this.renderCardHeader()}

                <CardText expandable={true}>
                    <div style={{display: 'flex'}}>
                        <div style={{flex: 1}} >
                            <img src={this.props.image} alt={this.props.name} />
                        </div>
                        <div style={{flex: 1}}>
                            <h2>{this.props.firstName} {this.props.lastName}</h2>
                            <h4>{this.props.team}</h4>
                            <h3>{this.props.position}</h3>
                            <div style={{borderRadius: '50%', backgroundColor: 'grey', width: 50, height: 50, lineHeight: 2, textAlign: 'center'}}>
                                <span style={{marginTop: 10, color: 'white', fontSize: 25}}>{this.props.number}</span>
                            </div>
                        </div>
                        <div style={{flex: 2, fontSize: 16, lineHeight: 1.5, paddingTop: 16}}>
                            <div>
                                <b>Real Name: </b>{this.displayRealName()}
                            </div>
                            <div>
                                <b>HT: </b>{this.props.height} <b>WT: </b>{this.props.weight}
                            </div>
                            <div>
                                {/**Any special designations would go here...**/}

                                {this.props.designation}

                            </div>
                            <div>
                                <b>Age: </b>{this.displayBirthdateInfo()}
                            </div>
                            <div>
                                <b>Birthplace: </b>{this.props.birthplace}
                            </div>
                            <div>
                                {/**Social Links **/}
                                {this.displaySocialInfo()}
                            </div>
                        </div>
                    </div>
                    <div style={{marginTop: 15}}>
                        <RaisedButton label="Edit" primary={true}/>
                        <RaisedButton label="Delete" secondary={true} style={{marginLeft: 5}}
                                      onClick={()=>{if(window.confirm('You sure you want to delete this?')){
                                          this.props.handleDelete(this.props.id)}
                                      }}/>
                    </div>
                </CardText>
            </Card>

        );
    }
};