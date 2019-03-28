import React, { Component } from 'react';
import TodoForm from './TodoForm';

import axios from 'axios';



class Todo extends Component {
  constructor(props){
    super(props);
    
    this.state =  {
      todos : [],
      title: '',
      description: '',
      complete: false,
      createDate : Date.now(),
      category : 'todo'
     
    }
    this.grabTodos();
  }
  grabTodos = () => {
    axios.get('http://localhost:63271/api/todo')
    .then((results)=> { 
     console.log(results.data);
     this.setState({todos : results.data});
     
    });
  }
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
}
  onSubmit = (e) => {
    e.preventDefault();
    
    const { title, description, complete, createDate } = this.state;

    axios.post('http://localhost:63271/api/todo', { title, description, complete,createDate })
      .then((result) => {
        this.grabTodos();
      });
}
deleteTodo = (e) => {
  e.preventDefault();
  var todoid = e.target.value;
  //console.log('id=' + e.target.value);
  axios.delete('http://localhost:63271/api/todo/' + todoid)
  .then((results)=> { 
   
   this.grabTodos();
   
  });
}
  
  render() {
    
    return (
    
      <div className="App">
        
          <div>
            <TodoForm todolist={this.state.todos} deleteTodo={this.deleteTodo} onChange={this.onChange} onSubmit={this.onSubmit} title={this.state.title} description={this.state.description} />
  
          </div>
      </div>
    );
  }
}

export default Todo;
