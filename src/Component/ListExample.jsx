import React, { Component } from 'react';

class ListExample extends Component {
  render() {
    const priceList = [1000, 2000, 3000, 4000];
    const prices = priceList.map((price) => <div>가격 : {price}원</div>);

    const todoList = [
      { taskName: '빨래하기', finished: false },
      { taskName: '공부하기', finished: true },
    ];

    //   const todos = todoList.map((todo) => <div>{todo.taskName}</div>);

    return (
      <div>
        <label>가격 목록</label>
        {prices}

        {todoList.map((todo) => (
          <div key={todo.taskName}>{todo.taskName}</div>
        ))}
      </div>
    );
  }
}

export default ListExample;
