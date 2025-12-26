import React from 'react'

const page = async () => {

    const data = await fetch('https://jsonplaceholder.typicode.com/posts')
    const posts = await data.json()

    return (
        <ul>
            {posts.map((post) => (
                <li key={post.id}>{post.title}</li>
            ))}
        </ul>
    )
}

export default page