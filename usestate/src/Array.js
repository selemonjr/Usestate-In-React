import {data} from "./data";
import React from "react";
const Array = () => {
    const [people,SetPeople] = React.useState(data);
    const clear = () => {
        SetPeople([])
    };
    const removeItems = (id) => {
        let newUsers = people.filter((user) => user.id !== id)
        SetPeople(newUsers)
    };
    return (
        <div className="container">
        {people.map((person) => {
            const {id,name} = person;
            return (
                <div key={id} className="line">
                <h3>{name}</h3>
                <button type="button" className="button" onClick={() => removeItems(id)}>Remove Item</button>
                </div>
            )
        })}
        <button type="button" className="btn" onClick={clear}>Clear Items</button>
        </div>
    )
}
export default Array
