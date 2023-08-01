import axios from "axios";
import React, { useState } from "react"
import { useParams } from "react-router-dom";

export default function ControlledForm(){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const { id } = useParams();

    async function handleSubmit(event){
        event.preventDefault();
        console.log(name,email);

        const { data } = await axios.post("http://localhost:3000/users", {
            name, email,
        });
        console.log(data);
    };

    // async function handleUpdate(event){
    //     event.preventDefault();
    //     const { data } =  await axios.put(`http://localhost:3000/users/:${id}`, {
    //         name, email,
    //     });
    //     console.log(data);
    // };

    // async function handleDelete(event){
    //     event.preventDefault();
    //     const { data } = await axios.delete(`http://localhost:3000/users/:${id}`, {
    //         name, email,
    //     });
    //     console.log(data);
    // };

    return(
        <>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                </label>
                <label>
                    Email:
                    <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                </label>
                <button type="submit">Submit</button>
            </form>
        </>
    )
}