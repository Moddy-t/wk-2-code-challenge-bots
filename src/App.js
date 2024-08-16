import React, { useEffect, useState } from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy";

function App() {
  const [bots, setBots] = useState([]);
  const [army, setArmy] = useState([]);

  useEffect(() => {
    fetch("https://my-json-server.typicode.com/Moddy-t/wk-2-code-challenge-bots/bots")
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
    fetch(
      `https://my-json-server.typicode.com/Moddy-t/wk-2-code-challenge-bots/bots/${botToDelete.id}`,
      { method: "DELETE" }
    )
      .then(() => {
        setBots(bots.filter((bot) => bot.id !== botToDelete.id));
        setArmy(army.filter((bot) => bot.id !== botToDelete.id));
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="app-container">
      <div className="top-bar">
        <img
          src="https://i.pinimg.com/736x/30/df/48/30df48b1868f27c6dfd04819aa9524df.jpg"
          alt="logo"
        />
        <h2 id="header">BOT BATTLR:guilty as CHARGED</h2>
      </div>
      <div className="row">
        <div className="your-bot-army">
          <h2>Your Bot Army</h2>
          <YourBotArmy army={army} releaseBot={releaseBot} />
        </div>
        <div className="available-bots">
          <h2 id="header">Available Bots</h2>
          <BotCollection bots={bots} onClick={enlistBot} onDelete={onDelete} />
        </div>
      </div>
    </div>
  );
}

export default App;
