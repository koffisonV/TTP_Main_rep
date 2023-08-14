import React from "react";
import { NavLink } from "react-router-dom";

export default function Nav(){
  return (
    <>
    <nav>
      <li>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          Home
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/wizarding-campuses"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          Campuses
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/students"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          Students
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/createCampus"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          Create Campus
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/createStudent"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          Create Student
        </NavLink>
      </li>
    </nav>
    </>
  )
};