import React from "react";
import useTeamContext from "../context/useTeamContext";

export default function TeamSelection(){
    const { team, setTeam, allTeams } = useTeamContext();

    function handleChange(event){
        setTeam(event.target.value);
    };

    return(
        <select value={team} onChange={handleChange}>
            {allTeams.map((team) => (
                <option key={team} value={team}>
                    {team}
                </option>
            ))}
        </select>
    );
};