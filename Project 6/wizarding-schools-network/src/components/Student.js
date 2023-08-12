import axios from "axios";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useStudents } from "../context/StudentsContext";

export default function Student(){
    const { student, setStudent, handleClick } = useStudents();
    const { id } = useParams();

    useEffect(() => {
        async function fecthStudent(){
            const { data } = await axios.get(`/api/students/${id}`);
            setStudent(data);
        }
        fecthStudent();
    }, [id]);

    return(
        <>
            <img src={student.imageUrl} alt={student.firstName} />
            <h2>Name: {student.firstName} {student.lastName}</h2>
            <p>Email: {student.email}</p>
            <small>Ability score: {student.gpa}</small>
            <br/>
            <button onClick={handleClick}>Go Back</button>
        </>
    )
}