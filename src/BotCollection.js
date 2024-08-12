import React from "react";
import BotCard from "./BotCard";

function BotCollection({ bots, onClick, onDelete }) {
  return (
    <div className="bot-collection">
      {bots.map((bot) => (
        <div className="column">
        <BotCard key={bot.id} bot={bot} onClick={onClick} onDelete={onDelete} />
        </div>
      ))}
    </div>
  );
}
export default BotCollection;
