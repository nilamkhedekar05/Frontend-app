import { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../lib/firebase';
import { useRouter } from 'next/router';

export default function PostsPage() {
    const [posts, setPosts] = useState([]);
    const router = useRouter();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (!user) router.push('/login');
        });
        return unsubscribe;
    }, [router]);

    useEffect(() => {
        const fetchPosts = async() => {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            const data = await response.json();
            setPosts(data);
        };
        fetchPosts();
    }, []);

    return ( <
        div className = "p-8" >
        <
        h1 className = "text-3xl font-bold mb-4" > Posts < /h1> <
        ul > {
            posts.slice(0, 10).map(post => ( <
                li key = { post.id }
                className = "mb-4 p-4 border rounded" >
                <
                h2 className = "text-xl font-semibold" > { post.title } < /h2> <
                p > { post.body } < /p> <
                /li>
            ))
        } <
        /ul> <
        /div>
    );
}