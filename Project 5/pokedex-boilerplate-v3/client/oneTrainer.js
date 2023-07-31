import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function OneTrainer(){
    const [singleTrainer, setSingleTrainer] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        async function fetchSingleTrainer(){
            const { data } = await axios.get(`/api/trainers/${id}`);
            setSingleTrainer(data);
        }
        fetchSingleTrainer();
    }, [id]);
    
    return(
        <>
            <h2>{singleTrainer.firstname} {singleTrainer.lastName}</h2>
            <img src={singleTrainer.imageUrl}></img>
            <p>Team: {singleTrainer.team}</p>
        </>
    );
}