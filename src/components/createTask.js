import React, { Component } from 'react';

class createTask extends Component{
    createHandler = (event) =>{
        event.preventDefault();
        this.props.create(this.refs.createInput.value);
        this.refs.createInput.value= '';
    }
    render(){
        return(
            <form className='tile tile-createTask' onSubmit={this.createHandler}>
                <input className='input-box' type='text' placeholder='Enter you new task here...' ref='createInput' autoFocus/>
                <button className='add-btn'><i className='fa fa-plus fa-2x'></i></button>
            </form>
        )   
    }
}

export default createTask;