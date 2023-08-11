import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useCampuses } from "../context/CampusesContext";

export default function Campus(){
    // const [campus, setCampus] = useState([]);
    const { id } = useParams();
    // const navigate = useNavigate();
    const {campus, setCampus, handleClick} = useCampuses();

    useEffect(() => {
        async function fecthCampus(){
            const { data } = await axios.get(`/api/campuses/${id}`);
            setCampus(data);
        }
        fecthCampus();
    }, [id]);
    // function handleClick(){
    //     navigate(-1);
    // }
    return(
        <>
            <img src={campus.imageUrl} />
            <h2>{campus.name}</h2>
            <h3>{campus.address}</h3>
            <p>{campus.description}</p>
            <br/>
            <button onClick={handleClick}>Go Back</button>
        </>
    )
}