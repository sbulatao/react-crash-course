import logo from './logo.svg';
import './App.css';
import Todo from './components/Todo.jsx' // for Todo.jsx
import Title from './components/Title.jsx'; // for Title.jsx
import Modal from './components/Modal.jsx'; // for Modal.jsx
import Counter from './components/Counter.jsx'; // for Counter.jsx

import React, { useState } from 'react';


function App() {
  const [showModal, setShowModal] = useState(false)

  function onTodoDelete(){
    setShowModal(true)
    console.log('onTodoDelete()')
  }

  function modalCancel(){
    setShowModal(false)
    console.log('modalCancel()')
  }

  function modalConfirm(){
    setShowModal(false)
    console.log('modalConfirm()')
  }

  return (
    <div>
      <Title />
      <div>
        <input type="text" onChange={(event) => {
          console.log(event.target.value)
        }} />
        <button onClick={() => setShowModal(true)}>Add todo</button>
      </div>
      <div className='todo__wrapper'>
      <Todo onTodoDelete={onTodoDelete} title="Finish Frontend Simplified"/>
      <Todo onTodoDelete={onTodoDelete} title="Finish Interview Section"/>
      <Todo onTodoDelete={onTodoDelete} title="Land a Job"/>
      </div>
      {showModal && (
        <Modal 
          modalCancel={modalCancel} 
          modalConfirm={modalConfirm} 
          title="Confirm Delete?"/>
      )}
    </div>
  );



    /**
   * 1. Create a "Counter.jsx" component
   * 2. Create a default `count` of 0
   * 3. Create a button to increment `count` by 1
   * 4. Create a button to decrement `count` by 1
   * 5. Import your Counter in App.jsx and test it
    */

  //  return<Counter />
    

  // let isModalOpen = false;

  // function toggleModal(){
  //   isModalOpen = !isModalOpen;
  //   console.log(isModalOpen)
  // }

  // const [showModal, setShowModal] = useState(false)

  // return (
  //   <div>
  //     <Title />
  //     <div>
  //       <input type="text" onChange={(event) => {
  //         console.log(event.target.value)
  //       }} />
  //       {/* <button>Add todo</button> */}
  //       {/* <button onClick={toggleModal}>Add todo</button> */}
  //       <button onClick={() => setShowModal(true)}>Add todo</button>
  //     </div>
  //     <div className='todo__wrapper'>
  //     <Todo 
  //       title="Finish Frontend Simplified"
  //       // paragraph="Code along w/ Frontend Simplified step by step."
  //       />
  //     <Todo 
  //       title="Finish Interview Section"
  //       // paragraph="Finish every interview question in the next 6 weeks."
  //       />
  //     <Todo title="Land a Job"
  //       // paragraph="Apply to 100 jobs."
  //       />
  //     </div>
  //     {/* {isModalOpen ? <Modal title="Confirm Delete?"/> : null} */}
  //     {showModal && <Modal title="Confirm Delete?"/>}
  //   </div>
  // );
}

export default App;
