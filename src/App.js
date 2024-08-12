import React, { useEffect, useState } from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy";
import Sort from "./Sort";

function App() {
  const [bots, setBots] = useState([]);
  const [army, setArmy] = useState([]);
  const [sort, setSort] = useState("");

  useEffect(() => {
    fetch("http://localhost:8001/bots")
      .then((resp) => resp.json())
      .then((data) => setBots(data))
      .catch((error) => console.log(error));
  }, []);

  const enlistBot = (selectedBot) => {
    if (!army.find((bot) => bot.id === selectedBot.id)) {
      setArmy([...army, selectedBot]);
    } else {
      return "bot already exists in the army";
    }
  };

  const releaseBot = (DismissBot) => {
    setArmy(army.filter((bot) => bot.id !== DismissBot.id));
  };

  const onDelete = (botToDelete) => {
    fetch(`http://localhost:8001/bots/${botToDelete.id}`, { method: "DELETE" })
      .then(() => {
        setBots(bots.filter((bot) => bot.id !== botToDelete.id));
        setArmy(army.filter((bot) => bot.id !== botToDelete.id));
      })
      .catch((error) => console.log(error));
  };

  const sortBots = (bots) => {
    if (sort) {
      return [...bots].sort((a, b) => b[sort] - a[sort]);
    }
    return bots;
  };

  const sortedBots = sortBots(bots);

  return (
    <div className="app-container">
      <div className="top-bar">
        <h1 id="header">BOT BATTLR</h1>
      </div>
      <div className="row">
        <div className="available-bots">
          <h2 id="header">Available Bots</h2>
          <BotCollection bots={sortedBots} onClick={enlistBot} onDelete={onDelete} />
        </div>
        <div className="your-bot-army">
          <h2>Your Bot Army</h2>
          <YourBotArmy
            army={army}
            releaseBot={releaseBot}
            onDelete={onDelete}
          />
          <Sort setSort={setSort} />
        </div>
      </div>
    </div>
  );
}

export default App;
