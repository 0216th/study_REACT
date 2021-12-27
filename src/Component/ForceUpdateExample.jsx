import React, { Component } from 'react';

class ForceUpdateExample extends Component {
  constructor(props) {
    super(props);

    //state정의
    this.loading = true;
    this.formData = 'no data';

    this.handleData = this.handleData.bind(this);

    setTimeout(this.handleData, 2000);
  }

  handleData() {
    const data = 'new Data';

    //state 변경
    this.loading = false;
    this.formData = data + this.formData;
    this.forceUpdate(); //강제로 화면 새로고침
  }

  render() {
    return (
      <div>
        <span>로딩중 : {String(this.loading)}</span>
        <span>결과 : {this.formData}</span>
      </div>
    );
  }
}

export default ForceUpdateExample;
