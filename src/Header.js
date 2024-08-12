import React from "react";
import Search from "./Search";
import Sort from "./Sort";

function Header(){
    return(
        <div class ="header">
            <h1>Bot Battlr: Where Rust Never Sleeps</h1>
            <Search />
            <Sort />
        </div>
    )
}
export  default Header