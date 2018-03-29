import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import axios from 'axios';

export default class AddPlayer extends Component {
    constructor(props){
        super(props);
        this.state = {
            status: "",
            firstName: "",
            lastName: "",
            currentTeam: "",
            image: "",
            position: "",
            realName: "",
            height: 0,
            weight: 0,
            contractType: "",
            dob: 0,
            birthplace: "",
            social: "",
            number: 0,
            reset: false

        };
        this.handleSubmit.bind(this);
        this.handleChange.bind(this);
    }

    handleSubmit = (e) => {
        e.preventDefault();

        const formData = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            currentTeam: this.state.currentTeam,
            image: this.state.image,
            position: this.state.position,
            number: this.state.number,
            realName: this.state.realName,
            height: this.state.height,
            weight: this.state.weight,
            designation: this.state.contractType,
            dob: this.state.dob,
            birthplace: this.state.birthplace,
            social: this.state.social,
            created_date: Date.now()
        };

        axios.post('api/players', formData )
            .then((res) =>{
                console.log("Did the post thing. Status: ",res.status);
                if(res.status === 200){
                    this.setState({status: 'Form submitted successfully!'});
                    this.resetForm();
                }
            })
            .catch((err) => {
                console.log("Error: ", err);
                this.setState({status: "Failed"});
            })
    };

    handleChange = (e) => {
        console.log(e);
        this.setState({[e.target.name]: e.target.value});
    };

    handleDropdownChange = (e, i, v) => {
        console.log(e);
        this.setState({position: v});
    };

    resetForm = () => {
        this.setState({firstName: ""});
    };

        render(){
            return(
                <div>
                    <h1>Add a Player</h1>
                    <form id="addPlayerForm" onSubmit={this.handleSubmit} style={{paddingLeft: 5}}>
                        <div style={{display: 'flex'}} >
                            <div style={{flex: 1}} >
                                <div>
                                    <TextField
                                        name="firstName"
                                        type="text"
                                        hintText="First Name"
                                        onChange={this.handleChange}
                                        val={this.state.firstName} />
                                </div>
                                <div>
                                    <TextField
                                        name="lastName"
                                        type="text"
                                        hintText="Last Name"
                                        onChange={this.handleChange}
                                        val={this.state.lastName} />
                                </div>
                                <div>
                                    <div>
                                        <TextField
                                            name="currentTeam"
                                            type="text"
                                            hintText="Current Team"
                                            onChange={this.handleChange}
                                            val={this.state.currentTeam}
                                        />
                                    </div>
                                </div>
                                <div>
                                    <SelectField
                                        name="position"
                                        value={this.state.position}
                                        onChange={this.handleDropdownChange}
                                        hintText="Position"
                                    >
                                        <MenuItem value={"Goalkeeper"} primaryText="Goalkeeper" />
                                        <MenuItem value={"Defender"} primaryText="Defender" />
                                        <MenuItem value={"Midfielder"} primaryText="Midfielder" />
                                        <MenuItem value={"Midfielder/Forward"} primaryText="Midfielder/Forward" />
                                        <MenuItem value={"Forward"} primaryText="Forward" />
                                    </SelectField>
                                </div>
                                <div>
                                    <div>
                                        <TextField
                                            name="number"
                                            type="text"
                                            hintText="Number"
                                            onChange={this.handleChange}
                                            val={this.state.number}
                                        />
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <TextField
                                            name="image"
                                            type="text"
                                            hintText="Player Image URL"
                                            onChange={this.handleChange}
                                            val={this.state.image}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div style={{flex: 5, marginLeft: 5}} >
                                <div>
                                    <div>
                                        <TextField
                                            name="realName"
                                            type="text"
                                            hintText="Real Name"
                                            onChange={this.handleChange}
                                            val={this.state.realName}
                                        />
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <TextField
                                            name="height"
                                            type="text"
                                            hintText="Height"
                                            onChange={this.handleChange}
                                            val={this.state.height}
                                        />
                                        <TextField
                                            name="weight"
                                            type="text"
                                            hintText="Weight"
                                            onChange={this.handleChange}
                                            style={{marginLeft: 5}}
                                            val={this.state.weight}
                                        />
                                    </div>
                                </div>
                                <div>
                                    <TextField
                                        name="contractType"
                                        value={this.state.contractType}
                                        onChange={this.handleChange}
                                        hintText="Special Designation"
                                    />
                                </div>
                                <div>
                                    <TextField
                                        name="dob"
                                        type="text"
                                        hintText="Date of Birth"
                                        onChange={this.handleChange}
                                        val={this.state.dob}
                                    />
                                </div>
                                <div>
                                    <TextField
                                        name="birthplace"
                                        type="text"
                                        hintText="Place of Birth"
                                        onChange={this.handleChange}
                                        val={this.state.birthplace}
                                    />
                                </div>
                                <div>
                                    <TextField
                                        name="social"
                                        type="text"
                                        hintText="Social Media Profile"
                                        onChange={this.handleChange}
                                        val={this.state.social}
                                    />
                                </div>
                            </div>
                        </div>
                        <div style={{marginTop: 10}}>
                            <RaisedButton type="submit" label="Submit">

                            </RaisedButton>
                            <RaisedButton style={{marginLeft: 5}} label="Clear Values" onClick={this.resetForm} >

                            </RaisedButton>
                        </div>
                    </form>
                </div>
            );
        };
}


