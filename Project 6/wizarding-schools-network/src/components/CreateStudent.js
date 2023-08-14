import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useStudents } from "../context/StudentsContext";

export default function CreateStudent() {
    const {student, handleClick} = useStudents();
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const navigate = useNavigate();

    async function handleSubmit(e){
        e.preventDefault();

        try{
            const { data } = await axios.post("/api/students",{
                firstName,
                lastName,
            });
        navigate("/students")
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <h2>Create a New Student</h2>
            <form id="student-form" onSubmit={handleSubmit}>
                <label htmlFor="firstName">First name: </label>
                <input
                    name="firstName"
                    value={student.firstName}
                    onChange={(e) => setName(e.target.value)}
                />
                <label htmlFor="lastName">Last name: </label>
                <input
                    name="lastName"
                    value={student.lastName}
                    onChange={(e) => setAddress(e.target.value)}
                />
                <button type="submit">Create</button>
                <button onClick={handleClick}>Go Back</button>
            </form>
        </>
    );
}
