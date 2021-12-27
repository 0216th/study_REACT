import React, { Component } from 'react';
class MyComponent extends Component {
  componentDidUpdate() {
    console.log('MyComponent ');
  }
  render() {
    return <div></div>; //의미없는 div 를 넣었다.
  }
}

class MyPureComponent extends React.PureComponent {
  componentDidUpdate() {
    console.log('MyPureComponent 새로고침');
  }
  render() {
    return <div></div>; //의미없는 div 를 넣었다.
  }
}

class Test extends Component {
  constructor(props) {
    console.log('aaaaa');
    super(props);

    this.listValue = [{ name: 'Park' }, { name: 'Lee' }];
    this.state = { version: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    setTimeout(() => {
      this.listValue[0].name = 'Justin'; //justrin lee
      console.log(this.listValue);
      this.setState({ version: 1 });
    }, 1000);

    setTimeout(() => {
      this.listValue = [{ name: 'Justin' }, { name: 'Lee' }];
      console.log(this.listValue);

      this.setState({ version: 2 });
    }, 2000);
  }

  render() {
    console.log('render 호출');
    console.log(this.state.version);
    return (
      <div>
        <MyComponent value={this.listValue} />
        <MyPureComponent value={this.listValue} />
        {/* true 이면 update를 안하니까 */}
        <button onClick={this.handleClick}>버튼</button>
      </div>
    );
  }
}

export default Test;
