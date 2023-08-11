import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useCampuses } from "../context/CampusesContext";

export default function Campuses(){
    // const [campuses, setCampuses] = useState([]);
    const campuses = useCampuses();

    // useEffect(() => {
    //     async function fecthCampuses(){
    //         const { data } = await axios.get("api/campuses");
    //         setCampuses(data);
    //     }
    //     fecthCampuses();
    // }, []);

    return(
        <>
        <h2>List of all Wizarding Schools</h2>
        <ul>
            {campuses.map((campus) =>(
                <li key={campus.id}>
                    <img src={campus.imageUrl} alt={campus.name} height={`200px`} width={`auto`}/>
                    <Link to={`/wizarding-campuses/${campus.id}`}>
                        <h3>{campus.name}</h3>
                    </Link>
                </li>
            ))}
        </ul>
        </>
    )
}