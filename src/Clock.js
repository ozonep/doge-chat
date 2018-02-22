import React, { Component } from 'react';

class Clock extends Component {
    state = {
        time: new Date()
    };

    componentDidMount() {
        this.interval = setInterval(this.tick, 1000)
    };

    componentWillUnmount() {
        clearInterval(this.interval);
    };

    tick = () => {
        this.setState({
            time: new Date()
        })
    };

    render() {
        return (
            <h1>{this.state.time.toLocaleTimeString()}</h1>
        );
    }
}

export default Clock;
