import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: props.count, //부모에서 전해진 프로퍼티로 값을 초기값 설정
    };
    this.increaseCount = this.increaseCount.bind(this);
  }

  increaseCount() {
    this.setState(({ count }) => ({
      count: count + 1,
    }));
  }

  render() {
    console.log('aaa');
    return (
      <div>
        현재 카운트 : {this.state.count}
        <button onClick={this.increaseCount}>카운트 증가</button>
      </div>
    );
  }
}

export default Counter;
