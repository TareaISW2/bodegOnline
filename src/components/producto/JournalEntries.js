import React from "react";
import { useSelector } from "react-redux";
import { JournalEntry } from "./JournalEntry";

export const JournalEntries = () => {
  const { productos } = useSelector((state) => state.productos);

  return (
    <div className="journal__entries">
      {productos.map((producto) => (
        <JournalEntry key={producto.id} {...producto} />
      ))}
    </div>
  );
};
