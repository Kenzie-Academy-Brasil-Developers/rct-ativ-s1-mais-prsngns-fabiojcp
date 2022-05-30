import React from "react";
import "./style.css";

export default function CharCard({ data }) {
  return (
    <ul>
      {typeof data === "undefined" ? (
        <li></li>
      ) : (
        data.map((props) => (
          <li
            key={props.id}
            className={props.status === "Alive" ? "liAlive" : "liOther"}
          >
            <h1 className="charTitle">Name: {props.name}</h1>
            <p className="charTxts">Specie: {props.species}</p>
            <p className="charTxts">Origin: {props.origin.name}</p>
            <p className="charTxts">Location: {props.location.name}</p>
            <p className="charTxts">Is Alive?: {props.status}</p>
            <img
              className="charImg"
              src={props.image}
              alt="Character cartoon"
            />
          </li>
        ))
      )}
    </ul>
  );
}
