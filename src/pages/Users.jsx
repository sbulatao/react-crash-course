import { Link, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from 'axios';

function Users (){
    const { id } = useParams();
    const [user, setUser] = useState({});

    async function fetchUser() {
         const { data } = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
         console.log(data);
         setUser(data);
    }

    useEffect(() => {
        fetchUser();
    }, []);

    return(
        <div>
            <Link to="/">Go Back</Link>
            <h1>{ user.id }</h1>
            <h1>{ user.name }</h1>
            <h1>{ user.email }</h1>
            <h1>{ user.username }</h1>
        </div>
    );
}

export default Users;

// function Users (){
//     const { id, name, email, username } = useParams();

//     useEffect((id, name, email, username) => {
//         fetch(`https://jsonplaceholder.typicode.com/users`);
//     }, [id, name, email, username]);

//     return(
//         <>
//             <h1>{id}</h1>
//             <h1>{name}</h1>
//             <h1>{email}</h1>
//             <h1>{username}</h1>
//         </>
//     );
// }

// export default Users;