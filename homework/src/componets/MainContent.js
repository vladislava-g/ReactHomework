import React from "react";
import Joke from "./Joke";

class JokeData {
    constructor(punchLine, question) {
        this.question = question;
        this.punchLine = punchLine;
    }
}

function MainContent() {
    let jokes = [
        new JokeData("They planet.", "How does NASA organize a party?"),
        new JokeData("Because they're dead.", "Why can't dinosaurs clap? "),
        new JokeData("It’s a good thing snakes and dogs don’t interbreed. Nobody wants a loyal snake."),
        new JokeData("Cole’s Law: Thinly Sliced Cabbage"),
        new JokeData("Between you and me, something smells.", "What did the eye say to the eye?")
    ];

    let colors = ["#dd6137", "#e3a960" ,"#52946b", "#4f859a", "#6cb6b1"];

    return (
        <main className="main">
            {
                jokes.map((value, index) => {
                    return <Joke data={value} color={colors[index]} />
                })
            }
        </main>
    );
}

export default MainContent;