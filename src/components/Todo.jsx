import './Todo.css'

// function Todo(props) {
function Todo({ title, onTodoDelete }) {
    return (
        <div className='todo'>
            <h2>{title}</h2>
            <button onClick={onTodoDelete}>Delete</button>
        </div>
    );

    // function deleteTodo(id){
    //     console.log('deleteTodo()', title.toUpperCase())
    // }
    // // console.log(props.title)
    // // console.log(title)
    // return (
    //     <div className='todo'>
    //         {/* <h2>{props.title}</h2> */}
    //         <h2>{title}</h2>
    //         {/* <p>{paragraph}</p> */}
    //         <span></span>
    //         {/* <button onClick={() => {
    //             console.log('clicked')
    //         }}>Delete</button> */}
    //         {/* <button onClick={() => {deleteTodo()}}>Delete</button> */}
    //         {/* <button onClick={deleteTodo}>Delete</button> */}
    //         <button onClick={() => deleteTodo(1)}>Delete</button>
    //     </div>
    // );
}

export default Todo;