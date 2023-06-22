import * as React from "react";
import { useEffect, useState } from "react"
import { Main } from "./main";
import { List } from "./list"  


    //<List data={tahoe_peaks}
            //    renderEmpty={<p>The list is empty</p>}
            //    renderItem={(item) => {
            //        return (
            //            <>
            //                {item.name} - {item.elevation} ft.
            //            </>)
            //    }}
            //>

interface IListIem {
    name: string
}

export const App = () => {


    const tahoe_peaks = [
        { name: "Freel", elevation: 10891 },
        { name: "Monument", elevation: 10067 },
        { name: "Pyramid", elevation: 9983 },
        { name: "Tallac", elevation: 9735 }
    ];

    const renderPeakListItem = (item: IListIem) => {
        return (
            <div>name: {item.name}, Elevation: {(item as any)["elevation"]} ft.</div>
        )
    }

    // displaying all items using a generic list function:

    return (
        <>
            <div>Here is a list</div>
            {List(tahoe_peaks as IListIem[], (item) => item.name, renderPeakListItem) }
            <div>End of list</div>
            <Main />
        </>
    );

}

