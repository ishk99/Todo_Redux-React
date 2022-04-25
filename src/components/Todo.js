import React, { useState } from 'react';
import './todo.css';
import * as actions from '../actions/index.js';
import { useSelector, useDispatch } from 'react-redux';
const Todo = () => {

  // declaring useState hook - to get what user writes in input field
  const [inputData, setInputData] = useState(' '); //this is state initialization in react
  const dispatch = useDispatch();
  const list = useSelector((state) => 
    state.todoReducers.list
  );
    return (
        <>
        <div className='main-div'>
        <div className='child-div'>
          <figure>
            <figcaption>Add Your List Here ✍ </figcaption>
          </figure>
        
          <div className='addItems'>
            <input type='text' placeholder='Add Items' 
            value={inputData} 
            onChange={(event) => setInputData(event.target.value)} //setInputData will update the state change
            />
            <i className='fa fa-plus add-btn' onClick={() => dispatch(actions.addTodo(inputData),
              setInputData(''))}></i>

          </div>
          <div className='showItems'>
            {
              list.map((element) =>{
                return(
                <div className='eachItem' key={element.id}>
                  <h3>{element.data}</h3>
                  <div className='todo-btn'>
                    <i className='fa fa-trash-alt add-btn' title='Delete Item' onClick={() => dispatch(actions.deleteTodo(element.id))}></i>
                  </div>
                </div>

                )
              })
            }
            
          </div>
          <div className='showItems'>
            <button className='btn effect04' data-sm-link-text='remove All'
              onClick={(e) => dispatch(actions.removeTodo(e.id))}
            ><span>Check List</span></button>

          </div>

        </div>
      </div>
        </>
    )
}
export default Todo;