import React from 'react';
import Clicker from './clicker'

class Determination extends React.Component{
    constructor(){
        super();
        this.state = {
            Amount: 0,
            Cost: 10,
            RateIncrease: 1
        }
    }

    handleClick = () => {
        this.setState({
            Amount: this.state.Amount + 1,
            RateIncrease: this.state.RateIncrease + 1
        })
    }

    render(){
        const {Amount, Cost, RateIncrease} = this.state;

        return(
            <div>
                <button onClick={this.handleClick}>Buy Determination</button>
                <p>Amount: {Amount}</p>
                <p>Cost: 10</p>
                <p>Rate Increase: 1</p>
            </div>
        )
    }
}

export default Determination;