import React, { Component } from 'react';
import Player from './Components/Player';
import axios from 'axios';
import TeamDropdown from "./Components/TeamDropdown";
import CircularProgress from 'material-ui/CircularProgress';
import SuperButton from './Components/SuperButton';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
        players: null,
        apiCall: 'api/players',
        loading: false,
        sort: ''
    };
    this.updateApiCall.bind(this);
  }

  componentDidMount(){
    this.setState({loading: true});
    axios.get(this.state.apiCall)
        .then((res)=>{
          console.log(res.data);
          this.setState({players: res.data, loading: false});
        })
        .catch((err) =>
        {console.log(err)
        });
  }

    addSort = (val) => {
      console.log("Received sort from child: ", val);
      if(this.state.apiCall === "api/players")
          this.setState({sort: "?"+val}, ()=>{this.updatePlayers()});
      else
          this.setState({sort: "&"+val}, ()=>{this.updatePlayers()});
    };

    handleDelete = (id) => {
        var url = '/api/players/'+id;
        fetch(url,{method: 'DELETE'})
            .then(res=>{res.json()})
            .then(console.log("Player Deleted."))
            .then(axios.get('api/players')
                .then((res)=>{
                    console.log(res.data);
                    this.setState({players: res.data})
                })
                .catch((err) =>
                {console.log(err)
                }))
            .catch((err)=>{console.log(err)});
    };

  updateApiCall = (val) => {
      console.log("Received from child: ",val);
      this.setState({apiCall: val, loading: true}, ()=>{this.updatePlayers()});
  };

  updatePlayers = () => {
      this.setState({updating: true});
      axios.get(this.state.apiCall+this.state.sort)
          .then((res)=>{
              console.log("Called: ",this.state.apiCall);
              this.setState({players: res.data});
              console.log("New players: ", this.state.players);
              this.setState({loading: false});
          })
          .catch((err) =>
          {console.log(err);
          this.setState({loading: false});
          })
  };

  renderPlayers(){
    if(this.state.loading){
        return <CircularProgress size={80} thickness={5}/>
    }
    else if(this.state.players !== null && !this.state.loading){
      return this.state.players.map((player)=>{
        return (
            <Player
                key={player._id}
                firstName={player.firstName}
                lastName={player.lastName}
                team={player.currentTeam}
                nationality={player.nationality}
                image={player.image}
                id={player._id}
                position={player.position}
                number={player.number}
                height={player.height}
                weight={player.weight}
                birthplace={player.birthplace}
                social={player.social}
                dob={player.dob}
                designation={player.designation}
                handleDelete={this.handleDelete}
            />
        );
      })
    }
  }
  render() {
    return (
        <div>
            <div style={{display: 'flex'}}>
                <div style={{flex: 1}}>
                    Sort by |
                </div>
                <div style={{flex: 1}}>
                    <SuperButton
                        text="Height"
                        addSort={this.addSort}
                    />
                </div>
                <div style={{flex: 1}}>
                    <SuperButton
                        text="Weight"
                        addSort={this.addSort}
                    />
                </div>
                <div style={{flex: 1}}>
                    <SuperButton
                        text="Age"
                        addSort={this.addSort}
                    />
                </div>
            </div>
            <div>
                <TeamDropdown updateApiCall={this.updateApiCall}/>
            </div>
            <div>
              {this.renderPlayers()}
            </div>
        </div>
    );
  }
}

export default App;
