import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useCampuses } from "../context/CampusesContext";
import axios from "axios";

export default function EditCampus() {
  const { id } = useParams();
  const {campus, setCampus, handleClick} = useCampuses();
  const [newName, setNewName] = useState("");
  const [newAddress, setNewAddress] = useState("");


  useEffect(() => {
    async function fetchCampus() {
      try {
        const { data } = await axios.get(`api/campuses/${id}`);
        setCampus(data);
        setNewName(data.name);
        setNewAddress(data.address);
      } catch (error) {
        console.error("Error fetching campus:", error);
      }
    }
    fetchCampus();
  }, [id]);

  async function handleUpdate() {
    try {
      await axios.put(`api/campuses/${id}`, {
        name: newName,
        address: newAddress,
      });
      handleClick();
    } catch (error) {
      console.error("Error updating campus:", error);
    }
  }

  return (
    <div>
      <h2>Edit Campus</h2>
      <label>
        Name:
        <input type="text" value={newName} onChange={(e) => setNewName(e.target.value)} />
      </label>
      <label>
        Address:
        <input type="text" value={newAddress} onChange={(e) => setNewAddress(e.target.value)} />
      </label>
      <button onClick={handleUpdate}>Update</button>
      <button onClick={handleClick}>Go Back</button>
    </div>
  );
}
