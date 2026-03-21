import React, { useState } from "react";

////////////////// understanding useState with array

function Counter(){
    const [arr, setArray] = useState([])

    function addPlus(){
        setArray(prevArr => [ ...prevArr, "+"])
    }

    function addMinus(){
        setArray(preArr => [ ...preArr, "-"])
    }

    return (
        <div>
            <button onClick={addMinus}>-</button>
            <button onClick={addPlus}>+</button>
            {arr}
        </div>
    );

}
export default Counter;


////////////////// understanding useState with  item and quantity

// function Counter(){
//     const [cart, setCart] = useState({
//         item: "apple",
//         quantity: 0,
//     });

//     function removeApple() {
//         // 1. Use a callback to get the previous value
//         // 2. Spread out all the properties of the prev state
//         // 3. Only change the property that you need to change
//         setCart(prevCart => ({
//             ...prevCart,
//             quantity: prevCart.quantity - 1,
//         }))
//     }

//     function addApple() {
//         setCart(prevCart => ({
//             ...prevCart,
//             quantity: prevCart.quantity + 1,
//         }))
//     }
  
//     return(
//         <div>
//             <button onClick={removeApple}>-</button>
//             {cart.quantity}
//             {cart.item}
//             <button onClick={addApple}>+</button>
//         </div>
//     );
// }
// export default Counter;


/////////////////// understanding useState

// function Counter() {
//     const [counter, setCounter] = useState(0) 

//     function incrementCounter(){
//         setCounter((counter) => counter + 1)
//         setCounter((counter) => counter + 1)
//     }

//     function decrementCounter(){
//         setCounter((counter) => counter - 1)
//     }

//     return (
//         <div>
//         <button onClick={decrementCounter} className="btn">-</button>
//         {counter}
//         <button onClick={incrementCounter} className="btn">+</button>
//         </div>
//     );
// }
// export default Counter;