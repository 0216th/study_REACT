import React, { Component } from 'react';

class TodaysPlan extends Component {
  render() {
    const name = this.props.name;
    return <div className="mesage-container">{name}</div>;
  }
}

export default TodaysPlan;
