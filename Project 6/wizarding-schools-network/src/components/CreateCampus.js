import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useCampuses } from "../context/CampusesContext";

export default function CreateCampus() {
    const {campus, handleClick} = useCampuses();
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const navigate = useNavigate();

    async function handleSubmit(event){
        event.preventDefault();

        try{
            const { data } = await axios.post("/api/campuses",{
                name,
                address,
            });
        navigate("/wizarding-campuses")
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <h2>Create a New Campus</h2>
            <form id="campus-form" onSubmit={handleSubmit}>
                <label htmlFor="name">Name: </label>
                <input
                    name="name"
                    value={campus.name}
                    onChange={(e) => setName(e.target.value)}
                />
                <label htmlFor="address">Address: </label>
                <input
                    name="address"
                    value={campus.address}
                    onChange={(e) => setAddress(e.target.value)}
                />
                <button type="submit">Create</button>
                <button onClick={handleClick}>Go Back</button>
            </form>
        </>
    );
}
