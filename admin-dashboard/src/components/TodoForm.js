import React from 'react';
import axios from 'axios';
import TodoList from './TodoList';


class TodoForm extends React.Component {
constructor(props){
    super(props);
    
}


    render(){
        const {  title, description } = this.props;
        return(
            <div>
            <form onSubmit={this.props.onSubmit}>

                <input type="text" name="title" placeholder="title" onChange={this.props.onChange} value={title}></input><br></br>
                <input type="text" name="description" placeholder="description" onChange={this.props.onChange} value={description}></input><br></br>
                 
                <button type="submit" name="submit">Submit</button>
            </form>
            <TodoList todolist={this.props.todolist} deleteTodo={this.props.deleteTodo} />
            </div>
            
         
    );}
}
export default TodoForm;