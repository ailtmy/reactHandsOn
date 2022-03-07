import React, { useState, useEffect } from "react";


function ResLoading({ login }) {
    const [data, setData] = useState();
    const [error, setError] = useState();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (!login) return;
        setLoading(true);
        fetch(`https://api.github.com/users/${login}`)
            .then((data) => data.json())
            .then(setData)
            .then(() => setLoading(false))
            .catch(setError);
    }, [login]);

    if (error) return <pre>{JSON.stringify(error, null, 2)}</pre>;

    if (loading) return <h1>loading...</h1>;

    if (!data) return null;

    return (
        <div className="githunUser">
            <img
                src={data.avatar_url}
                alt={data.login}
                style={{ width: 200 }}
            />
            <div>
                <h1>{data.lgin}</h1>
                {data.name && <p>{data.name}</p>}
                {data.location && <p>{data.location}</p>}
            </div>
        </div>
    );
}

export default function ResLoadingPrint() {
    return <ResLoading login="moonhighway" />
}