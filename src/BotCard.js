import React from "react";

function BotCard({ bot, onClick, onDelete }) {
  return (
    <div className="card">
      <img src={bot.avatar_url} alt={bot.name} />
      <h3>{bot.name}</h3>
      <p> Class: {bot.bot_class}</p>
      <p>Health:{bot.health}</p>
      <p>Damage: {bot.damage}</p>
      <p>Armor: {bot.armor}</p>
      
      <div className="btn-container">
        <button onClick={() => onClick(bot)} className="btn1">
          Enroll bot
        </button>
        <button onClick={() => onDelete(bot)} className="btn2">
          X
        </button>
      </div>
    </div>
  );
}
export default BotCard;
