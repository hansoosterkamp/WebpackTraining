import * as React from "react";
import * as ReactDOM from "react-dom";

// List Component
export const List = <T,>(items: T[], key:(item:T)=>(string), renderItem: (T) => JSX.Element)  => {

    if (!items || items.length == 0)
        return (
            <div>No data to show</div>
        );

    return (
        <ul>
            {items.map((item) => (
                <li key={key(item)}>
                    {renderItem(item)}
                </li>))}
        </ul>)
}
