import * as React from "react";
import { useEffect, useState } from "react"
import { Main } from "./main";
import { GithubUser } from "./githubUser";
import { MyFetch } from "./myFetch";

export const App = () => {

    // Here we use useEffect (once at startup of application) to get some data from the internet.
    // Remember useEfffect takes tow arguments: 1: what to do functions, and 2: when to do it. (dependency array) 
    // We then use useState to bind some of the properties to the UI.

    const _apiUrl = "https://api.github.com/users/moonhighway"
    const [data, setData] = useState(null);
    // for displaying loading states:
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);


    // useEffect expects an React.EffectCallBack function that is not awaitable.
    // To use useEffect with the async await syntax wrap the async callback in a
    // separate constant and then call the promise with a .catch:

    useEffect(() => {

        setLoading(true);

        // define async/await function:
        const fetchData = async () => {
            const jsonData = await MyFetch.fetchJSON(_apiUrl);
            setData(jsonData);
        }
        // call promise and handle error
        fetchData().catch(setError); // note can't use await here!

        setLoading(false)
    },
        []
    )



    if (loading) return (<h1>Loading...</h1>);
    if (error) return (<h1>{JSON.stringify(error)}</h1>);
    if (!data) return null;

    return (
        <>
            <GithubUser name={data.name} location={data.location} avatar={data.avatar_url} />
            <h1>Data</h1>
            <pre>
                {JSON.stringify(data, null, 2)}
            </pre>
            <Main />
        </>
    )
}
    // Looping through a list:

    // Extra: suppose the data would represents a list of all git hub users to show, you would be able to
    // show this list as follows:

    //return (
    //    <div>
    //        {data.users.map((user) => <GithubUser name=user.name location=user.location avatar=user.avatar_url />)}
    //    </div>
    //) 







