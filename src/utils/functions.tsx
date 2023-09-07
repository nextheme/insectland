import React from 'react'

const getData = async (path:string) => {
    let url = process.env.NEXT_PUBLIC_API_SERVER + '' + path;
    console.log(url)
    const res = await fetch(url)
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.

    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
    }
    return res.json()
}

export { getData }