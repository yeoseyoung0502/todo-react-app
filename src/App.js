import React from 'react';
import Todo from './Todo';
import AddTodo from './AddTodo';
import {Paper, List, Container}from "@material-ui/core";
import './App.css';

class App extends React.Component { 
  constructor(props){
    super(props);
    this.state ={
      items :[ 
        {id:0, title:"Todo 1 ", done:true}, 
        {id:1, title:"Todo 2 ", done:false}, 
      ],
    }; 
  }
  
  add =(item)=>{ 
    const thisItems =this.state.items; 
    item.id ="ID-"+ thisItems.length;
    item.done =false; 
    thisItems.push(item); 
    this.setState({items:thisItems});
    console.log("items:",this.state.items);
  }

  render(){
    var todoItems =this.state.items.length >0 &&(
      <Paper style={{margin:16}}>
        <List>
        {this.state.items.map((item,idx)=>(
        <Todo item={item} key={item.id}/>
        ))} 
        </List>
      </Paper>
    );

    return (
      <div className="App">
        <Container maxWidth="md">
          <AddTodo add={this.add}/>
          <div className="TodoList">{todoItems}</div>
        </Container>
      </div>
    ); 
  }
}

export default App;
