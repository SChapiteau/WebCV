import React, { Component } from 'react';
import './Mission.css'

class Mission extends Component {



    render() {
      return (
        <div className="Mission">
          <h1>{this.props.mission.title}</h1>
          <div>
            <stan>{this.props.mission.date} </stan> 
            {this.props.mission.client}
          </div>
        </div>
      );
    }
  }

  export default Mission;