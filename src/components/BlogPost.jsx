import { lazy, Suspense, useState, useEffect } from 'react'
const BlogPostItem = lazy(() => import('./BlogPostItem'))

const BlogPost = () => {
    const [posts,setPosts] = useState([])

    useEffect(() => {
        setTimeout(() => {
            import('./db/posts.json').then(p => setPosts(p.default))
        }, 1000);
    }, []);
    
    return(
        <div className="p-16 lg:p-10 grid justify-center grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-12 drop-shadow-md">
            {posts && posts.map(p => (
                <Suspense fallback={<div></div>}>
                    <BlogPostItem 
                    title={p.title}
                    author={p.author}
                    date={p.date}
                    background={p.background}>
                        {p.content}
                    </BlogPostItem>
                </Suspense>
            ))}
        </div>

    )
}

export default BlogPost;
