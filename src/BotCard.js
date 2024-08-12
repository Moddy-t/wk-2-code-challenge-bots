import React from "react";

function BotCard({ bot, onClick, onDelete }) {
  return (
    <div className="card">
      <img src={bot.avatar_url} alt={bot.name} />
      <h3>{bot.name}</h3>
      <p> Class: {bot.bot_class}</p>
      <button onClick={() => onClick(bot)}>Enroll bot</button>
      <button onClick={() => onDelete(bot)}>X</button>
    </div>
  );
}
export default BotCard;
