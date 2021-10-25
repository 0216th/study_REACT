import './App.css';
import Test from './Component/test'; //만든 컴포넌트를 임포트 


const test = [{
    'id': 1,
    'image': 'https://placeimg.com/64/64/1',//보여주고싶은 랜덤이미지
    'name': '강태우',
    'birthday': '940216'
},
{
    'id': 2,
    'image': 'https://placeimg.com/64/64/2',//보여주고싶은 랜덤이미지
    'name': '강태우',
    'birthday': '940216'
}
    ,
{
    'id': 3,
    'image': 'https://placeimg.com/64/64/3',//보여주고싶은 랜덤이미지
    'name': '강태우',
    'birthday': '940216'
}]


function App() {
    return (
        <div>
            {test.map(c => {
                return (<Test key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.birthday}
                />
                )
            })
            }
        </div>
    )
}

export default App;