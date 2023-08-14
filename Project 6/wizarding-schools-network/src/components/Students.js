import axios from "axios";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useStudents } from "../context/StudentsContext";

export default function Students(){
    const {students, setStudents} = useStudents();

    useEffect(() => {
        async function fecthStudents(){
            const { data } = await axios.get("api/students");
            setStudents(data);
        }
        fecthStudents();
    }, []);

    return(
        <>
            <div className="students-container">
                <h1 className="students-title">List of all Students</h1>
                <ul className="students-list">
                    {students.map((student) => (
                        <li key={student.id} className="student-item">
                            <Link to={`/students/${student.id}`} className="student-link">
                                <p className="student-name">{student.firstName} {student.lastName}</p>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            </>
    )

}