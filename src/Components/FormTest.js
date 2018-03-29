import React, { Component } from 'react';
import {Card, CardHeader, DatePicker, MenuItem, RaisedButton, TextField} from 'material-ui';
import SelectField from 'material-ui/SelectField';
import axios from "axios/index";


export default class FormTest extends Component {

    constructor(props){
        super(props);
        this.state = {
            birthplace: "",
            currentTeam: "",
            designation: "",
            dob: {},
            firstName: "",
            height: "",
            image: "",
            lastName: "",
            number: "",
            position: "",
            realName: "",
            social: "",
            weight: ""
        }
    }

    formatDate = (date) => {
        const fd = new Date(date);

        return fd.getFullYear()+"-"+(fd.getMonth()+1)+"-"+fd.getDate();

    };

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    };

    handleCalendarChange = (e, date) => this.setState({dob: date});

    handleDesignationChange = (event, index, value) => this.setState({designation: value});

    handleHeightChange = (event, index, value) => this.setState({height: value});

    handlePositionChange = (event, index, value) => this.setState({position: value});

    resetForm = () =>{
        this.setState({
            birthplace: "",
            currentTeam: "",
            designation: "",
            dob: {},
            firstName: "",
            height: "",
            image: "",
            lastName: "",
            number: "",
            position: "",
            realName: "",
            social: "",
            weight: ""
        });
    };

    submitForm = (e) => {

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
            dob: this.formatDate(this.state.dob),
            birthplace: this.state.birthplace,
            social: this.state.social,
            created_date: Date.now()
        };

        axios.post('api/players', formData )
            .then((res) =>{
                console.log("Did the post thing. Status: ",res);
                if(res.data.errors){
                    console.log("Whoa there buddy, we've got a problem (or two)!");
                }
            })
            .catch((err) => {
                console.log("Error: ", err);
            });

        this.resetForm();
    };

    render(){
        return (
            <Card>
                <CardHeader
                    title={<h1>Add a Player</h1>}
                />
                <form style={{padding: '0px 20px 0px 20px'}}>
                    <div style={{display: 'flex'}}>
                        <TextField
                            hintText="First Name"
                            name="firstName"
                            onChange={this.handleChange}
                            style={{flex: 1}}
                            value={this.state.firstName}
                        />
                        <TextField
                            hintText="Last Name"
                            name="lastName"
                            onChange={this.handleChange}
                            style={{marginLeft: 5, flex: 1}}
                            value={this.state.lastName}
                        />
                        <TextField
                            hintText="Real Name"
                            name="realName"
                            onChange={this.handleChange}
                            style={{marginLeft: 5, flex: 1}}
                            value={this.state.realName}
                        />
                    </div>
                    <div style={{display: 'flex'}}>
                        <TextField
                            hintText="Current Team"
                            name="currentTeam"
                            onChange={this.handleChange}
                            style={{flex: 1}}
                            value={this.state.currentTeam}
                        />
                        <SelectField
                            hintText="Position"
                            name="position"
                            onChange={this.handlePositionChange}
                            style={{marginLeft: 5, flex: 1}}
                            value={this.state.position}
                        >
                            <MenuItem
                                primaryText="Defender"
                                value={"Defender"}
                            />
                            <MenuItem
                                primaryText="Midfielder"
                                value={"Midfielder"}
                            />
                            <MenuItem
                                primaryText="Midfielder/Forward"
                                value={"Midfielder/Forward"}
                            />
                            <MenuItem
                                primaryText="Forward"
                                value={"Forward"}
                            />
                        </SelectField>
                        <SelectField
                            hintText="Roster Designation"
                            name="designation"
                            onChange={this.handleDesignationChange}
                            style={{marginLeft: 5, flex: 1}}
                            value={this.state.designation}
                        >
                            <MenuItem
                                primaryText="Designated Player"
                                value={"DESIGNATED PLAYER"}
                            />
                            <MenuItem
                                primaryText="Homegrown Player"
                                value={"HOMEGROWN PLAYER"}
                            />
                            <MenuItem
                                primaryText="International Player"
                                value={"INTERNATIONAL PLAYER"}
                            />
                            <MenuItem
                                primaryText="Loaned Out"
                                value={"LOANED OUT"}
                            />
                        </SelectField>
                    </div>
                    <div style={{display: 'flex'}}>
                        <SelectField
                                hintText="Height"
                                name="height"
                                onChange={this.handleHeightChange}
                                style={{flex: 1}}
                                value={this.state.height}
                            >
                                <MenuItem
                                    primaryText={"5' 3\""}
                                    value={"5' 3\""}
                                />
                                <MenuItem
                                    primaryText={"5' 4\""}
                                    value={"5' 4\""}
                                />
                                <MenuItem
                                    primaryText={"5' 5\""}
                                    value={"5' 5\""}
                                />
                                <MenuItem
                                    primaryText={"5' 6\""}
                                    value={"5' 6\""}
                                />
                                <MenuItem
                                    primaryText={"5' 7\""}
                                    value={"5' 7\""}
                                />
                                <MenuItem
                                    primaryText={"5' 8\""}
                                    value={"5' 8\""}
                                />
                                <MenuItem
                                    primaryText={"5' 9\""}
                                    value={"5' 9\""}
                                />
                                <MenuItem
                                    primaryText={"5' 10\""}
                                    value={"5' 10\""}
                                />
                                <MenuItem
                                    primaryText={"5' 11\""}
                                    value={"5' 11\""}
                                />
                                <MenuItem
                                    primaryText={"6' 0\""}
                                    value={"6' 0\""}
                                />
                                <MenuItem
                                    primaryText={"6' 1\""}
                                    value={"6' 1\""}
                                />
                                <MenuItem
                                    primaryText={"6' 2\""}
                                    value={"6' 2\""}
                                />
                                <MenuItem
                                    primaryText={"6' 3\""}
                                    value={"6' 3\""}
                                />
                                <MenuItem
                                    primaryText={"6' 4\""}
                                    value={"6' 4\""}
                                />
                            <MenuItem
                                primaryText={"6' 5\""}
                                value={"6' 5\""}
                            />
                            </SelectField>
                        <TextField
                                hintText="Weight"
                                name="weight"
                                onChange={this.handleChange}
                                style={{marginLeft: 5, flex: 1}}
                                value={this.state.weight}
                            />
                        <DatePicker
                            hintText="Date of Birth"
                            onChange={this.handleCalendarChange}
                            style={{marginLeft: 5}}
                            value={this.state.dob}
                        />
                        <TextField
                            hintText="Place of Birth"
                            name="birthplace"
                            onChange={this.handleChange}
                            style={{flex: 3, marginLeft: 5}}
                            value={this.state.birthplace}
                        />
                        <TextField
                            hintText="Kit Number"
                            name="number"
                            onChange={this.handleChange}
                            style={{flex: 1, marginLeft: 5}}
                            value={this.state.number}
                        />
                    </div>
                    <div style={{display: 'flex'}}>
                        <TextField
                            hintText="Social Media URL"
                            name="social"
                            onChange={this.handleChange}
                            value={this.state.social}
                        />
                        <TextField
                            hintText="Player Image URL"
                            name="image"
                            onChange={this.handleChange}
                            style={{marginLeft: 5}}
                            value={this.state.image}
                        />
                    </div>
                    <div style={{padding: "10px 0 15px 0"}}>
                        <RaisedButton
                            label="Submit"
                            onClick={this.submitForm}
                        />
                        <RaisedButton
                            label="Reset"
                            onClick={this.resetForm}
                            style={{marginLeft: 10}}
                        />
                    </div>
                </form>
            </Card>
        )
    }
}