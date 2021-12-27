import './App.css';
import React, { Component } from 'react';
import './sass/materialize.scss';
import Button from './Component/Button';
import BranchLoadingButton from './05/branch';

class App extends Component {
  render() {
    return (
      <div>
        <nav>
          <div className="nav-wrapper">
            <div>두잇! 리액트 시작하기</div>
          </div>
        </nav>
        <h1>머티리얼 CSS</h1>
        <BranchLoadingButton isLoading>버튼</BranchLoadingButton>
      </div>
    );
  }
}

export default App;
