import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function Student(){
    const [student, setStudent] = useState([]);
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        async function fecthStudent(){
            const { data } = await axios.get(`/api/students/${id}`);
            setStudent(data);
        }
        fecthStudent();
    }, [id]);

    function handleClick(){
        navigate(-1);
    }

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