import React, { Component } from 'react';

//todolist 컴포넌트를 만들어보자

class TodoList extends Component {
  render() {
    const { work } = this.props;
    return (
      <div>
        할 일 : {work.taskName} , 완료 여부 : {work.finished ? '완료' : '미완료'}
      </div>
    );
  }
}

export default TodoList;
