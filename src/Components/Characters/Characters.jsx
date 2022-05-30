import React from "react";

export default function Characters({ numberPage, ChangePage }) {
  return (
    <div className="boxCharaters">
      <h1 className="tittleCharaters">Personagens Rick & Morty</h1>
      <div className="pageChange">
        <button className="btnPage" onClick={() => ChangePage("menos")}>-</button>
        <p>Page: {numberPage}</p>
        <button className="btnPage" onClick={() => ChangePage("mais")}>+</button>
      </div>
    </div>
  );
}
