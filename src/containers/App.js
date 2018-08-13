import React, { Component } from 'react';
import '../styles/App.css';
import CreateTask from '../components/createTask';
import ToDoList from '../components/todoList';

class App extends Component {
  state = {
    tasks: JSON.parse(localStorage.getItem('tasks')),
    tasksCount:0,
  }
  componentWillMount(){
    this.setState({tasksCount: this.state.tasks.length})
  }
  createTaskHandler = (task) => {
    if(localStorage.getItem('tasks') == null){
      let newTasks = [];
      newTasks = [task, ...newTasks];
      this.setState({tasks:newTasks, tasksCount:newTasks.length});
      localStorage.setItem('tasks',JSON.stringify(newTasks));
    }
    else {
      let newTasks = JSON.parse(localStorage.getItem('tasks'));
      newTasks = [task, ...newTasks];
      this.setState({tasks:newTasks, tasksCount:newTasks.length});
      localStorage.setItem('tasks',JSON.stringify(newTasks));
    } 
  }
  removeTaskHandler = (itemIndex) => {
    let newTasks = [...this.state.tasks];
    newTasks.splice(itemIndex, 1);
    this.setState({tasks:newTasks, tasksCount:newTasks.length});
    localStorage.setItem('tasks',JSON.stringify(newTasks));    
  }
  removeAllHandler = () => {
    let newTasks = [];
    this.setState({tasks:newTasks, tasksCount:newTasks.length});
    localStorage.setItem('tasks',JSON.stringify(newTasks));
  }

  render() {
    let msg = null;
    if(this.state.tasksCount === 0){
      msg = '0 items';
    } 
    else if (this.state.tasksCount === 1){
      msg = '1 item left';
    }
    else { 
      msg=`${this.state.tasksCount} items left`;
    }
    
    return (
      <div className='App'>
        <h1 className='tile tile-header'>To-Do</h1>
        <p>You have <strong>{msg}</strong> in your ToDo List</p>
        <CreateTask create={this.createTaskHandler}/>
        <button className='removeAll-btn' title='Remove All' onClick = {this.removeAllHandler}>Remove All</button>
        <ToDoList tasks={this.state.tasks} removeItem={this.removeTaskHandler} />
      </div>
    );
  }
}

export default App;
