import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useCampuses } from "../context/CampusesContext";
import { useStudents } from "../context/StudentsContext";

export default function Campus(){
    const { id } = useParams();
    const {campus, setCampus, handleClick} = useCampuses();
    const { students } = useStudents();
    const [campusStudents, setCampusStudents] = useState([]);

    try{ useEffect(() => {
        async function fecthCampus(){
            const { data } = await axios.get(`/api/campuses/${id}`);
            setCampus(data);
        }
        fecthCampus();
        }, [id]);
    } catch(error){
        console.error(error);
    }

    try{useEffect(() => {
        const associatedStudents = students.filter(student => student.campusId === campus.id);
            setCampusStudents(associatedStudents);
        }, [students, campus]);
    }catch(error){
        console.error(error);
    }

    return(
        <>
            <img src={campus.imageUrl} alt={campus.name} />
            <h2>{campus.name}</h2>
            <h3>{campus.address}</h3>
            <p>{campus.description}</p>
            <br />
            {campusStudents.length === 0 ? (
                <p>No students associated with this campus.</p>
            ) : (
                <>
                    <h2>Students:</h2>
                    <ul>
                        {campusStudents.map((student) => (
                            <li key={student.id} >
                            <p>
                                Name: {student.firstName} {student.lastName}
                            </p>
                            </li>
                        ))}
                    </ul>
                </>
            )}
            <button onClick={handleClick}>Go Back</button>
            <Link to={`/editCampus/${id}`}>
                <button>Edit</button>
            </Link>

        </>
    )
}