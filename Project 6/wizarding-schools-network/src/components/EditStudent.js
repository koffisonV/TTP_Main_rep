import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useStudents } from "../context/StudentsContext";
import axios from "axios";

export default function EditStudent() {
    const { id } = useParams();
    const {student, setStudent, handleClick} = useStudents({
        firstName:"",
        lastName:"",
        email:"",
    });

    async function handleUpdate(){
        try {
            const { data } = await axios.put(`/api/students/${id}`, student);
        } catch (error) {
            console.error(error);
        }
    }
      
    async function handleChange(e){
        setStudent(prevStudent => ({...prevStudent, [e.target.name]: e.target.value}))
    }
    
    return (
        <div>
            <h2>Edit Student</h2>
            <form>
            <input 
                type="text" 
                onChange={handleChange} 
                name="firstName"
                value={student.firstName}
                placeholder="First Name" 
            />
            <input 
                type="text" 
                onChange={handleChange} 
                name="lastName" 
                value={student.lastName}
                placeholder="Last Name" 
            />
            <input 
                type="text" 
                onChange={handleChange} 
                name="email" 
                value={student.email}
                placeholder="email" />
            </form>
            <button type="submit" onClick={handleUpdate}>Update</button>
            <button onClick={handleClick}>Go Back</button>
        </div>
    );

}

