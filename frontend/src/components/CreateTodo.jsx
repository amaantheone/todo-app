import { useState } from "react";

export function CreateTodo() {
    const [title, SetTitle] = useState("");
    const [description, SetDescription] = useState("");
    return <div>
        <input style ={{
            padding: 5,
            margin: 5
        }} type="text" placeholder="title" onChange={function(e) {
            SetTitle(e.target.value);
        }}></input> <br />
        <input style ={{
            padding: 5,
            margin: 5
        }}  type="text" placeholder="description" onChange={function(e) {
            SetDescription(e.target.value);
        }}></input> <br />
        <button style ={{
            padding: 5,
            margin: 5
        }} onClick={() => {
            fetch("http://localhost:3000/todo", {method: "POST", body: JSON.stringify({
                title: title,
                description: description
            }),
            headers: {
                "content-type": "application/json"
            }
        })
            .then(async function(res) {
               const json = await res.json();
               alert("Todo added");
            })
        }} >Add a Todo</button>
    </div>
}