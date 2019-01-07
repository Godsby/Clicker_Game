import React from 'react';
// import Determination from './determination';

class Clicker extends React.Component{
    constructor(){
        super();
        this.state = {
            KnowledgePoints: 0,
            Rate: 1,
            DeterminationAmount: 0,
            DeterminationCost: 10,
            TimeAmount: 0,
            TimeCost: 100,
            HabitsAmount: 0,
            HabitRate: .1,
            ForeknowledgeAmount: 0,
            ForeknowledgeRate: .01
        }
    }

    handleClick = () => {
        this.setState({
            KnowledgePoints: this.state.KnowledgePoints + this.state.Rate
         });
    }

    handleDetermination = () => {
        this.setState({
            DeterminationAmount: this.state.DeterminationAmount + 1,
            Rate: this.state.Rate + 1,
            KnowledgePoints: this.state.KnowledgePoints - this.state.DeterminationCost
        })
    }

    handleTimer = () => {
        this.setState({
            KnowledgePoints: this.state.KnowledgePoints - this.state.TimeCost,
            Rate: this.state.Rate + 10,
            TimeAmount: this.state.TimeAmount + 1
        })
    }

    handleHabits = () => {
        this.setState({
            KnowledgePoints: Math.floor(this.state.KnowledgePoints/2),
            HabitsAmount: this.state.HabitsAmount + 1,
            Rate: this.state.Rate * (1 + this.state.HabitRate)
        })
    }

    handleForeKnowledge = () => {
        this.setState({
            KnowledgePoints: Math.floor(this.state.KnowledgePoints/2),
            ForeknowledgeAmount: this.state.ForeknowledgeAmount + 1,
            Rate: this.state.Rate * (1 + this.state.ForeknowledgeRate)
        })
    }

    render(){
        const {KnowledgePoints, Rate, DeterminationAmount, DeterminationCost, TimeAmount, TimeCost, HabitsAmount, ForeknowledgeAmount} = this.state;
        return(
            <div>
                <p>Knowledge Points: {Math.round(KnowledgePoints)}</p>
                <button onClick={this.handleClick}>Click + {Rate}</button><br/><br/>
                <button 
                    disabled={this.state.KnowledgePoints <10}
                    onClick={this.handleDetermination}
                    >Buy Determination</button><br/>
                <ul>
                {KnowledgePoints >= 10 ? <ul>"You're now ready to purchase Determination. By doing so, you will lose 10 Knowledge Points each time, but your Rate will be increased by 1."</ul> : ""}
                <p>Amount: {DeterminationAmount}</p>
                <p>Cost: {DeterminationCost}</p>
                <p>Rate Increase: 1</p>
                </ul>
                <button 
                    disabled={this.state.KnowledgePoints < 100}
                    onClick={this.handleTimer}>
                    Buy Time</button><br/>
                <p>Amount: {TimeAmount}</p>
                <p>Cost: {TimeCost}</p>
                <p>Rate Increase: 10</p>

                <button 
                    disabled={this.state.KnowledgePoints < 1}
                    onClick={this.handleHabits}>
                    Buy Good Habits</button><br/>
                <p>Amount: {HabitsAmount}</p>
                <p>Cost: 1/2 of Knowledge Points</p>
                <p>Rate Increase: 10%</p>

                <button 
                    disabled={this.state.KnowledgePoints < 1}
                    onClick={this.handleForeKnowledge}>
                    Buy Foreknowledge</button><br/>
                <p>Amount: {ForeknowledgeAmount}</p>
                <p>Cost: 1/2 of Knowledge Points</p>
                <p>Rate Increase: 1%</p>
            </div>
        )
    }
}

export default Clicker;