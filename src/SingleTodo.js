import React, {Component} from 'react';

// class SingleTodo extends Component{
//     constructor(){
//         super();
//     }
//     render(){
//         return(
//             <li>{this.props.todo}  <button onClick={this.props.delete}>x</button></li>
//         )
//     }
// }

const SingleTodo = props => {
    return(
        <li>{props.todo}  <button onClick={props.delete}>x</button></li>
    );
}

export default SingleTodo;