import React from "react";
import BotCard from "./BotCard";

function BotCollection({ bots, onClick, onDelete }) {
  return (
    <div className="bot-collection">
      {bots.map((bot) => (
        <BotCard key={bot.id} bot={bot} onClick={onClick} onDelete={onDelete} />
      ))}
    </div>
  );
}
export default BotCollection;
