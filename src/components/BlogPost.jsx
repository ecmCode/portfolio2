import { lazy, Suspense, useState, useEffect } from 'react'
const BlogPostItem = lazy(() => import('./BlogPostItem'))

const BlogFilter = ({posts, filter, setFilter}) => {

    const filterItems = ['all',...new Set(posts.map(p => p.author))]

    const handleClick = (event) => {
        event.target.id === 'all'
            ? setFilter(null)
            : setFilter(event.target.id)
    }

    const style = {
        box:"w-1/2 flex flex-col sm:flex-row px-16 lg:px-10  justify-start items-start gap-x-6 gap-y-2",
        option:"cursor-pointer capitalize px-6 py-2 text-title underline underline-offset-4" 
    }
    return(
        <div className={style.box}>
            {filterItems.map((f,index) =>{ 
                return(
                        <h4
                        className={style.option}
                        key={index}
                        id={f}
                        onClick={(event) => handleClick(event)}
                        >
                            {f}
                        </h4>
                )})}
        </div>
    )
}

const BlogPost = () => {
    const [posts,setPosts] = useState([])
    const [filter,setFilter] = useState(null)
    
    useEffect(() => {
        import('./db/posts.json')
        .then(p => {
            filter
            ? setPosts(p.default.filter(item => item.author == filter))
            : setPosts(p.default)
        })
    }, [posts, filter]);
    
    return(
        <>
            <BlogFilter 
            filter={filter}
            setFilter={setFilter}
            posts={posts}/>

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

        </>

    )
}

export default BlogPost;
