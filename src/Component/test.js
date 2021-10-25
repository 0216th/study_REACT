import React from "react"; //import : 특정 라이브러리를 불러온다. 


class Test extends React.Component {  //리액트의 컴포넌트 형태로 작성된 클래스

    render() {
        return (
            <div>
                <TestProfile id={this.props.id} image={this.props.image} />
                <TestInfo name={this.props.name} birthday={this.props.birthday} />
            </div>


        )
    }
}

class TestProfile extends React.Component {
    render() {
        return (
            <div>
                <img src={this.props.image} alt='profile' />
                <h2>{this.props.id}</h2>
            </div>
        )
    }
}

class TestInfo extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.name}</h1>
                <h1>{this.props.birthday}</h1>
            </div>
        )
    }
}

export default Test;   //다른 컴포넌트에서 사용할 수 있도록 내보내기를 한다. 