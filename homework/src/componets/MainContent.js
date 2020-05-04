import React from "react";
import TodoItem from "./TodoItem.js";
import todosData from "./todosData";

function MainContent() {

    return (
        <main className="main">
            {
                todosData.map((value) => {
                    return <TodoItem data={value} id={value.id}/>
                })
            }
        </main>
    );
}

export default MainContent;