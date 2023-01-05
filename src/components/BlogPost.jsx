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
        <div className="p-6 sm:p-20 flex justify-center items-center">
            <div className=" grid justify-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                {posts && posts.map(p => (
                    <Suspense fallback={<div></div>}>
                        <BlogPostItem title={p.title}>
                            {p.content}
                        </BlogPostItem>
                    </Suspense>
                ))}
            </div>
        </div>

    )
}

export default BlogPost;
