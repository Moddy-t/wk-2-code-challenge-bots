import React from "react";

function YourBotArmy({ army, releaseBot }) {
  console.log(releaseBot);
  return (
    <div>
      <div className="bot-army">
        {army.length === 0 ? (
          <p> No bot enlisted yet</p>
        ) : (
          // return a list of bot names
          army.map((bot) => (
            <div key={bot.id} class="card">
              <h3>{bot.name}</h3>
              <img src={bot.avatar_url} alt={bot.name} className="card-image" />
              <button onClick={() => releaseBot(bot)} className="btn3">
                Dismiss bot
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
export default YourBotArmy;
