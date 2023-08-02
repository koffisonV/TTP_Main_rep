import React from "react";
import useTeamContext from "../context/useTeamContext";

export default function TeamData(){
    const { team } = useTeamContext();

    return <div>{team ? `Data for ${team}` : "Please select a team"}</div>;
};