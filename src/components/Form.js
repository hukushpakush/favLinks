import React, {Component} from 'react';

class Form extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: " " ,
            URL: " "
        };
     
    }

    handleChange = event => {
       const {name, value} = event.target;

        this.setState({
            [name]: value
        });    
        console.log("the input changed")
        console.log(event.target.value)
        
    }

    onFormSubmit = (event) => {

        event.preventDefault();
        
        this.props.handleSubmit(this.state); 
        this.setState({
            name: "",
            URL: ""
        });

          console.log("button clicked")
       
    }

    render() {
        const{ name , URL} = this.state;


        return(
            <form onSubmit={this.onFormSubmit}>
                 <label>Name:</label>
                <input onChange={this.handleChange} type="text" name="name" value={name} ></input>
                <label >URL:</label>
                <input onChange={this.handleChange} type="text" name="URL" value={URL}></input>
                <button onClick= {this.onFormSubmit}>Submit</button> 
            </form>
        )
    
    }
}

export default Form;
