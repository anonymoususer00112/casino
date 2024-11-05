import data from "./maindata"
import Card from "./Card/Card";
import "./main.scss"
import {useState} from "react";

function Main() {
    const cardsTotalLength = 10;
    const arr = Array(cardsTotalLength - data.length);
    return (
        <section className="main">
            <div className="container-fluid">
                <h2>Play2winGames</h2>
                <div className="row">
                    {[...data, ...arr].map((item, i) => {
                        return (
                            <Card key={i} {...item} />
                        )
                    })}
                </div>
            </div>
        </section>

    )
}

export default Main;