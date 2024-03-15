import { useState } from "react"

export function CreateTodo() {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    return (
        <div>
            <div>
                <input type="text" placeholder="title" onChange={function (e){
                    setTitle(e.target.value)
                }}></input>
            </div>
            <div>
                <input type="text" placeholder="description" onChange={function (e){
                    setDescription(e.target.value)
                }}></input>
            </div>

            <div>
                <button onClick={() =>{
                    fetch("http://localhost:3000/todo", {
                        method: "POST",
                        body: JSON.stringify({
                            title:title,
                            description:description
                        }),
                        headers:{
                            "Content-type": "application/json" 
                        }
                    })
                    .then(async function(res) {
                        // const json = await res.json();
                        alert("Todo created")
                    })
                }}>Create Todo</button>
            </div>
        </div>
    )
}