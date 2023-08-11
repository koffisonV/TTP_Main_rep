import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Students(){
    const [students, setStudents] = useState([]);

    useEffect(() => {
        async function fecthStudents(){
            const { data } = await axios.get("api/students");
            setStudents(data);
        }
        fecthStudents();
    }, []);

    return(
        <>
        <h2>List of all Students</h2>
        <ul>
            {students.map((student) =>(
                <li key={student.id}>
                    <Link to={`/students/${student.id}`}>
                        <h3>{student.firstName} {student.lastName}</h3>
                    </Link>
                </li>
            ))}
        </ul>
        </>
    )

}