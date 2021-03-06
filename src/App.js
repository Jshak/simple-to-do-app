import React, { Component } from 'react';
import SingleTodo from './SingleTodo';
import './App.css';

class App extends Component {
 constructor(){
   super();
   this.state = {
     todos: [],
     currentTodo : ""
   };
 }

 onInputChange = e => {
  this.setState({ currentTodo: e.target.value});
 }

 onClick = () => {
   let todosCopy = this.state.todos.slice();
   todosCopy.push(this.state.currentTodo);

   this.setState({ todos: todosCopy,
    currentTodo: ""
  });

 }

deleteTodo = i => {
let todosCopy = this.state.todos.slice();
todosCopy.splice(i,1);
this.setState({
  todos: todosCopy
});
}

 render(){
   let bulletedTodos = this.state.todos.map((e,i)=>{
    return( 
      <SingleTodo todo={e} delete={()=>this.deleteTodo(i)}/>
    );
   });
   return(
     <div>
       <input placeholder="Enter TODO" value={this.state.currentTodo} 
       onChange={this.onInputChange}/>
       <button onClick={this.onClick}>Submit</button>
       <br />
       {this.state.todos.length === 0 ? "No Todos yet" : <ul>{bulletedTodos}</ul>}
     </div>
   )
 }
}

export default App;
