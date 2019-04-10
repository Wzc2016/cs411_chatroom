import React, {Component} from 'react';

export default class RoomStatus extends Component {
  render() {
    return (<div className="room-status">Online: {this.props.onlineCount}, Users: {this.props.userhtml}</div>);
  }
}
