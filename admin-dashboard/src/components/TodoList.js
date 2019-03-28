import React from 'react';
import { Button, ListGroup, ListGroupItem } from 'reactstrap';
import '../assets/Todo.css';

class TodoList extends React.Component
 {
     constructor(props){
     super(props);

    }

        render(){
          const todos = this.props.todolist;
            return (
    
              <ListGroup className="todoList">
             {todos.map(todo =>
               <ListGroupItem key={todo.internalId} >
                {todo.title}<Button color="danger" onClick={this.props.deleteTodo} value={todo.internalId}>X</Button> 
               </ListGroupItem>
             )}
           </ListGroup>

            )}

      
}
export default TodoList;