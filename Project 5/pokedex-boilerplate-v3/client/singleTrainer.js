import axios from "axios";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";

export default function singleTrainer(){
    const [trainers, setTrainers] = useState([]);

    useEffect(() => {
        async function fetchTrainers(){
            const { data } = await axios.get("/api/trainers");
            setTrainers(data);
          }
          fetchTrainers();
    }, []);
    
    return(
        <>
        <h2>List of Trainers</h2>
        <ul>
            {trainers.map((trainer) =>(
            <li key={trainer.id}>
                <Link to={`/trainer/${trainer.id}`}>{trainer.firstname}</Link>
            </li>
            ))}
        </ul>
        </>
    );
};

