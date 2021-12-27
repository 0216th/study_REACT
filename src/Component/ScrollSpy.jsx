import React, { Component } from 'react';

export default class ScrollSpy extends Component {
  constructor(props) {
    super(props);
    this.setRef = this.setRef.bind(this); //함수 바인드
    this.checkPosition = this.checkPosition.bind(this); //함수 바인드
  }

  setRef(ref) {
    this.ref = ref;
  }

  checkPosition() {
    if (this.ref.getBoundingClientRect().top < window.innerHeight) {
      console.log('enter');
    } else {
      console.log('exit');
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.checkPosition);
    this.checkPosition();
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.checkPosition);
  }

  render() {
    return <div ref={this.setRef} />;
  }
}
