import React from "react"; //import : 특정 라이브러리를 불러온다. 


class Test extends React.Component {  //리액트의 컴포넌트 형태로 작성된 클래스

    render() {
        return (
            <div>
                <TestProfile id={this.props.id} image={this.props.image} />
                <TestInfo name={this.props.name} birthday={this.props.birthday} />
                <AppClass></AppClass>
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

class Subject extends React.Component {
    render() {

        function aaa() {
            console.log("zzz");
        }

        return (
            <header>
                <h1>{this.props.id}</h1>
                World wide web
                <h1>{aaa()}</h1>
            </header>
        )
    }
}


class AppClass extends React.Component {
    state = {
        contents: [
            { id: 1, title: "test1", desc: "desc test1" },
            { id: 2, title: "test2", desc: "desc test2" },
            { id: 3, title: "test3", desc: "desc test3" }
        ]
    } //객체 

    render() {
        return (
            <div>
                <Subject id="test1"></Subject>
                <Subject id="test2"></Subject>
                <Subject id="test3"></Subject>
            </div>
        )
    }
}

export default Test;   //다른 컴포넌트에서 사용할 수 있도록 내보내기를 한다. 