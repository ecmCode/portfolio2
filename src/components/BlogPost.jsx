import { lazy, Suspense, useState, useEffect } from 'react'
import fallback from "../assets/fallback_wp.jpg"

const BlogPostItem = lazy(() => import('./BlogPostItem'))

const BlogFilter = ({posts, filter, setFilter, filteredPosts}) => {

    const filterItems = ['all',...new Set(posts.map(p => p.author))]

    const handleClick = (event) => {
        event.target.id === 'all'
            ? setFilter(null)
            : setFilter(event.target.id)
    }

    const style = {
        box:"w-full flex px-16 lg:px-10 justify-between items-start sm:items-center  select-none",
        list:"flex flex-col sm:flex-row gap-x-6 gap-y-2",
        option:"cursor-pointer capitalize px-6 py-2 text-title underline underline-offset-4",
        selected:"capitalize px-6 py-2 text-white bg-secondary"
    }
    return(
        <div className={style.box}>
            <div className={style.list}>
                {filterItems.map((f,index) =>{ 
                    return(
                            <h4
                            className={f === filter ? style.selected :style.option}
                            key={index}
                            id={f}
                            onClick={(event) => handleClick(event)}
                            >
                                {f}
                            </h4>
                    )
                })}
            </div>
            <h4 className="mx-10">Posts: {filteredPosts.length}</h4>
        </div>
    )
}

const BlogPost = () => {
    
    const maxDisplayPost = 8

    const [posts,setPosts] = useState([])
    const [filter,setFilter] = useState(null)
    const [filteredPosts,setFilteredPosts] = useState([])

    useEffect(() => {
        import('../db/posts.json').then(p => setPosts(p.default))
        filter 
            ? setFilteredPosts(posts.filter(item => item.author === filter))
            : setFilteredPosts(posts)
    }, [posts, filter]);
    
    useEffect(() => {
        console.log(filter || 'All')
    }, [filter]);
    
    return(
        <>
            <BlogFilter 
            filter={filter}
            setFilter={setFilter}
            filteredPosts={filteredPosts}
            posts={posts}/>

            <div className="p-16 lg:p-10 grid justify-center grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-12 drop-shadow-md">
                {posts && filteredPosts.slice(0 , maxDisplayPost).map(p => (
                    <Suspense fallback={<div></div>}>
                        <BlogPostItem 
                        title={p.title}
                        author={p.author}
                        date={p.date}
                        background={fallback}>
                            {p.content}
                        </BlogPostItem>
                    </Suspense>
                ))}
            </div>
            
            {filteredPosts.length > maxDisplayPost && 
                <div className='w-full my-10 flex justify-center'>
                    <button className='w-max'>
                        Show More Posts
                    </button>
                </div>
            }
        </>

    )
}

export default BlogPost;
