import React from 'react';

class Textbox extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            search: "",
        };
    }

    updateSearch(event){
        this.setState({search: event.target.value})
    }

    handleClick() {
        var phrase = this.state.search;
        this.props.click(phrase);
    }

    render(){
        return(
            <div className="Textbox">
                <input type="text" size="70"
                    value={this.state.search}
                    onChange={this.updateSearch.bind(this)} 
                    placeholder="Enter response here: "/> 
                       
                <button type="button" onClick={this.handleClick.bind(this)}>Submit</button>
                
                
            </div>
        )
    }
    
}

export default Textbox;