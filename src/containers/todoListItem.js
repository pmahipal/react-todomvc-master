import React, { Component } from 'react';

class TodoListItem extends Component {
    state={
        isDone: false,
        ishover: false,
    }
    isCompletedHandler = (e) => {
        this.setState({isDone: e.target.checked});
    }
    onClicked = () => {
        this.props.removeItem(this.props.index);
    }
    mouseOverHandler = () => {
       this.setState({ishover : true})
    }
    mouseOutHandler = () => {
        this.setState({ishover:false})        
    }
    render(){
        let showDestroyBtn = null;
        if(this.state.ishover) {
            showDestroyBtn = 
                <button 
                    className='destroy'
                    title='Remove from List'
                    onClick={this.onClicked}
                >
                    <i className='fa fa-close'></i>
                </button>
        }
        return(
            <li className='tile tile-li' onMouseEnter={this.mouseOverHandler} onMouseLeave={this.mouseOutHandler}>
                <div className='divs'>
                    <input type='checkbox' onClick={this.isCompletedHandler}/>
                    <span className={'li-text ' + (this.state.isDone ? 'completed' : '')} title={this.state.isDone ? 'Task Completed' : ''}>{this.props.task}</span>
                </div>
                <div>{showDestroyBtn}</div>
            </li>
        );
    }    
}

export default TodoListItem;