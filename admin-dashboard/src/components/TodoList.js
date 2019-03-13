import React from 'react';

class TodoList extends React.Component
 {
     constructor(props){
     super(props);

    }

        render(){
          const todos = this.props.todolist;
            return (
    
             <ul>
             {todos.map(todo =>
               <li key={todo.title}>
                 {todo.title}
               </li>
             )}
           </ul>

            )}

      
}
export default TodoList;