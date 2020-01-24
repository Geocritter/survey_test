import React from 'react';
import './App.css';

//components
import Header from './components/header/header';
import Text from './components/textbox/textbox';
import Pictures from './components/pictures/pictures';

class App extends React.Component{
    state = {
        buttonPress: false,
        question: ["What is one reason you use our product?",
                    "What was one time you felt disappointed when using our product?",
                    "What is one problem you are having with our product?"],
        level: 0,
        phrase: "",
    }
    handlePhrase = (phraseValue) => {
        this.setState({
            buttonPress: false,
            level: this.state.level+1,
            phrase: phraseValue});
    }
    resetState(){
        this.setState({
            buttonPress: false,
            level: 0,
            phrase: "",
        })
    }
    handleClick(){
        this.setState({buttonPress: true});
    }

    render(){
        //reset the survey
        if (this.state.level > 2) {
            return(
                <div className='App'>
                    <Header statement="Thanks for taking part in our survey!"/>
                    <h1>Press button to restart.</h1>
                    <button onClick={this.resetState.bind(this)}> Continue </button>
                </div>
            )
        }
        //if page refresh button not pressed...
        if (!this.state.buttonPress) {
            return(
                //load state 1
                <div className='App'>
                    <Header statement={this.state.question[this.state.level]}/>
                    <button onClick={this.handleClick.bind(this)}> Continue </button>
                </div>
            )
        }
        //if page refresh button pressed...
        else {
            return(
                //load state 2
                <div className='App'>
                    <Header statement={this.state.question[this.state.level]}/>
                    <Pictures level={this.state.level} />
                    <p>Explain your reasoning:</p>
                    <Text 
                        click={this.handlePhrase}/>
                    <h1>{"\n"}{"\n"}</h1>
                </div>
            )
        }
    }
}

export default App;
