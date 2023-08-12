import axios from "axios";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useCampuses } from "../context/CampusesContext";
import { useStudents } from "../context/StudentsContext";

export default function Campus(){
    const { id } = useParams();
    const {campus, setCampus, handleClick} = useCampuses();
    const { students } = useStudents();

    useEffect(() => {
        async function fecthCampus(){
            const { data } = await axios.get(`/api/campuses/${id}`);
            setCampus(data);
        }
        fecthCampus();
    }, [id]);

    return(
        <>
            <img src={campus.imageUrl} alt={campus.name}/>
            <h2>{campus.name}</h2>
            <h3>{campus.address}</h3>
            <p>{campus.description}</p>
            <br />

            <h3>Students:</h3>
            <ul>
                {students.map(student => (
                    <li key={student.id}>
                        <p>{student.firstName} {student.lastName}</p>
                    </li>
                ))}
            </ul>
            <button onClick={handleClick}>Go Back</button>
        </>
    )
}