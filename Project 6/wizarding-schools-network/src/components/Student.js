import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useStudents } from "../context/StudentsContext";
import { useCampuses } from "../context/CampusesContext";

export default function Student(){
    const { student, setStudent, handleClick } = useStudents();
    const { campuses } = useCampuses();
    const [studentCampus, setStudentCampus] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        async function fecthStudent(){
            const { data } = await axios.get(`/api/students/${id}`);
            setStudent(data);
        }
        fecthStudent();
    }, [id]);

    useEffect(() => {
        if (student && student.campusId) {
            const associatedCampus = campuses.find(campus => campus.id === student.campusId);
            setStudentCampus(associatedCampus);
        }
    }, [student, campuses]);

    return(
        <>
            <img src={student.imageUrl} alt={student.firstName} />
            <h2>Name: {student.firstName} {student.lastName}</h2>
            <p>Email: {student.email}</p>
            <small>Ability score: {student.gpa}</small>
            <Link to={`/editStudent/${id}`}>
                <button>Edit</button>
            </Link>
            <br/>
            {studentCampus ? (
                <p>Associated Campus: {studentCampus.name}</p>
            ) : (
                <p>No associated campus.</p>
            )}
            <button onClick={handleClick}>Go Back</button>
        </>
    )
}