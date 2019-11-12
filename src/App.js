import React, {Component, Fragment} from 'react';
import Ballon from "./components/balloons";
import './components/pagefon.css';


class App extends Component {
    state = {
        numbers: [0, 0, 0, 0, 0],
    };

    generationNumber = () => {
        const numbers = [];
        for(let i = 0; i < 5;){
           const number = Math.floor(Math.random() * (36 - 5 + 1) + 5);
           if (numbers.includes(number)) continue;
            numbers.push(number);
            ++i;
        }
        this.setState({numbers: numbers.sort((a,b) => a - b)})
    };

    render() {
        return(
            <Fragment>
                <div className="App">
                    <div className="circle">
                        {this.state.numbers.map(number =>  <Ballon number={number}/>)}
                    </div>
                    <div className="btnBlock">
                        <button className="btn" onClick={this.generationNumber}>New number</button>

                    </div>
                </div>

            </Fragment>
    )
    }

}


export default App;
