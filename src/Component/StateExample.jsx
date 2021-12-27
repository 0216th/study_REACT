import React, { Component } from 'react';

class StateExample extends Component {
  constructor(props) {
    super(props);

    //state 정의
    this.state = {
      loading: true,
      formData: 'no Data',
    };
    this.handleData = this.handleData.bind(this);

    setTimeout(this.handleData, 2000);
  }
  //생성자 종료

  handleData(data) {
    //state변경
    this.setState(function (prevState) {
      const newState = {
        loading: false,
        formData: data + prevState.formData,
      };
      return newState;
    });

    console.log('loading값', this.state.loading);
  }

  render() {
    return (
      <div>
        <span>로딩중 : {String(this.state.loading)}</span>
        <span>결과 : {this.state.formData}</span>
      </div>
    );
  }
}

export default StateExample;
