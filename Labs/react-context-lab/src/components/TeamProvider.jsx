import React, { useEffect, useState } from "react";
import TeamContext from "../context/TeamContext";

export default function TeamProvider({children}){
    const [team, setTeam] = useState(null);
    const [allTeams, setAllTeams] = useState([]);

    useEffect(() => {
        async function fetchTeams(){
            const teams = ["Team 1", "Team 2", "Team 3"];
            setAllTeams(teams);
        };

        fetchTeams();
    }, []);

    return(
        <TeamContext.Provider value={{team, setTeam, allTeams, setAllTeams}}>
            {children}
        </TeamContext.Provider>
    );
};