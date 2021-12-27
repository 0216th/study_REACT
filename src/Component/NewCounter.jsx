import React, { Component } from 'react';

class NewCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {}; //초기화
    this.increaseCount = this.increaseCount.bind(this);
  }

  static getDerivedStateFromProps(props, state) {
    //console.log(props, state);
    //prop는 상위객체에서 준 값이고 ,
    //state 는 해당 컴포넌트 내에서 가지고 있는 상태값이구나!

    const { count } = props;

    return {
      //프로퍼티에서 전달된 count 값을 보관한다.
      count, //"count" : 값
      newCount: count === state.count ? state.newCount : count,
      //newCount 라는 새로운 state 값을 세팅
    };
  }

  increaseCount() {
    this.setState(({ newCount }) => ({
      newCount: newCount + 1,
    }));
  }

  render() {
    return (
      <div>
        현재 카운트 : {this.state.newCount}
        <button onClick={this.increaseCount}>카운트 증가</button>
      </div>
    );
  }
}

export default NewCounter;
