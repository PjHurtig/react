import React from "react"

class StatefulGreeting extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            introduction: "hello",
            buttonText: "exit",
            count: 0,
        };
    }


    // handleClick() {
    //     this.setState({
    //         introduction: this.state.introduction === "hello" ? "goodbye" : "hello",
    //         buttonText: this.state. buttonText === "exit" ? "enter" : "exit",
    //     }, () => {
    //     console.log('new state', this.state.introduction, 'new state', this.state.buttonText);
    //     });
    //     console.log(this.state.introduction, this.state.buttonText);
    // }

    handleClick() {
        this.setState((prevState, prevProps) => {
            console.log('old state ', prevState)
            console.log('old props ', prevProps)
            return {
                introduction: prevState.introduction === "hello" ? "goodbye" : "hello",
                buttonText: prevState. buttonText === "exit" ? "enter" : "exit",
            }
        })
    }


    // increment() {
    //     this.setState({
    //         count: this.state.count +1,
    //     }, () => {
    //     console.log('new state ', this.state.count);
    //     });
    //     console.log('old state ', this.state.count);
    // }

    increment() {
        this.setState((prevState, prevProps) => {
            console.log('old state ', prevState)
            console.log('old props ', prevProps)
            return {
                count: prevState.count + 1
            }
        })
    }

    incrementFive(){
        this.increment();
        this.increment();
        this.increment();
        this.increment();
        this.increment();
    }


    render() {
        return (
            <div>
                {/* <h1>{this.state.introduction} {this.props.greeting}</h1> */}
                <button onClick={() => this.handleClick()}>{this.state.buttonText}</button>
                <button onClick={() => this.increment()}>{this.state.count}</button>
            </div>
        )
    }
}

export default StatefulGreeting;