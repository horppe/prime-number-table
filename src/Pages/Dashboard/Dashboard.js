import React, { Component } from 'react';
import "./Dashboard.css";
export default class Dashboard extends Component {
    constructor(props){
        super(props)
    }
    state = {
       primes: [],
       number: 10
    }

    componentDidMount = () => {
       this.getPrime(this.state.number)
    }

    getPrime = length => {
        const primes = [];
        for(let i = 2; i < 3000; i++){
            if(this.isPrime(i)){
                primes.push(i);
            }

            if(primes.length == length){
                break; 
            }
        }
        console.log("Primes", primes) 
        this.setState({primes}, () => {
            console.log("State", this.state)
        })
    }

    isPrime = num => {
        for(let i = 2; i < Math.sqrt(num); i++){
            if(num % i === 0){
                return false
            }
        }
        return num > 1;
    }
    handleTextChange = event => {
        
        const numberStr = event.target.value;
        this.setState({number: numberStr});
        if(numberStr){
            this.getPrime(parseInt(numberStr))
        }
    }


    render = () => {
        const {topStates} = this.state;
        console.log("Top States", topStates )
        return (
            <div className="dashboard-container">
                
                <div className="container">
                <table className="multi-table" style={{width:'100%'}}>
                    <tr>
                    <th></th>
                        {
                            this.state.primes.map(v => (
                                <th>{v}</th>
                            ))
                        }
                    </tr>
                    {
                        this.state.primes.map(v => (
                            <tr >
                                <th>{v}</th>
                                {
                                    this.state.primes.map(val => (
                                        <td>{v * val}</td>
                                    ))
                                }
                            </tr>
                        ))
                    }
                   
                    </table>

                    <div className="lower-container">
                        <p>Enter Number of Prime numbers to generate</p>
                        <input value={this.state.number} onChange={this.handleTextChange} type="number" className="input" />
                    </div>
                </div>
            </div>
        )
    }
}